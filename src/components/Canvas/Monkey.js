export default class Cliff {
    constructor(attr, i) {
        this.screenHeight = attr.screen.height;
        this.screenWidth = attr.screen.width;
        this.width = (this.screenHeight / 13);
        this.height = (this.screenWidth / 13);
        this.spiderSpacing = (((((this.screenWidth / 4) * 3) / 5) * i) + (this.screenWidth / 4));
        this.x = this.spiderSpacing;
        this.y = Math.floor((Math.random() * this.screenHeight * .8) + 1);

        this.speedX = 0;
        this.speedY = 0;
    }

    render(state) {
        //Finally the drawing methods
        const context = state.context;
        //======================================================
        context.fillRect(20, 20, 150, 100);
        context.stroke();
        context.restore();
    }
}