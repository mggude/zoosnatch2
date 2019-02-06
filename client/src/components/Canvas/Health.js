import Giraffeherd from "../../images/Canvas/bearForest.jpg";

export default class Health {
    constructor(attr) {
        this.screenHeight = attr.screen.height;
        this.screenWidth = attr.screen.width;
        this.lineSpace = this.screenwidth / 7;
        this.fadeIn = 0;
        this.giraffeFade = 0;
    }

    render(state) {
        //Finally the drawing methods
        const fillNow = () => context.fillRect(0, 0, this.screenWidth, this.screenHeight);
        const context = state.context;
        context.fillStyle = 'red';
        if (state.health > 1) {
            context.fillStyle = 'white';
        }


        if (state.touching === true) {
            this.giraffeFade += .1;
        }
        let image = new Image();
        image.src = Giraffeherd;
        image.onload = () => {
            context.globalAlpha = this.fadeIn;
            if (state.health > 1) {
                context.globalAlpha = 1;
            }
            context.drawImage(image, 0, 0, this.screenWidth, this.screenHeight);
        };

        if (state.health < .7) {
            this.fadeIn = state.health;
        }
        context.globalAlpha = this.fadeIn;
        fillNow();
        context.globalAlpha = 1;
        context.restore();
    }
}
