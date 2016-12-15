//var x = 0;
var img;
function preload() {
	img = loadImage('cat.jpg');
}

function setup() {
	createCanvas(400, 240);
	image(img, 0, 0);
}


//function draw() {
	//ellipse(x, height/2, 20, 20);
	//x += 1;
//}