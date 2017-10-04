//puzzle, all squares must be the same color 
//in order to solve the puzzle

//5 squares, each cycle through 5 colors

function setup() {
	createCanvas(450, 300);
	background('#c9c9c9');
	color1 = color('#25c69b');
	color2 = color('#c625b1');
	color3 = color('#2538c6');
	color4 = color('#25c427');
	color5 = color('#c1c425');

	sq1Color=color1;
	sq2Color=color2;
	sq3Color=color3;
	sq4Color=color4;
	sq5Color=color5;
}

function draw() {
	textSize(32);
	textAlign(CENTER);
	fill('#000');
	text("Get all the squares to the same color to win!", 50, 25, 350, 100);

	noStroke();
	//square1
	fill(sq1Color);
	rect(50, 125, 50, 50);
	//square2
	fill(sq2Color);
	rect(125, 125, 50, 50);
	//square3
	fill(sq3Color);
	rect(200, 125, 50, 50);
	//square4
	fill(sq4Color);
	rect(275, 125, 50, 50);
	//square5
	fill(sq5Color);
	rect(350, 125, 50, 50);
}

function mousePressed() {
	var rect1=dist(mouseX, mouseY, 75, 150);
	var rect2=dist(mouseX, mouseY, 150, 150);
	var rect3=dist(mouseX, mouseY, 225, 150);
	var rect4=dist(mouseX, mouseY, 300, 150);
	var rect5=dist(mouseX, mouseY, 375, 150);

	//if rectangle 1 is pressed
	if(rect1 < 25) {
		if(sq1Color==color1) {
			sq1Color=color2;
		}
		else if(sq1Color==color2) {
			sq1Color=color3;
		}
		else if(sq1Color==color3) {
			sq1Color=color4;
		}
		else if(sq1Color==color4) {
			sq1Color=color5;
		}
		else {
			sq1Color=color1;
		}

		if(sq3Color==color1) {
			sq3Color=color2;
		}
		else if(sq3Color==color2) {
			sq3Color=color3;
		}
		else if(sq3Color==color3) {
			sq3Color=color4;
		}
		else if(sq3Color==color4) {
			sq3Color=color5;
		}
		else {
			sq3Color=color1;
		}
	}

	//if rectangle 2 is pressed
	if(rect2 < 25) {
		if(sq2Color==color1) {
			sq2Color=color2;
		}
		else if(sq2Color==color2) {
			sq2Color=color3;
		}
		else if(sq2Color==color3) {
			sq2Color=color4;
		}
		else if(sq2Color==color4) {
			sq2Color=color5;
		}
		else {
			sq2Color=color1;
		}

		if(sq3Color==color1) {
			sq3Color=color2;
		}
		else if(sq3Color==color2) {
			sq3Color=color3;
		}
		else if(sq3Color==color3) {
			sq3Color=color4;
		}
		else if(sq3Color==color4) {
			sq3Color=color5;
		}
		else {
			sq3Color=color1;
		}
	}

	//if rectangle 3 is pressed
	if(rect3 < 25) {
		if(sq3Color==color1) {
			sq3Color=color2;
		}
		else if(sq3Color==color2) {
			sq3Color=color3;
		}
		else if(sq3Color==color3) {
			sq3Color=color4;
		}
		else if(sq3Color==color4) {
			sq3Color=color5;
		}
		else {
			sq3Color=color1;
		}

		if(sq5Color==color1) {
			sq5Color=color2;
		}
		else if(sq5Color==color2) {
			sq5Color=color3;
		}
		else if(sq5Color==color3) {
			sq5Color=color4;
		}
		else if(sq5Color==color4) {
			sq5Color=color5;
		}
		else {
			sq5Color=color1;
		}		
	}

	//if rectangle 4 is pressed
	if(rect4 < 25) {
		if(sq4Color==color1) {
			sq4Color=color2;
		}
		else if(sq4Color==color2) {
			sq4Color=color3;
		}
		else if(sq4Color==color3) {
			sq4Color=color4;
		}
		else if(sq4Color==color4) {
			sq4Color=color5;
		}
		else {
			sq4Color=color1;
		}
	}

	//if rectangle 5 is pressed
	if(rect5 < 25) {
		if(sq5Color==color1) {
			sq5Color=color2;
		}
		else if(sq5Color==color2) {
			sq5Color=color3;
		}
		else if(sq5Color==color3) {
			sq5Color=color4;
		}
		else if(sq5Color==color4) {
			sq5Color=color5;
		}
		else {
			sq5Color=color1;
		}

		if(sq4Color==color1) {
			sq4Color=color2;
		}
		else if(sq4Color==color2) {
			sq4Color=color3;
		}
		else if(sq4Color==color3) {
			sq4Color=color4;
		}
		else if(sq4Color==color4) {
			sq4Color=color5;
		}
		else {
			sq4Color=color1;
		}
	}

	if((sq1Color==sq2Color)&&
		(sq1Color==sq3Color)&&
		(sq1Color==sq4Color)&&
		(sq1Color==sq5Color)) {
		textSize(32);
		textAlign(CENTER);
		fill('#faff00');
		text("CONGRATULATIONS! You've won!", 50, 200, 350, 100);
	}

	else {
		clear();
		background('#c9c9c9');
	}

}
