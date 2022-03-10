class Ray {
    constructor(x, y, theta = 0) {
        this.startX = x;
        this.startY = y; 
        this.theta = theta;
        this.len = 2*max(windowWidth, windowHeight);
        this.isActive = true;
        
        angleMode(DEGREES);
        this.endX = this.startX + this.len*cos(this.theta);
        this.endY = this.startY - this.len*sin(this.theta);
    
        this.rayColor = color(255, 255, 0);
    }

    setColor(rayColor) {
        this.rayColor = rayColor;
    }

    show() {
        if(!this.isActive) return;
        strokeWeight(1);
        stroke(this.rayColor);
        line(this.startX, this.startY, this.endX, this.endY);
    }

    updatePos(x, y) {
        this.startX = x;
        this.startY = y;
        this.endX = this.startX + this.len*cos(this.theta);
        this.endY = this.startY - this.len*sin(this.theta);
    }

    collides(x3, y3, x4, y4) {
        let x1 = this.startX;
        let x2 = this.endX;
        let y1 = this.startY;
        let y2 = this.endY;
        let D = (x1 - x2)*(y3 - y4) - (x3 - x4)*(y1 - y2);
        let t = (x1 - x3)*(y3 - y4) - (y1 - y3)*(x3 - x4);
        let u = (x1 - x3)*(y1 - y2) - (y1 - y3)*(x1 - x2);
        if(D == 0) return;
        t /= D;
        u /= D;
        if(0<=u && u<=1 && 0<=t && t<=1) {
            let px = x1 + t*(x2 - x1);
            let py = y1 + t*(y2 - y1);    
            this.endX = px;
            this.endY = py;
        }
    }

    setIsActive(isActive) {
        this.isActive = isActive;
    }
}