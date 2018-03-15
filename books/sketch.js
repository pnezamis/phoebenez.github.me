//Phoebe Nezamis
//Quantitative Reading Visualization
//Data taken from Goodreads.com

//universal colors/image variables
var star;
var titleColor;
var textColor;

function setup() {
	createCanvas(1500, 700);

	star=loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/510px-Five-pointed_star.svg.png');
	titleColor=color('#000');
	textColor=color('#000');
}

function draw() {
	//background('#ffd6ad');
	fill(240);
	noStroke();
	rect(25, 90, width/2+100, height-95);

	var x=20;
	var y=40;

	//colors
	var lineColor=color('#000');
	var ellipseColor=color('#000');
	var booksColor=color('#FFF689');
	var pagesColor=color('#BDE8A0');
	
	//title
	noStroke();
	fill(titleColor);
	textAlign(CENTER, CENTER);
	textSize(32);
	textFont('Georgia');
	text("Phoebe's Reading History", (width/2+100)/2, y);

	textSize(12);
	textFont('Helvetica');
	text("Click on the year for more info", (width/2+100)/2, y+21);

	y+=100;
	x+=60;
	var shapeSize=20;

	for(i in books) {
		var year=books[i].year;
		var numberOfPages=map(books[i].pages, 0, 12000, 0, width/2-100);
		var numberOfBooks=books[i].number;

		//year text
		noStroke();
		fill(textColor);
		textAlign(RIGHT, CENTER);
		textSize(20);
		textFont('Helvetica');
		text(year, x, y);

		textSize(8);
		//hover for years
		if(mouseX>=x-50 && mouseX<=x && mouseY>=y-10 && mouseY<=y+10) {
			text("click for more", x, y+15);
		}

		var lineX=x+10;
		//line - 60px high
		strokeWeight(2);
		stroke(lineColor);
		line(lineX, y-30, lineX, y+30);

		noStroke();

		//number of books read
		fill(booksColor);
		stroke('#000');
		strokeWeight(.5);
		var booksX=lineX+1;
		var booksW=shapeSize/1.6;
		for(var j=0; j<numberOfBooks; j++) {
			rect(booksX, y-25, booksW, shapeSize);
			for(var k=3; k>0; k--) {
				line(booksX, y-25, booksX+booksW, y-25-k);
			}
			booksX+=booksW+5;
		}

		//number of pages read
		fill(pagesColor);
		noStroke();
		rect(lineX+1, y+5, numberOfPages, shapeSize);

		textAlign(LEFT, CENTER);
		fill(textColor);
		textSize(16);
		
		//hover for number of books
		if(mouseX>=lineX && mouseX<=booksX && mouseY>=(y-25) && mouseY<=(y-25+shapeSize)) {
			text(numberOfBooks + " books", booksX, y-15);
		}

		//hover for number of pages
		if(mouseX>=lineX && mouseX<=(lineX+numberOfPages) && mouseY>=(y) && mouseY<=(y+shapeSize)) {
			text(books[i].pages + " pages", lineX+numberOfPages+5, y+15);
		}

		y+=100;
	}
}

