

// Set default colors object
const defaultColors = {

};

// Read cookies, and make new object
//const colors = {...defaultColors, ...Cookies.get("colors")};

// Set values in settings modal
// Since I included JQuery, I may as well use it...
//Object.entries(colors).forEach(entry => {

//});





let colors = {
	S1: "#68f9f2", // Sheet 1
	S3: "#fff78c", // Sheet 3
	S4: "#ebaeef", // Sheet 4
	S13: ["#68f9f2", "#fff78c"], // Sheets 
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

// Title information
const Title = [
	"The Intelligent Design of Jenny Chow",
	"by Rolin Jones",
	"directed by Jonathan Adler",
	"2019"
];

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
	years: [Year0a, Year1a],
	Title: Title
});
TL2.fadeOut();


// create a TimeLine for 2003
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
	years: [Year0, Year1],
	Title: Title
});





//// ADD POINTS
///////////////

S1.forEach(Event => {
	const percent = (Event.year - Year0) / range * 100;
	new TimePoint({
		TimeLine: TL1, 
		x: `${percent}%`, 
		year: Event.year, 
		content: Event.event,
		fill: colors["S1"],
		class: "firstPoint"
	});
});

S3.forEach(Event => {
	const percent = (Event.year - Year0) / range * 100;
	new TimePoint({
		TimeLine: TL1, 
		x: `${percent}%`, 
		year: Event.year, 
		content: Event.event,
		fill: colors["S3"],
		class: "secondPoint"
	});
});

S4.forEach(Event => {
	const percent = (Event.year - Year0) / range * 100;
	new TimePoint({
		TimeLine: TL1, 
		x: `${percent}%`, 
		year: Event.year, 
		content: Event.event,
		fill: colors["S4"],
		class: "thirdPoint"
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

const options2003 = {
	content: [
		{title: "Events in The Intelligent Design of Jenny Chow", color: colors.S1},
		{title: "Events in Modern Chinese History", color: colors.S3},
		{title: "Events in Modern Computing History", color: colors.S4}
	],
	svg: TL1.svg,
	x: legendX,
	yb: legendY,
	title: ""
};
const Legend2003 = new Legend(options2003);


const options2019 = {
	content: [
		{title: "Events in The Intelligent Design of Jenny Chow", color: colors.S1},
		{title: "Events in Modern Chinese History", color: colors.S3},
		{title: "Events in Modern Computing History", color: colors.S4}
	],
	svg: TL2.svg,
	x: legendX,
	yb: legendY
};
const Legend2019 = new Legend(options2019);








function update(jscolor) {
    // 'jscolor' instance can be used as a string
    $('.secondPoint').each((i,e) => {e.setAttribute("fill", '#' + jscolor)});
}





