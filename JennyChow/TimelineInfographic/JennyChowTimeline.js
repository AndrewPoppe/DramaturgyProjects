

let colors = {
	S1: "#68f9f2",
	S3: "#fff78c",
	S4: "#ebaeef",
	S13: ["#68f9f2", "#fff78c"],
	S14: ["#68f9f2", "#ebaeef"],
	S34: ["#fff78c", "#ebaeef"]
}

// Sheets are defined in data.js
const Year0 = 1920,
	Year1 = 2017,
	range = Year1 - Year0;



// create a TimeLine
const TL1 = new TimeLine({
	x: "5%",
	y: "0px",
	width: "90%",
	height: "100%",
	bgColor: "#f9d595",
	lineColor: "blue",
	container: document.body,
	lineY: "60%",
	lineThickness: 3,
	years: [Year0, Year1]
});

// // Second TL
// const TL2 = new TimeLine({
// 	x: "5%",
// 	y: "0px",
// 	width: "90%",
// 	height: "100%",
// 	bgColor: "white",
// 	lineColor: "black",
// 	container: document.body,
// 	lineY: "80%",
// 	lineThickness: 3,
// 	years: [Year0, Year1],
// 	drawYear: false,
// 	svg: TL1.svg
// });

// // Third TL
// const TL3 = new TimeLine({
// 	x: "5%",
// 	y: "0px",
// 	width: "90%",
// 	height: "100%",
// 	bgColor: "white",
// 	lineColor: "purple",
// 	container: document.body,
// 	lineY: "70%",
// 	lineThickness: 8,
// 	years: [Year0, Year1],
// 	drawYear: false,
// 	svg: TL1.svg
// });




// Sheet4.forEach(Event => {
// 	const percent = (Event.year - Year0) / range * 100;
// 	new TimePoint({
// 		TimeLine: TL3, 
// 		x: `${percent}%`, 
// 		year: Event.year, 
// 		content: [Event.event,"This should be on the bottom and red"],
// 		fill: ["#68f9f2", "red"],
// 		textPos: "down"
// 	});
// });

// Sheet3.forEach(Event => {
// 	const percent = (Event.year - Year0) / range * 100;
// 	new TimePoint({
// 		TimeLine: TL2, 
// 		x: `${percent}%`, 
// 		year: Event.year, 
// 		content: Event.event,
// 		fill: "#fff78c"
// 	});
// });

// Sheet1.forEach(Event => {
// 	const percent = (Event.year - Year0) / range * 100;
// 	new TimePoint({
// 		TimeLine: TL1, 
// 		x: `${percent}%`, 
// 		year: Event.year, 
// 		content: Event.event,
// 		fill: "#ebaeef"
// 	});
// });


S1.forEach(Event => {
	const percent = (Event.year - Year0) / range * 100;
	new TimePoint({
		TimeLine: TL1, 
		x: `${percent}%`, 
		year: Event.year, 
		content: Event.event,
		fill: colors["S1"]
	});
});

S3.forEach(Event => {
	const percent = (Event.year - Year0) / range * 100;
	new TimePoint({
		TimeLine: TL1, 
		x: `${percent}%`, 
		year: Event.year, 
		content: Event.event,
		fill: colors["S3"]
	});
});

S4.forEach(Event => {
	const percent = (Event.year - Year0) / range * 100;
	new TimePoint({
		TimeLine: TL1, 
		x: `${percent}%`, 
		year: Event.year, 
		content: Event.event,
		fill: colors["S4"]
	});
});

S13.forEach(Event => {
	const percent = (Event.year - Year0) / range * 100;
	new TimePoint({
		TimeLine: TL1, 
		x: `${percent}%`, 
		year: Event.year, 
		content: Event.event,
		fill: colors["S13"]
	});
});

S14.forEach(Event => {
	const percent = (Event.year - Year0) / range * 100;
	new TimePoint({
		TimeLine: TL1, 
		x: `${percent}%`, 
		year: Event.year, 
		content: Event.event,
		fill: colors["S14"]
	});
});

S34.forEach(Event => {
	const percent = (Event.year - Year0) / range * 100;
	new TimePoint({
		TimeLine: TL1, 
		x: `${percent}%`, 
		year: Event.year, 
		content: Event.event,
		fill: colors["S34"]
	});
});