class Star {

    constructor(numberOfEnds, yMax, yMin, strokeColor, strokeWidth, fillColor, x, y) {
        this.numberOfEnds = numberOfEnds;
        this.yMax = yMax;
        this.yMin = yMin;
        this.strokeColor = strokeColor;
        this.strokeWidth = strokeWidth;
        this.fillColor = fillColor;
        this.x = x;
        this.y = y;


    }
    draw(ctx) {
        ctx.beginPath();
        ctx.translate(this.x, this.y);        
        let alfa = (360 / this.numberOfEnds) * Math.PI / 180;
        for (let i = 0; i < this.numberOfEnds; i++) {
            ctx.rotate(2*i*alfa);
            ctx.moveTo(0, - this.yMax);
            
            let x1 = Math.sin(alfa) * this.yMin;
            let y1 = this.yMax - Math.cos(alfa) * this.yMin;
            ctx.lineTo(x1, - this.yMax + y1);
            ctx.moveTo(0, -this.yMax);
            ctx.lineTo(-x1, - this.yMax + y1);
        }
        ctx.stroke();

    }
}
const canvas = document.getElementById('canvas');
canvas.width = 800;
canvas.height = 800;
const ctx = canvas.getContext('2d');
let star1 = new Star(16, 100, 20, 'blue', 3, 'red', 400, 400);
star1.draw(ctx);
