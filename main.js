//const { fabric } = require("./fabric");

// Create canvas variable
var canvas = new fabric.Canvas("myCanvas");
var ctx = canvas.getContext("2d");
var block_y = 1;
var block_x = 1;

var block_image_width = 350;
var block_image_height = 430;

var block_image_object = "";

function new_image(get_image)
{
	// to upload images
	fabric.Image.fromURL(get_image, function(Img) {
		block_image_object = Img;
		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);
		block_image_object.set({
			top:block_y,
			left:block_x
		});
		canvas.add(block_image_object);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if (keyPressed == 'r'.charCodeAt(0) || keyPressed == 'R'.charCodeAt(0)) // add appropriate keycode
	{
		// upload red ranger
		new_image('rr1.png');
		console.log("red");
	}
	if (keyPressed == 'g'.charCodeAt(0) || keyPressed == 'G'.charCodeAt(0))
	{
		block_x = 200;
		// upload green ranger
		new_image('gr.png');
		console.log("green");
	}
	
	if (keyPressed == 'y'.charCodeAt(0) || keyPressed == 'Y'.charCodeAt(0))
	{
		block_x =350;
		// upload yellow ranger
		new_image('yr.png');
		console.log("yellow");
	}
	if (keyPressed == 'p'.charCodeAt(0) || keyPressed == 'P'.charCodeAt(0))
	{
		block_x = 600;
		// upload pink ranger
		new_image('pr.png');
		console.log("pink");
	}
	if (keyPressed == 'b'.charCodeAt(0) || keyPressed == 'B'.charCodeAt(0))
	{
		block_x = 700;
		// upload blue ranger
		new_image('br.png');
		console.log("blue");
	}
}
