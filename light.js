class Light {
    constructor(x, y, angleDistance = 0.25) {
        this.centerX = x;
        this.centerY = y;
        this.radius = 10;
        this.isActive = true;
        this.lightColor = color(255, 255, 0);
        
        this.rays = new Array();
        for(var i = 0; i < 360; i+=0.25) {
            let ray = new Ray(this.centerX, this.centerY, i);
            ray.setColor(this.lightColor);
            this.rays.push(ray);
        }
    }

    setColor(r, g, b) {
        console.log(r + " " + g + " " + b);
        this.lightColor = color(r, g, b);
        for(let i = 0; i < this.rays.length; i++) 
            this.rays[i].setColor(this.lightColor);
    }

    updatePos(x, y) {
        this.centerX = x;
        this.centerY = y;
        for(let i = 0; i < this.rays.length; i++) 
            this.rays[i].updatePos(this.centerX, this.centerY);
    }

    setIsActive(flag) {
        this.isActive = flag;
    }

    show(lines) {
        if(!this.isActive) return;

        fill(this.lightColor);
        circle(this.centerX, this.centerY, this.radius);

        for(let i = 0; i < this.rays.length; i++) {
            this.rays[i].updatePos(mouseX, mouseY);
            for(let j = 0; j+1 < lines.length; j++) {
                if(lines.x[j+1] == -1) continue;
                if(lines.x[j] == -1) continue;    
                let x1 = lines.x[j];
                let y1 = lines.y[j];
                let x2 = lines.x[j+1];
                let y2 = lines.y[j+1];
                this.rays[i].collides(x1, y1, x2, y2);
            }
            this.rays[i].show();
        }
    }
}