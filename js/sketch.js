var brushSize, paintColour, brushShape;
var coloursArray = ['red', 'green', 'blue'];

function setup() {
    var canvas = createCanvas(800, 550);
    canvas.parent("p5container");

    background(220);

    brushSize = 10;

    paintColour = coloursArray[0];
}

function draw() {

    noStroke();
    
    if(paintColour === 'red'){
        fill('RGB(255,0,0)');
    } else if (paintColour === 'green'){
        fill('RGB(0,255,0)');
    } else if(paintColour === 'blue'){
        fill('RGB(0,0,255)');
    }

    if (mouseIsPressed === true) {
        ellipse(mouseX, mouseY, brushSize);
    }

}

function keyPressed(){

    if (keyCode === UP_ARROW && brushSize < 50) {
        brushSize = brushSize + 1;
    } else if (keyCode === DOWN_ARROW && brushSize > 1) {
        brushSize = brushSize - 1;
    }

    if(key === 'q'){
        paintColour = coloursArray[0]
    }
    
    if(key === 'w'){
        paintColour = coloursArray[1]
    }
    
    if(key === 'e'){
        paintColour = coloursArray[2]
    }
}