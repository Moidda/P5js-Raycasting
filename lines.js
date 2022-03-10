class Lines {
    constructor() {
        this.x = new Array();
        this.y = new Array();
        this.length = 0;
    }

    add(x, y) {
        this.x.push(x);
        this.y.push(y);
        this.length++;
    }

    show() {
        for(let i = 0; i+1 < this.x.length; i++) {
            if(this.x[i+1] == -1) continue;
            if(this.x[i] == -1) continue;
            stroke(255);
            strokeWeight(10);
            line(this.x[i], this.y[i], this.x[i+1], this.y[i+1]);
        }
    }
}