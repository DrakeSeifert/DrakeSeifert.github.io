//var x = 0;

function setup() {
	createCanvas(2400,1600);
	loadImage('cat.jpg', drawCat);
}

function drawCat(img) {
	image(img, 0, 0);
}

//function draw() {
	//ellipse(x, height/2, 20, 20);
	//x += 1;
//}