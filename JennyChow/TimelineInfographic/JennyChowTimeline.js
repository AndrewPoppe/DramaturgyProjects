


// create a TimeLine
const TL1 = new TimeLine({
	x: "5%",
	y: "0px",
	width: "90%",
	height: "100%",
	bgColor: "#f9d595",
	lineColor: "red",
	container: document.body,
	lineY: "90%",
	lineThickness: 3
});

// Second TL
const TL2 = new TimeLine({
	x: "5%",
	y: "0px",
	width: "90%",
	height: "100%",
	bgColor: "white",
	lineColor: "black",
	container: document.body,
	lineY: "80%",
	lineThickness: 3,
	svg: TL1.svg
});

// Third TL
const TL3 = new TimeLine({
	x: "5%",
	y: "0px",
	width: "90%",
	height: "100%",
	bgColor: "white",
	lineColor: "purple",
	container: document.body,
	lineY: "70%",
	lineThickness: 8,
	svg: TL1.svg
});


// Sheets are defined in data.js
const Year0 = 1920,
	Year1 = 2017,
	range = Year1 - Year0;




Sheet4.forEach(Event => {
	const percent = (Event.year - Year0) / range * 100;
	new TimePoint({
		TimeLine: TL3, 
		x: `${percent}%`, 
		year: Event.year, 
		content: Event.event,
		fill: "#68f9f2"
	});
});

Sheet3.forEach(Event => {
	const percent = (Event.year - Year0) / range * 100;
	new TimePoint({
		TimeLine: TL2, 
		x: `${percent}%`, 
		year: Event.year, 
		content: Event.event,
		fill: "#fff78c"
	});
});

Sheet1.forEach(Event => {
	const percent = (Event.year - Year0) / range * 100;
	new TimePoint({
		TimeLine: TL1, 
		x: `${percent}%`, 
		year: Event.year, 
		content: Event.event,
		fill: "#ebaeef"
	});
});

