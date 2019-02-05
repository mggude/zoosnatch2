export default class Cliff {
    constructor(attr, i) {
        this.screenHeight = attr.screen.height;
        this.screenWidth = attr.screen.width;
        this.width = (this.screenHeight / 3);
        this.height = (this.screenWidth / 8);
        this.x = this.spiderSpacing;
        this.y = 0;

        this.speedX = 0;
        this.speedY = 0;
    }

    render(state) {
        //Finally the drawing methods
        const context = state.context;
        //======================================================
        context.globalAlpha = 1;

        context.beginPath();
        context.lineWidth = "6";
        context.strokeStyle = "#353857";
        context.rect(5,(this.screenHeight - this.height), this.screenWidth, this.screenHeight);
        context.stroke();
        context.restore();
    }
}