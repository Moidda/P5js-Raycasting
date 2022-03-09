
var centerX, centerY;
var opac;
var radius; 
var rays;
var linesX, linesY;

function setup() {
    createCanvas(windowWidth, windowHeight);

    opac = 255;
    centerX = width/2;
    centerY = height/2;
    radius = 10;

    rays = new Array();
    for(var i = 0; i < 360; i+=0.25) 
        rays.push(new Ray(centerX, centerY, i));

    linesX = new Array();
    linesY = new Array();
}

function draw() {
    background(0);

    circleColor = color(255, 255, 0);
    fill(circleColor);
    circle(mouseX, mouseY, radius);

    for(let i = 0; i < rays.length; i++) {
        rays[i].updatePos(mouseX, mouseY);
        for(let j = 0; j+1 < linesX.length; j++) {
            if(linesX[j+1] == -1) continue;
            if(linesX[j] == -1) continue;    
            let x1 = linesX[j];
            let y1 = linesY[j];
            let x2 = linesX[j+1];
            let y2 = linesY[j+1];
            rays[i].collides(x1, y1, x2, y2);
        }
        rays[i].show();
    }

    for(let i = 0; i+1 < linesX.length; i++) {
        if(linesX[i+1] == -1) continue;
        if(linesX[i] == -1) continue;
        stroke(255);
        strokeWeight(10);
        line(linesX[i], linesY[i], linesX[i+1], linesY[i+1]);
    }
}

function mousePressed() {
    for(let i = 0; i < rays.length; i++)
        rays[i].setIsActive(false);
}

function mouseReleased() {
    for(let i = 0; i < rays.length; i++)
        rays[i].setIsActive(true);

    linesX.push(-1);
    linesY.push(-1);
}


function mouseDragged() {
    if(mouseButton == LEFT && (mouseX != pmouseX || mouseY != pmouseY)) {
        linesX.push(mouseX);
        linesY.push(mouseY);
    }
    return false;
}