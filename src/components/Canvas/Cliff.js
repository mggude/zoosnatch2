export default class Cliff {
    constructor(attr, i) {
        this.screenHeight = attr.screen.height;
        this.screenWidth = attr.screen.width;

        this.width = (this.screenWidth / 3);
        this.height = (this.screenHeight / 10);

        this.cliffSpacing = (this.screenWidth / 4);

        this.x = ((this.width + this.cliffSpacing) * i);
        this.y = 0;

        this.speedX = 0;
        this.speedY = 0;
    }

    render(state) {

        if (state.keys.left === true) {
            this.speedX = 2;
        } else if (state.keys.right === true) {
            this.speedX = -2;
        } else {
            this.speedX = 0
        }
        this.x += this.speedX;

        if (this.x + this.width < 0) {
            this.x = this.screenWidth;
        }

        //======================================================
        //Finally the drawing methods
        const context = state.context;
        context.globalAlpha = 1;
        context.beginPath();
        context.lineWidth = "15";
        context.strokeStyle = "#353857";
        context.rect(this.x, (this.screenHeight - this.height), this.width, this.screenHeight);
        context.fillStyle = "#353857";
        context.fill();
        context.stroke();
        context.restore();
    }
}