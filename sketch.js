var lines;
var light;

function setup() {
    createCanvas(windowWidth, windowHeight);
    light = new Light(width/2, height/2);
    lines = new Lines();
}

function changeLightColor() {
    if(keyCode == UP_ARROW) {
        let r = Math.floor(random(0, 255));
        let g = Math.floor(random(0, 255));
        let b = Math.floor(random(0, 255));
        light.setColor(r, g, b);
    }
}

function draw() {
    background(0);

    light.updatePos(mouseX, mouseY);
    light.show(lines);

    lines.show();
}


function mousePressed() {
    light.setIsActive(false);
}


function mouseReleased() {
    light.setIsActive(true);
    lines.add(-1, -1);
}


function mouseDragged() {
    if(mouseX != pmouseX || mouseY != pmouseY) {
        lines.add(mouseX, mouseY);
    }
    return false;
}


function keyPressed() {
    if(keyCode == UP_ARROW) {
        let r = Math.floor(random(0, 255));
        let g = Math.floor(random(0, 255));
        let b = Math.floor(random(0, 255));
        light.setColor(r, g, b);
    }
    return false;
}