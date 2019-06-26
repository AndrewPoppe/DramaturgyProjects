


// create a TimeLine
const TL = new TimeLine({
	x: "5%",
	y: "0px",
	width: "90%",
	height: "100%",
	bgColor: "white",
	lineColor: "black",
	container: document.body,
	lineY: "90%",
	lineThickness: 3
});

const PT = new TimePoint({
	TimeLine: TL,
	x: "25%"
});

//createPoint("75%", "50%", 8, "white", "black", "This dot is 3/4 of the way. HAHAHA", "up", document.getElementById('line1'));
//let thisText = "This is my text. It is a long piece of text. It has a lot of information in it. This is my text. It is a long piece of text. It has a lot of information in it. This is my text. It is a long piece of text. It has a lot of information in it.";
//createPoint("5%", "50%", 8, "white", "black", thisText, "down", document.getElementById('line1'));