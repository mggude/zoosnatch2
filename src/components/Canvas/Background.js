import ScaryBG from '../../images/BG_Images/scaryBG.png';
import MountainsBG from '../../images/BG_Images/mountainsBG.png';
import SnowBG from '../../images/BG_Images/snowBG.png';

export default class Background {
    constructor(state) {
        console.log(state)
        this.screenHeight = state.screen.height;
        this.screenWidth = state.screen.width;
        this.x = 0;
        this.y = this.screenHeight - this.screenHeight;
        this.speedX = 0;
        this.speedY = 0;
        this.scene = state.scene;
        this.source = ScaryBG;
    }

    render(state) {
        //Finally the drawing methods
        if (state.keys.left === true) {
            this.speedX = 5;
        } else if (state.keys.right === true) {
            this.speedX = -5;
        } else {
            this.speedX = 0
        }
        this.x += this.speedX;

        if (this.scene === 0) {
            this.source = ScaryBG;
        } else if (this.scene === 1) {
            this.source = MountainsBG;
        } else if (this.scene === 2) {
            this.source = SnowBG;
        }

        const context = state.context;
        let image = new Image();
        image.src = this.source;
        image.onload = () => {
            //drawing selveral background images with different x cordinates to give a single picture an edless effect
            if ((this.x + this.screenWidth) < 0) {
                this.x = 0;
            }
            if ((this.x > this.screenWidth)) {
                this.x=0;
            }
            context.drawImage(image, this.x, 0, this.screenWidth, this.screenHeight);

            context.drawImage(image, (this.x - this.screenWidth), 0, this.screenWidth, this.screenHeight);
            context.drawImage(image, (this.x + this.screenWidth), 0, this.screenWidth, this.screenHeight);
        };
        context.restore();
    }
}
