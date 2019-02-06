import Spiderimg from '../../images/Canvas/spider.png';


export default class Spider {
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

        this.gravity = -.03;
        this.gravitySpeed = 0;
        this.gravitySpeedReset = false;
    }

    render(state) {
        //Finally the drawing methods
        if (this.y > this.screenHeight * .8) {
            this.gravitySpeed = 0;
            this.gravity = -.04;
        //========================================
        } else if (this.y < -10) {
            this.speedY = 0;
            this.gravity = .1;
        }
        this.gravitySpeed += this.gravity;
        this.y += this.gravitySpeed;
        const context = state.context;
        //======================================================
        context.globalAlpha = 1;
        context.strokeStyle = "#FFFFFF"
        context.lineWidth = 3;
        context.beginPath();
        context.moveTo(this.x + (this.width/2), 0);
        context.lineTo(this.x + (this.width/2), this.y + (this.height / 4));
        context.stroke();
        let image = new Image();
        image.src = Spiderimg;
        image.onload = () => {
            context.drawImage(image, this.x, this.y, this.width, this.height);
        };
        context.restore();
    }
}