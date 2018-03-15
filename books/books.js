/*
format
------------
year: year
number: number of books read
pages: number of pages read
shortest: [Title, Author, number of pages]
longest: [Title, Author, number of pages]
avgLength: average length of books read
mostPopular: [Title, Author, number of people read]
leastPopular: [Title, Author, number of people read]
highestRated: [Title, Author, Rating]
avgRating: my average rating for the year
*/

var books = [
	{
		"year":2012,
		"number":29,
		"pages":10427,
		"shortest":["Leap Day", "Wendy Mass", 212],
		"longest":["The Diviners", "Libba Bray", 578],
		"avgLength":306,
		"mostPopular":["The Fault in Our Stars", "John Green", 3723050],
		"leastPopular":["Blood Ninja", "Nick Lake", 1954],
		"highestRated":["Clockwork Prince", "Cassandra Clare", 4.46],
		"avgRating":3.8
	},
	{
		"year":2013,
		"number":19,
		"pages":6773,
		"shortest":["Two Boys Kissing", "David Levithan", 196],
		"longest":["Tiger's Voyage", "Colleen Houck", 560],
		"avgLength":356,
		"mostPopular":["Legend", "Marie Lu", 648413],
		"leastPopular":["Colin Fischer", "Ashley Edward Miller", 2333],
		"highestRated":["Tiger's Voyage", "Colleen Houck", 4.35],
		"avgRating":3.3
	},
	{
		"year":2014,
		"number":24,
		"pages":8599,
		"shortest":["Attack on Titan, Vol 1", "Hajime Isayama", 193],
		"longest":["Fangirl", "Rainbow Rowell", 481],
		"avgLength":358,
		"mostPopular":["Fangirl", "Rainbow Rowell", 830556],
		"leastPopular":["Buzz Kill", "Beth Fantaskey", 1929],
		"highestRated":["Attack on Titan, Vol 1", "Hajime Isayama", 4.43],
		"avgRating":3.5
	},
	{
		"year":2015,
		"number":26,
		"pages":6735,
		"shortest":["The Sleeper and the Spindle", "Neil Gaiman", 72],
		"longest":["Heir of Fire", "Sarah J. Mass", 565],
		"avgLength":259,
		"mostPopular":["The Outsiders", "S.E. Hinton", 924249],
		"leastPopular":["No. 6: The Managa, Volume 02", "Atsuko Asano", 1855],
		"highestRated":["Sava, Vol. 2", "Brian K. Vaughan", 4.56],
		"avgRating":3.7
	},
	{
		"year":2016,
		"number":23,
		"pages":7280,
		"shortest":["The Answer", "Rebecca Sugar", 32],
		"longest":["Illuminae", "Amie Kaufman", 602],
		"avgLength":317,
		"mostPopular":["Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 6050560],
		"leastPopular":["The Answer", "Rebecca Sugar", 741],
		"highestRated":["The Answer", "Rebecca Sugar", 4.52],
		"avgRating":3.9
	},
	{
		"year":2017,
		"number":34,
		"pages":11941,
		"shortest":["How to Talk To Girls at Parties", "Neil Gaiman", 64],
		"longest":["Winter", "Marissa Meyer", 827],
		"avgLength":351,
		"mostPopular":["Cinder", "Marissa Meyer", 549857],
		"leastPopular":["Goldie Vance Vol 2", "Hope Larson", 708],
		"highestRated":["Crooked Kingdom", "Leigh Bardugo", 4.64],
		"avgRating":3.7
	}/*,
	{
		//2018 so far
		"year":2018,
		"number":5,
		"pages":1417,
		"shortest":["Binti", "Nnedi Okorafor", 90],
		"longest":["Truly Devious", "Maureen Johnson", 416],
		"avgLength":283,
		"mostPopular":["Why Not Me?", "Mindy Kaling", 137710],
		"leastPopular":["Truly Devious", "Maureen Johnson", 7891],
		"highestRated":["Simon vs. the Homo Sapiens Agenda", "Becky Albertalli", 4.28],
		"avgRating":4.0
	}*/
];
