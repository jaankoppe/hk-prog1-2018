class Rectangle extends Shape {
    constructor(x, y, width, height, color) {
        super(x,y,color);
        this.width = width;
        this.height = height;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.getColor();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fill();
        ctx.closePath();
    }
}