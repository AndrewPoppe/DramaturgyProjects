// Class for TimeLine
class TimeLine {
	constructor(options) {
		const defaults = {
			x: "5%",
			y: "0px",
			width: "90%",
			height: "20%",
			bgColor: "white",
			lineColor: "black",
			container: document.body,
			lineY: "50%",
			lineThickness: 3,
			years: [1900,2000],
			drawYear: true,
			Title: ""
		};
		this.opts = {...defaults, ...options};
		if (this.opts.svg) {
			this.svg = this.opts.svg;
			this.div = this.svg.parentElement;
		}
		this.svg = this.opts.svg;
		this.ns = "http://www.w3.org/2000/svg";
		this.draw();
	}

	// fade div in and out
	fadeOut() {
	    let op = 1;  // initial opacity
	    let element = this.div;
	    let timer = setInterval(function () {
	        if (op <= 0.1){
	            clearInterval(timer);
	            element.style.display = 'none';
	        }
	        element.style.opacity = op;
	        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
	        op -= op * 0.1;
	    }, 10);
	}
	fadeIn() {
	    let op = 0.1;  // initial opacity
	    let element = this.div;
	    element.style.display = 'block';
	    let timer = setInterval(function () {
	        if (op >= 1){
	            clearInterval(timer);
	        }
	        element.style.opacity = op;
	        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
	        op += op * 0.1;
	    }, 10);
	}



	// calculate year markers
	// for a marker every decade
	calculateYearMarkers() {
		const markerYears = [],
			range = this.opts.years[1] - this.opts.years[0];
		for (let i = this.opts.years[0] + 1; i < this.opts.years[1]; i++)
			if (i % 10 === 0) markerYears.push({year: i, percent: `${(i - this.opts.years[0])/range * 100}%`});
		return markerYears;
	}

	// helper for making an svg element
	createElement(elt) {
		return document.createElementNS(this.ns, elt);
	}

	// Create the div
	createDIV() {
		const D = document.createElement('div');
		D.style.left = this.opts.x;
		D.style.top = this.opts.y;
		D.style.height = this.opts.height;
		D.style.width = this.opts.width;
		D.style.position = "fixed";
		D.style.backgroundColor = this.opts.bgColor;
		this.div = D;
	}

	// Create the SVG
	createSVG() {
		const S = this.createElement("svg");
		S.setAttribute("height", "100%");
		S.setAttribute("width", "100%");
		this.svg = S;
	}

	// Create the main line
	createMainLine() {
		const M = this.createElement("line");
		M.setAttribute("x1", "0%");
		M.setAttribute("x2", "100%");
		M.setAttribute("y1", this.opts.lineY);
		M.setAttribute("y2", this.opts.lineY);
		M.setAttribute("stroke", this.opts.lineColor);
		M.setAttribute("stroke-width", this.opts.lineThickness);
		this.MainLine = M;
		this.svg.appendChild(this.MainLine);
	}

	// Create title text
	createTitle() {
		const T = this.createElement("text");
		T.setAttribute("x", "50%");
		T.setAttribute("y", "5%");
		T.setAttribute("text-anchor", "middle");
		T.style.font = "bold 24px Helvetica";
		T.style.fill = "#330055";
		this.opts.Title.forEach(line => {
			let t = this.createElement("tspan");
			t.setAttribute("x", "50%");
			t.setAttribute("dy", "1.2em");
			t.textContent = line;
			T.appendChild(t);
		});
		this.Title = T;
		this.svg.appendChild(T);
	}

	// Draw year markers
	drawYearMarkers() {
		const markers = this.calculateYearMarkers();
		markers.forEach(marker => {
			const M = this.createElement("line"),
				YNumber = this.percentToNumber(this.opts.lineY);
			M.setAttribute("x1", marker.percent);
			M.setAttribute("x2", marker.percent);
			M.setAttribute("y1", `${YNumber + 2}%`);
			M.setAttribute("y2", `${YNumber - 2}%`);
			M.setAttribute("stroke", this.opts.lineColor);
			M.setAttribute("stroke-width", this.opts.lineThickness/2);
			this.svg.appendChild(M);

			const L = this.createElement("text");
			L.setAttribute("x", marker.percent);
			L.setAttribute("y", `${YNumber + 4}%`);
			L.setAttribute("text-anchor", "middle");
			L.style.font = "18px sans-serif";
			L.textContent = marker.year;
			if (this.opts.drawYear) this.svg.appendChild(L);
		});
	}

	// function to convert percent string to a number
	percentToNumber(pct) {
		return Number(pct.replace("%", ""));
	}

	// Create the thing
	draw() {
		if (!this.svg) {
			this.createDIV();
			this.createSVG();
			this.div.appendChild(this.svg);
		}
		this.createMainLine();
		this.drawYearMarkers();
		this.createTitle();
		this.opts.container.appendChild(this.div);
	}

}