function mousePressed() {
	fill(240);
	noStroke();
	var i;
	
	//colors
	var longColor=color('#5998C5');
	var shortColor=color('#E03616');
	var avgColor=color('#76597B');

	var y=90;
	var x=width/2+150;
	var boxWidth=width/2-175;

	//details 2012
	if(mouseX>=30 && mouseX<=80 && mouseY>=130 && mouseY<=150) {
		rect(x, y, boxWidth, height-400);
		
		var i=0;
		var year=books[i].year;
		var shortest=books[i].shortest;
		var longest=books[i].longest;
		var numberOfPages=books[i].pages;
		var numberOfBooks=books[i].number;
		var avg=books[i].avgLength;
		var rating=round(books[i].avgRating);

		//title
		fill(titleColor);
		textSize(28);
		textFont('Georgia');
		textAlign(CENTER, CENTER);
		text(year + " Details", ((width/2-175)/2)+width/2+150, 110);

		y+=60;
		x+=35;

		textSize(16);
		fill(textColor);
		textFont('Helvetica');
		textAlign(LEFT, TOP);
		text(numberOfPages+" pages read over "+numberOfBooks+" books", x, y);

		y+=40;
		text("Longest", x, y);
		fill(longColor);
		rect(x, y+20, longest[2]/3, 5);
		y+=30;
		fill(textColor);
		text(longest[0]+"\nby "+longest[1]+"\n"+longest[2]+" pages", x, y);

		y-=30;
		x+=boxWidth/2;
		text("Shortest", x, y);
		fill(shortColor);
		rect(x, y+20, shortest[2]/3, 5);
		y+=30;
		fill(textColor);
		text(shortest[0]+"\nby "+shortest[1]+"\n"+shortest[2]+" pages", x, y);

		x=width/2+185;
		y+=80;
		fill(avgColor);
		rect(x, y, avg/3, 5);
		fill(textColor);
		textAlign(LEFT, CENTER);
		text(avg + " pages on average", x+avg/3+10, y);

		y+=30;
		for(var j=0; j<rating; j++) {
			image(star, x, y, star.width/12, star.height/12);
			x+=star.height/12+10;
		}
		text(books[i].avgRating+" stars on average", x, y+star.height/12/2);
	}

	//details 2013
	else if(mouseX>=30 && mouseX<=80 && mouseY>=230 && mouseY<=250) {
		rect(x, y, boxWidth, height-400);
		
		var i=1;
		var year=books[i].year;
		var shortest=books[i].shortest;
		var longest=books[i].longest;
		var numberOfPages=books[i].pages;
		var numberOfBooks=books[i].number;
		var avg=books[i].avgLength;
		var rating=round(books[i].avgRating);

		//title
		fill(titleColor);
		textSize(28);
		textFont('Georgia');
		textAlign(CENTER, CENTER);
		text(year + " Details", ((width/2-175)/2)+width/2+150, 110);

		y+=60;
		x+=35;

		textSize(16);
		fill(textColor);
		textFont('Helvetica');
		textAlign(LEFT, TOP);
		text(numberOfPages+" pages read over "+numberOfBooks+" books", x, y);

		y+=40;
		text("Longest", x, y);
		fill(longColor);
		rect(x, y+20, longest[2]/3, 5);
		y+=30;
		fill(textColor);
		text(longest[0]+"\nby "+longest[1]+"\n"+longest[2]+" pages", x, y);

		y-=30;
		x+=boxWidth/2;
		text("Shortest", x, y);
		fill(shortColor);
		rect(x, y+20, shortest[2]/3, 5);
		y+=30;
		fill(textColor);
		text(shortest[0]+"\nby "+shortest[1]+"\n"+shortest[2]+" pages", x, y);

		x=width/2+185;
		y+=80;
		fill(avgColor);
		rect(x, y, avg/3, 5);
		fill(textColor);
		textAlign(LEFT, CENTER);
		text(avg + " pages on average", x+avg/3+10, y);

		y+=30;
		for(var j=0; j<rating; j++) {
			image(star, x, y, star.width/12, star.height/12);
			x+=star.height/12+10;
		}
		text(books[i].avgRating+" stars on average", x, y+star.height/12/2);	
	}

	//details 2014
	else if(mouseX>=30 && mouseX<=80 && mouseY>=330 && mouseY<=350) {
		rect(x, y, boxWidth, height-400);
		
		var i=2;
		var year=books[i].year;
		var shortest=books[i].shortest;
		var longest=books[i].longest;
		var numberOfPages=books[i].pages;
		var numberOfBooks=books[i].number;
		var avg=books[i].avgLength;
		var rating=round(books[i].avgRating);

		//title
		fill(titleColor);
		textSize(28);
		textFont('Georgia');
		textAlign(CENTER, CENTER);
		text(year + " Details", ((width/2-175)/2)+width/2+150, 110);

		y+=60;
		x+=35;

		textSize(16);
		fill(textColor);
		textFont('Helvetica');
		textAlign(LEFT, TOP);
		text(numberOfPages+" pages read over "+numberOfBooks+" books", x, y);

		y+=40;
		text("Longest", x, y);
		fill(longColor);
		rect(x, y+20, longest[2]/3, 5);
		y+=30;
		fill(textColor);
		text(longest[0]+"\nby "+longest[1]+"\n"+longest[2]+" pages", x, y);

		y-=30;
		x+=boxWidth/2;
		text("Shortest", x, y);
		fill(shortColor);
		rect(x, y+20, shortest[2]/3, 5);
		y+=30;
		fill(textColor);
		text(shortest[0]+"\nby "+shortest[1]+"\n"+shortest[2]+" pages", x, y);

		x=width/2+185;
		y+=80;
		fill(avgColor);
		rect(x, y, avg/3, 5);
		fill(textColor);
		textAlign(LEFT, CENTER);
		text(avg + " pages on average", x+avg/3+10, y);

		y+=30;
		for(var j=0; j<rating; j++) {
			image(star, x, y, star.width/12, star.height/12);
			x+=star.height/12+10;
		}
		text(books[i].avgRating+" stars on average", x, y+star.height/12/2);	
	}

	//details 2015
	else if(mouseX>=30 && mouseX<=80 && mouseY>=430 && mouseY<=450) {
		rect(x, y, boxWidth, height-400);
		
		var i=3;
		var year=books[i].year;
		var shortest=books[i].shortest;
		var longest=books[i].longest;
		var numberOfPages=books[i].pages;
		var numberOfBooks=books[i].number;
		var avg=books[i].avgLength;
		var rating=round(books[i].avgRating);

		//title
		fill(titleColor);
		textSize(28);
		textFont('Georgia');
		textAlign(CENTER, CENTER);
		text(year + " Details", ((width/2-175)/2)+width/2+150, 110);

		y+=60;
		x+=35;

		textSize(16);
		fill(textColor);
		textFont('Helvetica');
		textAlign(LEFT, TOP);
		text(numberOfPages+" pages read over "+numberOfBooks+" books", x, y);

		y+=40;
		text("Longest", x, y);
		fill(longColor);
		rect(x, y+20, longest[2]/3, 5);
		y+=30;
		fill(textColor);
		text(longest[0]+"\nby "+longest[1]+"\n"+longest[2]+" pages", x, y);

		y-=30;
		x+=boxWidth/2;
		text("Shortest", x, y);
		fill(shortColor);
		rect(x, y+20, shortest[2]/3, 5);
		y+=30;
		fill(textColor);
		text(shortest[0]+"\nby "+shortest[1]+"\n"+shortest[2]+" pages", x, y);

		x=width/2+185;
		y+=80;
		fill(avgColor);
		rect(x, y, avg/3, 5);
		fill(textColor);
		textAlign(LEFT, CENTER);
		text(avg + " pages on average", x+avg/3+10, y);

		y+=30;
		for(var j=0; j<rating; j++) {
			image(star, x, y, star.width/12, star.height/12);
			x+=star.height/12+10;
		}
		text(books[i].avgRating+" stars on average", x, y+star.height/12/2);		
	}

	//details 2016
	else if(mouseX>=30 && mouseX<=80 && mouseY>=530 && mouseY<=550) {
		rect(x, y, boxWidth, height-400);
		
		var i=4;
		var year=books[i].year;
		var shortest=books[i].shortest;
		var longest=books[i].longest;
		var numberOfPages=books[i].pages;
		var numberOfBooks=books[i].number;
		var avg=books[i].avgLength;
		var rating=round(books[i].avgRating);

		//title
		fill(titleColor);
		textSize(28);
		textFont('Georgia');
		textAlign(CENTER, CENTER);
		text(year + " Details", ((width/2-175)/2)+width/2+150, 110);

		y+=60;
		x+=35;

		textSize(16);
		fill(textColor);
		textFont('Helvetica');
		textAlign(LEFT, TOP);
		text(numberOfPages+" pages read over "+numberOfBooks+" books", x, y);

		y+=40;
		text("Longest", x, y);
		fill(longColor);
		rect(x, y+20, longest[2]/3, 5);
		y+=30;
		fill(textColor);
		text(longest[0]+"\nby "+longest[1]+"\n"+longest[2]+" pages", x, y);

		y-=30;
		x+=boxWidth/2;
		text("Shortest", x, y);
		fill(shortColor);
		rect(x, y+20, shortest[2]/3, 5);
		y+=30;
		fill(textColor);
		text(shortest[0]+"\nby "+shortest[1]+"\n"+shortest[2]+" pages", x, y);

		x=width/2+185;
		y+=80;
		fill(avgColor);
		rect(x, y, avg/3, 5);
		fill(textColor);
		textAlign(LEFT, CENTER);
		text(avg + " pages on average", x+avg/3+10, y);

		y+=30;
		for(var j=0; j<rating; j++) {
			image(star, x, y, star.width/12, star.height/12);
			x+=star.height/12+10;
		}
		text(books[i].avgRating+" stars on average", x, y+star.height/12/2);		
	}

	//details 2017
	else if(mouseX>=30 && mouseX<=80 && mouseY>=630 && mouseY<=650) {
		rect(x, y, boxWidth, height-400);
		
		var i=5;
		var year=books[i].year;
		var shortest=books[i].shortest;
		var longest=books[i].longest;
		var numberOfPages=books[i].pages;
		var numberOfBooks=books[i].number;
		var avg=books[i].avgLength;
		var rating=round(books[i].avgRating);

		//title
		fill(titleColor);
		textSize(28);
		textFont('Georgia');
		textAlign(CENTER, CENTER);
		text(year + " Details", ((width/2-175)/2)+width/2+150, 110);

		y+=60;
		x+=35;

		textSize(16);
		fill(textColor);
		textFont('Helvetica');
		textAlign(LEFT, TOP);
		text(numberOfPages+" pages read over "+numberOfBooks+" books", x, y);

		y+=40;
		text("Longest", x, y);
		fill(longColor);
		rect(x, y+20, longest[2]/3, 5);
		y+=30;
		fill(textColor);
		text(longest[0]+"\nby "+longest[1]+"\n"+longest[2]+" pages", x, y);

		y-=30;
		x+=boxWidth/2;
		text("Shortest", x, y);
		fill(shortColor);
		rect(x, y+20, shortest[2]/3, 5);
		y+=30;
		fill(textColor);
		text(shortest[0]+"\nby "+shortest[1]+"\n"+shortest[2]+" pages", x, y);

		x=width/2+185;
		y+=80;
		fill(avgColor);
		rect(x, y, avg/3, 5);
		fill(textColor);
		textAlign(LEFT, CENTER);
		text(avg + " pages on average", x+avg/3+10, y);

		y+=30;
		for(var j=0; j<rating; j++) {
			image(star, x, y, star.width/12, star.height/12);
			x+=star.height/12+10;
		}
		text(books[i].avgRating+" stars on average", x, y+star.height/12/2);	
	}

	else {
		fill('white');	
		noStroke();
		rect(width/2+150, 90, width/2-175, height-95);
	}
}
