// defines a normal timepoint
class TimePoint {
	constructor(options) {
		const defaults = {
			x: "0%",
			r: 8,
			fill: "white", 
			stroke: "black",
			strokeWidth: 1,
			content: "placeholder text",
			textPos: "up"
		};
		this.opts = {...defaults, ...options};
		if (!this.opts.container) throw("TimePoint options must include TimeLine container.");
		this.opts.y = this.opts.container.opts.lineY;

	}

	// make a circle element
	function makeCircle(x, y, r, color, stroke) {
		const C = document.createElementNS("http://www.w3.org/2000/svg", "circle");
		C.setAttribute("cx", x);
		C.setAttribute("cy", y);
		C.setAttribute("r",  r);
		C.setAttribute("fill", color);
		C.setAttribute("stroke", stroke);
		return C;
	}

	// make a text element
	function makeText(x, y, text, anchor="middle", wrap=40) {
		// word wrap
		const Wrap = (s, w) => s.replace(
			new RegExp(`(?![^\\n]{1,${w}}$)([^\\n]{1,${w}})\\s`, 'g'), '$1\n'
		);
		const T = document.createElementNS("http://www.w3.org/2000/svg", "text");
		T.setAttribute("x", x);
		T.setAttribute("y", y);
		T.setAttribute("text-anchor", anchor);

		const lines = Wrap(text, wrap).split('\n');
		
		lines.forEach(line => {
			let thisLine = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
			thisLine.setAttribute("dy", "1.2em");
			thisLine.setAttribute("x", x);
			thisLine.setAttribute("text-anchor", "middle");
			thisLine.textContent = line;
			T.appendChild(thisLine);
		});
		return T;
	}

	// make a line element 
	function makeLine(x1, x2, y1, y2, color, strokeWidth) {
		const L = document.createElementNS("http://www.w3.org/2000/svg", "line");
		L.setAttribute("x1", x1);
		L.setAttribute("y1", y1);
		L.setAttribute("x2", x2);
		L.setAttribute("y2", y2);
		L.setAttribute("stroke-width", strokeWidth);
		L.setAttribute("stroke", color);
		return L;
	}


}
