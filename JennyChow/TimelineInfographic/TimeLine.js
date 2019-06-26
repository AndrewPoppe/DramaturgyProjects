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
			lineThickness: 3
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

	// Create the thing
	draw() {
		if (!this.svg) {
			this.createDIV();
			this.createSVG();
			this.div.appendChild(this.svg);
		}
		this.createMainLine();
		this.opts.container.appendChild(this.div);
	}

}