

let colors = {
	S1: "#68f9f2",
	S3: "#fff78c",
	S4: "#ebaeef",
	S13: ["#68f9f2", "#fff78c"],
	S14: ["#68f9f2", "#ebaeef"],
	S34: ["#fff78c", "#ebaeef"]
}

// Sheets are defined in data.js
const Year0 = 1918,
	Year1 = 2022, // 2017
	Year0a = 1918,
	Year1a = 2022,
	range = Year1 - Year0,
	rangea = Year1a - Year0a;



// create a TimeLine for 2019
const TL2 = new TimeLine({
	x: "5%",
	y: "0px",
	width: "90%",
	height: "90%",
	bgColor: "#f9d595",
	lineColor: "blue",
	container: document.body,
	lineY: "50%",
	lineThickness: 3,
	years: [Year0a, Year1a]
});
TL2.fadeOut();


// create a TimeLine for 2005
const TL1 = new TimeLine({
	x: "5%",
	y: "0px",
	width: "90%",
	height: "90%",
	bgColor: "#f9d595",
	lineColor: "blue",
	container: document.body,
	lineY: "50%",
	lineThickness: 3,
	years: [Year0, Year1]
});
//TL1.div.style.display = "block";


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


////////// MAKE 2019 TIMELINE

S1a.forEach(Event => {
	const percent = (Event.year - Year0a) / rangea * 100;
	new TimePoint({
		TimeLine: TL2, 
		x: `${percent}%`, 
		year: Event.year, 
		content: Event.event,
		fill: colors["S1"]
	});
});

S3a.forEach(Event => {
	const percent = (Event.year - Year0a) / rangea * 100;
	new TimePoint({
		TimeLine: TL2, 
		x: `${percent}%`, 
		year: Event.year, 
		content: Event.event,
		fill: colors["S3"]
	});
});

S4a.forEach(Event => {
	const percent = (Event.year - Year0a) / rangea * 100;
	new TimePoint({
		TimeLine: TL2, 
		x: `${percent}%`, 
		year: Event.year, 
		content: Event.event,
		fill: colors["S4"]
	});
});

S13a.forEach(Event => {
	const percent = (Event.year - Year0a) / rangea * 100;
	new TimePoint({
		TimeLine: TL2, 
		x: `${percent}%`, 
		year: Event.year, 
		content: Event.event,
		fill: colors["S13"]
	});
});

S14a.forEach(Event => {
	const percent = (Event.year - Year0a) / rangea * 100;
	new TimePoint({
		TimeLine: TL2, 
		x: `${percent}%`, 
		year: Event.year, 
		content: Event.event,
		fill: colors["S14"]
	});
});

S34a.forEach(Event => {
	const percent = (Event.year - Year0a) / rangea * 100;
	new TimePoint({
		TimeLine: TL2, 
		x: `${percent}%`, 
		year: Event.year, 
		content: Event.event,
		fill: colors["S34"]
	});
});



document.getElementById('yearSelector').onclick = function() {
	if (this.checked) {
		TL1.fadeOut();
		TL2.fadeIn();
	} else {
		TL2.fadeOut();
		TL1.fadeIn();
	}
}


// MAKE A LEGEND

const legendX = "5%",
	  legendY = "95%";

const options2005 = {
	content: [
		{title: "Events in Jenny Chow", color: colors.S1},
		{title: "Events in Modern Chinese History", color: colors.S3},
		{title: "Events in Modern Computing History", color: colors.S4}
	],
	svg: TL1.svg,
	x: legendX,
	yb: legendY
};
const Legend2005 = new Legend(options2005);


const options2019 = {
	content: [
		{title: "Events in Jenny Chow", color: colors.S1},
		{title: "Events in Modern Chinese History", color: colors.S3},
		{title: "Events in Modern Computing History", color: colors.S4}
	],
	svg: TL2.svg,
	x: legendX,
	yb: legendY
};
const Legend2019 = new Legend(options2019);

