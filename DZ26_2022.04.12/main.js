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
        ctx.moveTo(this.x , this.y - this.yMax);
        let alfa = (360/this.numberOfEnds)*Math.PI/180;  
        for(let i = 0; i < this.numberOfEnds; i++){              
           // ctx.rotate(alfa);          
            let x1 =  Math.sin(i*alfa) * this.yMin;
            let y1 = this.yMax-Math.cos(i*alfa)*this.yMin;
            ctx.lineTo(this.x + x1, this.y - this.yMax + y1);
            ctx.lineTo(this.x + this.yMax*Math.sin(2*i*alfa), this.y - this.yMax*Math.cos(2*i*alfa));
        }
        ctx.stroke();
      
    }
}
const canvas = document.getElementById('canvas');
canvas.width = 800;
canvas.height = 800;
const ctx = canvas.getContext('2d');
let star1 = new Star(8, 100, 80, 'blue', 3, 'red', 400, 400);
star1.draw(ctx);

