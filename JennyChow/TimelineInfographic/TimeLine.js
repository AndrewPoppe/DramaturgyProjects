// Class for TimeLine
class TimeLine {
	constructor(x, y, width, height, bgColor, lineColor, id, container) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.bgColor = bgColor;
		this.lineColor = lineColor;
		this.lineThickness = 3;
		this.container = container;
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
		D.style.left = this.x;
		D.style.top = this.y;
		D.style.height = this.height;
		D.style.width = this.width;
		D.style.position = "fixed";
		D.style.backgroundColor = this.bgColor;
		this.div = D;
	}

	// Create the SVG
	createSVG() {
		const S = this.createElement("svg");
		S.setAttribute("height", this.height);
		S.setAttribute("width", "100%");
		//S.setAttribute("")
		this.svg = S;
	}

	// Create the main line
	createMainLine() {
		const M = this.createElement("line");
		M.setAttribute("x1", "0%");
		M.setAttribute("x2", "100%");
		M.setAttribute("y1", "50%");
		M.setAttribute("y2", "50%");
		M.setAttribute("stroke", this.lineColor);
		M.setAttribute("stroke-width", this.lineThickness);
		this.MainLine = M;
		this.svg.appendChild(this.MainLine);
	}

	// Create the thing
	draw() {
		this.createDIV();
		this.createSVG();
		this.createMainLine();
		this.div.appendChild(this.svg);
		this.container.appendChild(this.div);
	}

}