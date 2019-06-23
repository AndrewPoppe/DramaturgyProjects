

// word wrap
const wrap = (s, w) => s.replace(
    new RegExp(`(?![^\\n]{1,${w}}$)([^\\n]{1,${w}})\\s`, 'g'), '$1\n'
);

// Function for creating a point on the timeline
// 
function createPoint(x, y, r, fill, stroke, text, textPos="up", container) {
	const circ = makeCircle(x, y, r, fill, stroke);

	// SVG group to hold text box and things
	const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
	const groupID = Math.random().toString(36).substring(2);
	group.setAttribute('id', groupID);
	group.setAttribute('opacity', 0);
	circ.setAttribute('textID', groupID);

	const txtY = textPos === "up" ? "10%" : "60%";
	const txt = makeText(x, txtY, text = text, wrap = 40);
	
	
	// THIS IS TEMPORARY JUST TO GET TEXT'S LOCATION ETC
	container.appendChild(txt);
	const txtLoc = txt.getBBox();
	container.removeChild(txt);

	const containerLoc = container.getBBox();
	const xDiff = (containerLoc.x + containerLoc.width) - (txtLoc.x + txtLoc.width) - 12;
	
	if (txtLoc.x  < 12) {
		txtLoc.x = 12;
		for (tspan of txt.children) tspan.setAttribute('x', txtLoc.x + txtLoc.width/2);
	} else if (xDiff < 0) {
		txtLoc.x = txtLoc.x + xDiff;
		for (tspan of txt.children) tspan.setAttribute('x', txtLoc.x + txtLoc.width/2);
	}


	// Box surrounding the text
	const box = document.createElementNS("http://www.w3.org/2000/svg", "rect");
	box.setAttribute("x", txtLoc.x - 10);
	box.setAttribute("y", txtLoc.y - 10);
	box.setAttribute("width", txtLoc.width + 20);
	box.setAttribute("height", txtLoc.height + 20);
	box.setAttribute("fill", fill);
	box.setAttribute("stroke", stroke);
	box.setAttribute("stroke-width", "6");
	box.setAttribute("rx", "10");

	group.appendChild(box);
	group.appendChild(txt);
	container.appendChild(group);
	container.appendChild(circ);
	
	// Make line connecting box to point
	const circLoc = circ.getBBox(),
		boxLoc = box.getBBox(),
		startX = circLoc.x + circLoc.width/2,
		startY = circLoc.y + circLoc.height/2,
		endX = boxLoc.x + boxLoc.width/2,
		endY = boxLoc.y + boxLoc.height/2;
	const connectLine = makeLine(startX, endX, startY, endY, fill, 6);
	const connectBackground = makeLine(startX, endX, startY, endY, stroke, 14);
	
	// Add elements to group in the order I want them shown
	// Elements that were already present will not be duplicated, 
	// but will be re-ordered
	group.appendChild(connectBackground);
	group.appendChild(box);
	group.appendChild(connectLine);
	group.appendChild(txt);

	// Handle mouseover
	circ.onmouseenter = function() {
		const gID = this.getAttribute("textID");
		document.getElementById(gID).setAttribute("opacity", 100);
		const r = this.getAttribute("r");
		this.setAttribute("r", r*2)
		this.setAttribute("stroke-width", 4);
	}
	circ.onmouseleave = function() {
		const gID = this.getAttribute("textID");
		document.getElementById(gID).setAttribute("opacity", 0);
		const r = this.getAttribute("r");
		this.setAttribute("r", r/2)
		this.setAttribute("stroke-width", 1);
	}

	return circ;
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
function makeText(x, y, text, anchor="middle", wrap = 40) {
	const T = document.createElementNS("http://www.w3.org/2000/svg", "text");
	T.setAttribute("x", x);
	T.setAttribute("y", y);
	T.setAttribute("text-anchor", anchor);

	const lines = wrap(text, wrap).split('\n');
	
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

// make an SVG element
function makeSVG(h, w) {
	const S = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	S.setAttribute("height", h);
	S.setAttribute("width", w);
	return S;
}

console.log("start");
createPoint("75%", "50%", 8, "white", "black", "This dot is 3/4 of the way. HAHAHA", "up", document.getElementById('line1'));
let thisText = "This is my text. It is a long piece of text. It has a lot of information in it. This is my text. It is a long piece of text. It has a lot of information in it. This is my text. It is a long piece of text. It has a lot of information in it.";
createPoint("5%", "50%", 8, "white", "black", thisText, "down", document.getElementById('line1'));