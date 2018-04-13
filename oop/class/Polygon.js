class Polygon extends Shape {
    constructor(x, y, sides, radius, color) {
        super(x,y,color);
        this.radius = radius;
        this.sides = sides;

        Math.degToRad = (deg) => {
            return deg * Math.PI / 180;
        }
    }

    draw(ctx) {
        var angle = 360 / this.sides;

        ctx.beginPath();
        ctx.fillStyle = this.getColor();
        ctx.moveTo(this.x + this.radius, this.y);
        for(var i = 0; i <= this.sides; i++) {
            var a = Math.degToRad(i * angle);
            var vx = this.x + Math.cos(a) * this.radius;
            var vy = this.y + Math.sin(a) * this.radius;
            ctx.lineTo(vx, vy);
        }

        ctx.fill();
        ctx.closePath();
    }
}