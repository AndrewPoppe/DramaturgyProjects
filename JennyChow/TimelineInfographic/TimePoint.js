// defines a normal timepoint
// required options:
//   TimeLine: the TimeLine object to add the TimePoint to
//   
class TimePoint {
	constructor(options) {
		const defaults = {
			x: "0%",
			r: 8,
			fill: "white", 
			stroke: "black",
			strokeWidth: 1,
			content: "placeholder text",
			textPos: "up",
			anchor: "middle",
			wrap: 40,
		};
		this.opts = {...defaults, ...options};
		if (!this.opts.TimeLine) throw("TimePoint options must include TimeLine.");
		this.opts.y = this.opts.TimeLine.opts.lineY;
		this.ns = "http://www.w3.org/2000/svg";
		this.classID = Math.random().toString(36).substring(2);
		this.elements = [];
		this.construct();
	}

	// draw an element onto the TimeLine container's SVG
	drawElement(elt) {
		this.opts.TimeLine.svg.appendChild(elt);
	}

	// make a circle element
	makeCircle() {
		const C = document.createElementNS(this.ns, "circle");
		C.setAttribute("cx", this.opts.x);
		C.setAttribute("cy", this.opts.y);
		C.setAttribute("r",  this.opts.r);
		C.setAttribute("fill", this.opts.fill);
		C.setAttribute("stroke", this.opts.stroke);
		C.setAttribute("stroke-width", this.opts.strokeWidth);
		C.Point = this;

		// Handle mouseover
		C.onmouseenter = function() {
			// Show text/content box and lines
			this.Point.elements.forEach(elt => elt.setAttribute("opacity", 100));

			// increase circle radius and stroke width
			this.setAttribute("r", this.Point.opts.r * 2)
			this.setAttribute("stroke-width", this.Point.opts.strokeWidth * 4);
		}
		C.onmouseleave = function() {
			// Hide text/content box and lines
			this.Point.elements.forEach(elt => elt.setAttribute("opacity", 0));

			// return circle radius and stroke width to normal
			this.setAttribute("r", this.Point.opts.r)
			this.setAttribute("stroke-width", this.Point.opts.strokeWidth);
		}

		return C;
	}

	// make a box element for text
	makeTextBox(txtLoc) {
		const B = document.createElementNS(this.ns, "rect");
		B.setAttribute("x", txtLoc.x - 10);
		B.setAttribute("y", txtLoc.y - 10);
		B.setAttribute("width", txtLoc.width + 20);
		B.setAttribute("height", txtLoc.height + 20);
		B.setAttribute("fill", this.opts.fill);
		B.setAttribute("stroke", this.opts.stroke);
		B.setAttribute("stroke-width", "6");
		B.setAttribute("rx", "10");
		B.setAttribute("opacity", 0);
		this.elements.push(B);
		return B;
	}

	// make a box element for a timeline
	makeTimeLineBox() {
		console.log("TODO");
	}

	// make a text element
	makeText() {
		// word wrap
		const Wrap = (s, w) => s.replace(
			new RegExp(`(?![^\\n]{1,${w}}$)([^\\n]{1,${w}})\\s`, 'g'), '$1\n'
		);

		const T = document.createElementNS(this.ns, "text");
		T.setAttribute("x", this.opts.x);

		const lineY = this.opts.TimeLine.MainLine.getBBox().y;

		T.setAttribute("y", this.opts.textPos === "up" ? lineY - 10 : lineY + 10);
		T.setAttribute("text-anchor", this.opts.anchor);

		const lines = Wrap(this.opts.content, this.opts.wrap).split('\n');
		
		lines.forEach(line => {
			let thisLine = document.createElementNS(this.ns, "tspan");
			thisLine.setAttribute("dy", "1.2em");
			thisLine.setAttribute("x", this.opts.x);
			thisLine.setAttribute("text-anchor", this.opts.anchor);
			thisLine.textContent = line;
			T.appendChild(thisLine);
		});
		T.setAttribute('opacity', 0);
		T.style.font = "italic 12px sans-serif;";
		this.elements.push(T);
		return T;
	}

	// make a div element to hold a timeline
	makeTimeLineDiv() {
		console.log("TODO");
	}

	// make a line element 
	makeLine(x1, x2, y1, y2, color, strokeWidth) {
		const L = document.createElementNS(this.ns, "line");
		L.setAttribute("x1", x1);
		L.setAttribute("y1", y1);
		L.setAttribute("x2", x2);
		L.setAttribute("y2", y2);
		L.setAttribute("stroke-width", strokeWidth);
		L.setAttribute("stroke", color);
		L.setAttribute('opacity', 0);
		this.elements.push(L);
		return L;
	}

	// Build the thing
	construct() {
		const circ = this.makeCircle();

		if (typeof this.opts.content === "string") { 
			const txt = this.makeText();
			this.drawElement(txt);
			const txtLoc = txt.getBBox(),
				lineLoc = this.opts.TimeLine.MainLine.getBBox;

			const txtBoxDiff = lineLoc.y - (txtLoc.y + txtLoc.height);
			if ((txtBoxDiff < 10 && this.opts.textPos === "up") ||
				(txtBoxDiff > -10 && this.opts.textPos !== "up"))
				txt.setAttribute("y", lineLoc.y - txtBoxDiff);

				box = this.makeTextBox(txtLoc);
			
			// Get bounds of box and circle and make connecting lines
			this.drawElement(box);
			this.drawElement(circ);
			const circLoc = circ.getBBox(),
				boxLoc = box.getBBox(),
				X1 = circLoc.x + circLoc.width/2,
				Y1 = circLoc.y + circLoc.height/2,
				X2 = boxLoc.x + boxLoc.width/2,
				Y2 = boxLoc.y + boxLoc.height/2,
				connectLine = this.makeLine(X1, X2, Y1, Y2, this.opts.fill, 6),
				connectBackground = this.makeLine(X1, X2, Y1, Y2, this.opts.stroke, 14);

			// Add elements to group in the order I want them shown
			// Elements that were already present will not be duplicated, 
			// but will be re-ordered
			this.drawElement(connectBackground);
			this.drawElement(circ);
			this.drawElement(box);
			this.drawElement(connectLine);
			this.drawElement(txt);
	


		}

	}

}
