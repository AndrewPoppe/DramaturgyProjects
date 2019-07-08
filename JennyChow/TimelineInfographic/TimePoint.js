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
			wrap: 60,
			year: 1900
		};
		this.opts = {...defaults, ...options};
		if (!this.opts.TimeLine) throw("TimePoint options must include TimeLine.");
		this.opts.y = this.opts.TimeLine.opts.lineY;
		this.ns = "http://www.w3.org/2000/svg";
		this.classID = Math.random().toString(36).substring(2);
		this.elements = [];
		this.construct();
	}

	// adds an element into this point's group
	addElement(elt) {
		this.group.appendChild(elt);
	}

	// adds group onto the TimeLine container's SVG
	drawGroup() {
		this.opts.TimeLine.svg.appendChild(this.group);
	}

	// make a circle element
	makeCircle() {
		const C = document.createElementNS(this.ns, "circle");
		C.setAttribute("cx", this.opts.x);
		C.setAttribute("cy", this.opts.y);
		C.setAttribute("r",  this.opts.r);
		C.setAttribute("fill", this.double ? `url(#${this.lg.id})` : this.opts.fill);
		C.setAttribute("stroke", this.opts.stroke);
		C.setAttribute("stroke-width", this.opts.strokeWidth);
		console.log(this.opts.class);
		C.classList.add(this.opts.class);
		C.Point = this;
		

		// Handle mouseover
		C.onmouseenter = function() {
			// re-add circle to svg to force it to the front
			//this.Point.drawElement(this);

			// Show text/content box and lines
			this.Point.elements.forEach(elt => {elt.style.display = "block"});

			// increase circle radius and stroke width
			this.setAttribute("r", this.Point.opts.r * 2);
			this.setAttribute("stroke-width", this.Point.opts.strokeWidth * 4);
			this.Point.drawGroup();
		}
		C.onmouseleave = function() {
			// Hide text/content box and lines
			this.Point.elements.forEach(elt => {elt.style.display = "none"});

			// return circle radius and stroke width to normal
			this.setAttribute("r", this.Point.opts.r)
			this.setAttribute("stroke-width", this.Point.opts.strokeWidth);
		}

		return C;
	}

	// make a group to hold all this point's elements
	makeGroup() {
		const g = document.createElementNS(this.ns, "g");
		this.group = g;
		return g;
	}

	// make a box element for text
	makeTextBox(txtLoc, index) {
		const B = document.createElementNS(this.ns, "rect");
		B.setAttribute("x", txtLoc.x - 10);
		B.setAttribute("y", txtLoc.y - 10);
		B.setAttribute("width", txtLoc.width + 20);
		B.setAttribute("height", txtLoc.height + 20);
		B.setAttribute("fill", !this.double ? this.opts.fill : this.opts.fill[index]);
		B.setAttribute("stroke", this.opts.stroke);
		B.setAttribute("stroke-width", "6");
		B.setAttribute("rx", "10");
		B.classList.add(this.opts.class);
		this.elements.push(B);
		return B;
	}

	// make a box element for a timeline
	makeTimeLineBox() {
		console.log("TODO");
	}

	// make a text element
	makeText(textPos, index) {
		// word wrap
		const Wrap = (s, w) => s.replace(
			new RegExp(`(?![^\\n]{1,${w}}$)([^\\n]{1,${w}})\\s`, 'g'), '$1\n'
		);

		const T = document.createElementNS(this.ns, "text");
		T.setAttribute("x", this.opts.x);

		const lineY = this.opts.TimeLine.MainLine.getBBox().y;

		T.setAttribute("y", textPos === "up" ? lineY - 50 : lineY + 50);
		T.setAttribute("text-anchor", this.opts.anchor);
		T.style.font = "italic 18px sans-serif";

		const yearText = document.createElementNS(this.ns, "tspan");
		yearText.setAttribute("dy", "1.2em");
		yearText.setAttribute("x", this.opts.x);
		yearText.setAttribute("text-anchor", this.opts.anchor);
		yearText.textContent = `${this.opts.year}`;
		yearText.style.fill = "red";
		yearText.style.font = "bold 24px Helvetica";
		T.appendChild(yearText);
		
		const content = this.opts.content[index];
		const lines = Wrap(content, this.opts.wrap).split('\n');
		
		let lastNewline = false;
		lines.forEach((line, i) => {
			let thisLine = document.createElementNS(this.ns, "tspan");
			thisLine.setAttribute("dy", i == 0 || lastNewline ? "2.4em" : "1.2em");
			thisLine.setAttribute("x", this.opts.x);
			thisLine.setAttribute("text-anchor", this.opts.anchor);
			thisLine.textContent = line;
			T.appendChild(thisLine);
			lastNewline = line ==="";
		});
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
		L.style.display = "none";
		L.style.pointerEvents = "none";
		this.elements.push(L);
		return L;
	}


	/////////////////////////////////////////////////////
	// THESE ALLOW MULTIPLE TEXT BOXES IN SINGLE POINT //
	/////////////////////////////////////////////////////

	// Create a linear gradient with the given colors, first color on top
	makeLinearGradient(colors) {
		const G = document.createElementNS(this.ns, "linearGradient");
		G.setAttribute("id", Math.random().toString(36).substring(2));
		G.setAttribute("x1", 1);
		G.setAttribute("x2", 1);
		G.setAttribute("y1", 0);
		G.setAttribute("y2", 1);
		G.appendChild(this.makeLinearGradientStop("0%", colors[0]));
		G.appendChild(this.makeLinearGradientStop("50%", colors[0]));
		G.appendChild(this.makeLinearGradientStop("50%", colors[1]));
		G.appendChild(this.makeLinearGradientStop("100%", colors[1]));
		return G;
	}
	makeLinearGradientStop(offset, color) {
		const S = document.createElementNS(this.ns, "stop");
		S.setAttribute("offset", offset);
		S.setAttribute("stop-opacity", 1);
		S.setAttribute("stop-color", color);
		S.classList.add(this.opts.class);
		return S;
	}




	/////////////////////////////
	////// Build the thing //////
	/////////////////////////////
	construct() {

		if (typeof this.opts.content === "object") {
			this.double = true;
			this.lg = this.makeLinearGradient(this.opts.fill);
			this.opts.TimeLine.svg.appendChild(this.lg);
		} else {
			this.opts.content = [this.opts.content];
		}

		const group = this.makeGroup(),
			circ = this.makeCircle(),
			textGap = 100;



		this.drawGroup();
		this.addElement(circ);

		//if (typeof this.opts.content === "string") {
		const connectBackgrounds = [],
			  boxes = [],
			  connectLines = [],
			  texts = [];
		for (let i = 0; i < this.opts.content.length; i++) {
			let textPos = this.double ? ["up", "down"][i] : this.opts.textPos; 
			let txt = this.makeText(textPos, i);
			this.addElement(txt);
			let txtLoc = txt.getBBox();
			let lineLoc = this.opts.TimeLine.MainLine.getBBox();

			// Deal with txt box location. This should really happen within 
			// the makeText() method...
			let xDiff = (lineLoc.x + lineLoc.width) - (txtLoc.x + txtLoc.width) - 12;

			if (txtLoc.x  < 12) {
				txtLoc.x = 12;
				for (let tspan of txt.children) tspan.setAttribute('x', txtLoc.x + txtLoc.width/2);
			} else if (xDiff < 0) {
				txtLoc.x = txtLoc.x + xDiff;
				for (let tspan of txt.children) tspan.setAttribute('x', txtLoc.x + txtLoc.width/2);
			}

			let txtBoxDiff = lineLoc.y - (txtLoc.y + txtLoc.height);
			if ((txtBoxDiff < textGap && textPos === "up") ||
				(txtBoxDiff > -textGap && textPos !== "up")) {
				txt.setAttribute("y", lineLoc.y - txtLoc.height - textGap);
				txtLoc = txt.getBBox();
			}

			let box = this.makeTextBox(txtLoc, i);
			
			// Get bounds of box and circle and make connecting lines
			this.addElement(box);
			this.addElement(circ);
			let circLoc = circ.getBBox(),
				boxLoc = box.getBBox(),
				X1 = circLoc.x + circLoc.width/2,
				Y1 = circLoc.y + circLoc.height/2,
				X2 = boxLoc.x + boxLoc.width/2,
				Y2 = boxLoc.y + boxLoc.height/2,
				connectLine = this.makeLine(X1, X2, Y1, Y2, this.double ? this.opts.fill[i] : this.opts.fill, 6),
				connectBackground = this.makeLine(X1, X2, Y1, Y2, this.opts.stroke, 14);

			// hide box and text
			box.style.display = "none";
			txt.style.display = "none";

			connectBackgrounds.push(connectBackground);
			boxes.push(box);
			connectLines.push(connectLine);
			texts.push(txt);
		}
		// Add elements to group in the order I want them shown
		// Elements that were already present will not be duplicated, 
		// but will be re-ordered
		connectBackgrounds.forEach(CB => this.addElement(CB));
		this.addElement(circ);
		boxes.forEach(B => this.addElement(B));
		connectLines.forEach(CL => this.addElement(CL));
		texts.forEach(T => this.addElement(T));
	}

}
