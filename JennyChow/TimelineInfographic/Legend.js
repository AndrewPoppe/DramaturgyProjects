
// defines a legend class for the informational legend
// It will consist of a rectangular enclosure with one
// smaller rectangle each for the different timelines,
// having the appropriate color, and with text next to
// the rectangles to describe the nature of the timeline

// Required options:
// content: array with objects,
// 		each object containing color and title keys
// svg: the svg element to draw to

class Legend {
	constructor(options) {
		const defaults = {
			x: "10%", // left edge of legend box
			yb: "95%", // bottom edge of legend box
			backgroundColor: "white", // background color of legend box
			stroke: "black",
			strokeWidth: 2,
			anchor: "left",
			textSize: "14",
			textFont: "Helvetica",
			textFace: "bold",
			ns: "http://www.w3.org/2000/svg"
		};
		this.opts = {...defaults, ...options};

		// container for elements to make shifting x position easier
		this.elements = [];

		if (typeof this.opts.content !== "object") 
			throw("Legend must be provided with content to display.");
		if (!this.opts.svg) 
			throw("Legend must be provided with an svg element.");
		this.run();
	}

	// make a group to hold the legend pieces
	// draws the group to the svg
	makeGroup() {
		const g = document.createElementNS(this.opts.ns, "g");
		this.opts.svg.appendChild(g);
		this.group = g;
	}

	// make text content, one line per item in content array
	// it actually draws the text to the svg, so getting the
	// bounding box is possible immediately 
	// assumes makeGroup() has been called
	makeText() {
		const T = document.createElementNS(this.opts.ns, "text");
		T.setAttribute("x", this.opts.x);

		T.setAttribute("y", this.opts.yb);
		T.setAttribute("text-anchor", this.opts.anchor);
		T.style.font = `${this.opts.textFace} ${this.opts.textSize}px ${this.opts.textFont}`;

		if (this.opts.title) {
			const TitleText = document.createElementNS(this.opts.ns, "tspan");
			TitleText.setAttribute("dy", "1.2em");
			TitleText.setAttribute("x", this.opts.x);
			TitleText.setAttribute("text-anchor", this.opts.anchor);
			TitleText.textContent = this.opts.title;
			TitleText.style.font = "bold 24px Helvetica";
			T.appendChild(TitleText);
		}

		const content = this.opts.content;
		content.forEach((line, i) => {
			let thisLine = document.createElementNS(this.opts.ns, "tspan");
			thisLine.setAttribute("dy", "2.4em");
			thisLine.setAttribute("x", this.opts.x);
			thisLine.setAttribute("text-anchor", this.opts.anchor);
			thisLine.textContent = line.title;
			T.appendChild(thisLine);
		});
		this.group.appendChild(T);
		this.elements.push(T);
		this.txt = T;
		T.Y = T.y.animVal[0].value;
		T.setY = function(y) { this.setAttribute("y", y) };
	}

	// make small rectangles to the left of the text, with the appropriate
	// colors
	// Assumes makeText() has already been called.
	makeCircs() {
		const txts = this.txt.children;
		const content = this.opts.content;
		let shift = txts.length === content.length ? 0 : 1; // to account for title
		let bb, circ;
		for (let i = 0 + shift; i < txts.length; i++) {
			bb = txts[i].getBBox();
			console.log(content[i-shift])
			circ = document.createElementNS(this.opts.ns, "circle");
			circ.setAttribute('cx', bb.x - 16);
			circ.setAttribute('cy', bb.y + ((i-shift)*2 + 1) * (1.2 * this.opts.textSize) - 8);
			circ.setAttribute('r', 8);
			circ.setAttribute('fill', content[i - shift].color);
			circ.setAttribute('stroke', "black");
			this.elements.push(circ);
			this.group.appendChild(circ);
			circ.Y = circ.cy.animVal.value;
			circ.setY = function(y) { this.setAttribute("cy", y) };
		}
	}

	// make big rectangle to hold legend. Can have an optional title.
	// Assumes makeText() and makeCircs() have been called.
	makeContainter() {
		const txtbb = this.txt.getBBox(),
			  padding = 5,
			  x = txtbb.x - 24 - padding,
			  y = txtbb.y - padding,
			  width = txtbb.width + 24 + 2*padding,
			  height = txtbb.height + 2*padding,
			  rect = document.createElementNS(this.opts.ns, "rect");
		rect.setAttribute('x', x);
		rect.setAttribute('y', y);
		rect.setAttribute('width', width);
		rect.setAttribute('height', height);
		rect.setAttribute('fill', this.opts.backgroundColor);
		rect.setAttribute('stroke', this.opts.stroke);
		rect.setAttribute('stroke-width', this.opts.strokeWidth);
		rect.setAttribute('rx', 10);
		this.box = rect;
		this.group.appendChild(rect);
		rect.Y = rect.y.animVal.value;
		rect.setY = function(y) { this.setAttribute("y", y) };
	}

	// adjust the position of elements to meet parameters
	adjustElements() {
		this.group.appendChild(this.box);
		this.elements.forEach(elt => this.group.appendChild(elt));
		const bbox = this.box.getBBox();
		const height = this.opts.svg.height.animVal.value;
		const heightGoal = typeof this.opts.yb !== "string" ? this.opts.yb : 
			parseInt(this.opts.yb)/100 * height;
		const diff = bbox.y + bbox.height - heightGoal;
		for (let elt of this.group.children) {
			//console.log(elt, elt.y.animVal[0].value , diff)
			//if (elt.hasAttribute("y")) elt.setAttribute("y", elt.y.animVal[0].value + diff);
			elt.setY(elt.Y - diff);
		} 
	}

	// construct and draw the thing
	run() {
		this.makeGroup();
		this.makeText();
		this.makeCircs();
		this.makeContainter();
		this.adjustElements();
	}

}