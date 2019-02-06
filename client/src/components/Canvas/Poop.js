import PoopImg from '../../images/Canvas/poopAnimated.png'

export default class Poop {
    constructor(attr, character) {
        this.screenHeight = attr.screen.height;
        this.screenWidth = attr.screen.width;
        //===============================

        this.width = (this.screenWidth / 10);
        this.height = (this.screenHeight / 10);
        this.x = character.x;
        this.y = character.y;

        this.currentFrame = 0;
        this.frameCount = 6;

        //======================================
        this.speedX = 20;
        this.speedY = 0;
        this.gravity = 1;
        this.gravitySpeed = 0;
        this.rockBottom = this.screenHeight - this.height;
    }

    render(state) {          
        const context = state.context;
        this.x += this.speedX;
    //this creates a new character image after X and Y have been updated
        let image = new Image();
        image.src = PoopImg; 
        image.onload = () => {
            // ctx.drawImage(character,srcX,srcY,width,height,x,y,width,height);
            context.drawImage(image, this.x, this.y, this.width, this.height);
        };
        context.restore();
        console.log("x", this.y)
    }
}