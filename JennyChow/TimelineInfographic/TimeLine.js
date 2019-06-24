// Class for TimeLine
class TimeLine {
	constructor(x, y, width, height, bgColor, lineColor, id, container) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.bgColor = bgColor;
		this.lineColor = lineColor;
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
		D.setAttribute("x", this.x);
		D.setAttribute("y", this.y);
		D.setAttribute("height", this.height);
		D.setAttribute("width", this.width);
		
		this.div = D;
	}

	// Create the SVG
	createSVG() {
		const S = this.createElement("svg");
		S.setAttribute("height", this.height);
		S.setAttribute("width", this.width);
		//S.setAttribute("")
		this.svg = S;
		this.div.appendChild(this.svg);
	}

	// Create the thing
	draw() {
		this.createDIV();
		this.createSVG();
		this.container.appendChild(this.div);
	}

}