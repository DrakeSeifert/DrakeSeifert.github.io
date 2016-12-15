var x = 0;

function setup() {
	createCanvas(600,400);
	//var myCanvas = createCanvas(600,400);
	//myCanvas.parent('myContainer');
}

function draw() {
	ellipse(x, height/2, 20, 20);
	x += 1;
}