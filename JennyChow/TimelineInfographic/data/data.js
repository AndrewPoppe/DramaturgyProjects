
// Function to combine events that occur in a single year into the same event.
function combineDuplicates(arr) {
	return arr.reduce((o, cur) => {
	  // Get the index of the key-value pair.
	  let occurs = o.reduce((n, item, i) => {
	    return (item.year === cur.year) ? i : n;
	  }, -1);
	  // If the name is found,
	  if (occurs >= 0) {
	    // append the current value to its list of values.
	    o[occurs].event = `${o[occurs].event}\n\n${cur.event}`;
	  // Otherwise,
	  } else {
	    // add the current item to o 
	    let obj = {year: cur.year, event: cur.event};
	    o = o.concat([obj]);
	  }
	  return o;
	}, []);
}


const Sheet1 = combineDuplicates([
	{year:1981,	event: "Jennifer Marcus is born"},
	{year:1983,	event: "Adele Hartwick and Marshall Marcus begin paperwork to adopt a baby"},
	{year:1985,	event: "Adele Hartwick begins working in the trade show indsutry"},
	{year:1987,	event: "Su Yang Chow marries, becoming Su Yan Zhang"},
	{year:2005,	event: "Jennifer builds Jenny Chow"},
	{year:2005,	event: "Events of the play occur"}
]);

const Sheet1Alternate = combineDuplicates([
	{year:1995,	event: "Jennifer Marcus is born"},
	{year:1997,	event: "Adele Hartwick and Marshall Marcus begin paperwork to adopt a baby"},
	{year:1999,	event: "Adele Hartwick begins working in the trade show indsutry"},
	{year:2001,	event: "Su Yang Chow marries, becoming Su Yan Zhang"},
	{year:2019,	event: "Jennifer builds Jenny Chow / Events of the play"}
]);

const Sheet3 = combineDuplicates([
	{year:1949, event: "Founding of the People's Republic of China"},
	{year:1972, event: "Nixon visits China"},
	{year:1976, event: "Mao Zedong dies"},
	{year:1979, event: "Diplomatic relations established between US and China"},
	{year:1979, event: "\"One-child policy\" introduced"},
	{year:1989, event: "Tiananmen Square protests"},
	{year:2000, event: "Government consolidates internet regulations in China"},
	{year:2003, event: "China launches its first manned spacecraft"},
	{year:2007, event: "Reports that China carries out missile test in space, shooting down an old weather satellite"},
	{year:2007, event: "China launches its first moon orbiter"},
	{year:2008, event: "Summer Olympics held in Beijing"},
	{year:2010, event: "China becomes world's second-largest economy"},
	{year:2013, event: "Communist party announces plans to relax the \"one-child\" policy"},
	{year:2013, event: "China lands a robotic rover on the moon"},
	{year:2015, event: "Communist party announces the end of the \"one-child\" policy"}
]);

const Sheet4 = combineDuplicates([
	{year:1922, event: "American Appliance Company formed; later becomes Raytheon"},
	{year:1942, event: "Raytheon produces technology for WWII"},
	{year:1945, event: "Plan Calculus language invented"},
	{year:1951, event: "Robot Squirrel \"Squee\" introduced"},
	{year:1952, event: "A-0 language written for UNIVAC I computer"},
	{year:1953, event: "Speedcode written for IBM 701"},
	{year:1955, event: "\"Turing Test\" for measuring AI defined by Alan Turing"},
	{year:1955, event: "Raytheon creates first missile-mounted guidance systems"},
	{year:1956, event: "\"AI\" term coined at Dartmouth Summer Research Project conference"},
	{year:1957, event: "FORTRAN developed"},
	{year:1957, event: "Nike-Zeus missile defense system developed"},
	{year:1958, event: "LISP developed (\"List Processing\")"},
	{year:1960, event: "COBOL developed"},
	{year:1962, event: "Nike-X missile defense system developed"},
	{year:1963, event: "ASCII developed"},
	{year:1964, event: "BASIC developed"},
	{year:1966, event: "Weizenbaum's ELIZA"},
	{year:1967, event: "Sentinel missile defense system developed"},
	{year:1969, event: "Stanford Arm created"},
	{year:1969, event: "UNIX introduced"},
	{year:1969, event: "Raytheon computer guides Apollo 11 in moon landing"},
	{year:1970, event: "Shakey the Robot introduced"},
	{year:1970, event: "Raytheon AIM-7F Sparrow is used in Vietnam"},
	{year:1972, event: "C is released"},
	{year:1974, event: "The Silver Arm is developed"},
	{year:1975, event: "The Safeguard missile defense system is put into practice"},
	{year:1981, event: "Direct Drive (DD) arm introduced"},
	{year:1983, event: "Reagan begins SDI (Strategic Defense Initiative) missile defense program"},
	{year:1984, event: "Matlab released"},
	{year:1984, event: "GNU developed"},
	{year:1985, event: "C++ established"},
	{year:1986, event: "Omnibot 2000--programmable robot toy"},
	{year:1987, event: "RM-501 \"Gripper\" introduced"},
	{year:1990, event: "Raytheon missiles used in Gulf War"},
	{year:1991, event: "Linux kernel released"},
	{year:1993, event: "SDIO renamed BMDO (Ballistic Mission Defense Organization)"},
	{year:1995, event: "MQ-1 Predator drone introduced"},
	{year:1995, event: "Java 1.0 introduced"},
	{year:1996, event: "JavaScript developed"},
	{year:1997, event: "Deep Blue defeats chess champion Garry Kasparov"},
	{year:1998, event: "North Korea launches Taepo Dong I missile over Japan"},
	{year:2000, event: "Raytheon combined with E-Systems, Texas Instruments Defense, & Hughes Aircraft--provides state-of-the-art electronics, mission systems integration and other capabilities in the areas of sensing; effects; and command, control, communications and intelligence systems, as well as cybersecurity and a broad range of mission support services"},
	{year:2001, event: "Major increase in funding for missile defense technology, after many failed intercept tests"},
	{year:2002, event: "DARPA \"centibots\" developed"},
	{year:2002, event: "BMDO renamed MDA (Missile Defense Agency)"},
	{year:2002, event: "Successful intercept test, IFT-9"},
	{year:2003, event: "CSAIL founded at MIT"},
	{year:2004, event: "Opportunity and Spirit Mars Rovers land"},
	{year:2005, event: "Stanford self-driving car wins DARPA \"Grand Challenge\""},
	{year:2010, event: "IBM's \"Watson\" defeats \"Jeopardy!\" contestants"},
	{year:2011, event: "\"Siri\" introduced"},
	{year:2015, event: "Gates joins Musk & Hawking in expressing fear of AI"}
]);





