import BearZero from '../../images/characters/animated/bear_walk0.png';
import BearOne from '../../images/characters/animated/bear_walk1.png';

export default class Character {
    constructor(attr) {
        console.log(attr)
        this.screenHeight = attr.screen.height;
        this.screenWidth = attr.screen.width;
        //===============================

        this.width = (this.screenWidth / 5);
        this.height = (this.screenHeight / 4);
        this.x = 0;
        this.y = this.screenHeight - this.height;

        this.currentFrame = 0;
        this.frameCount = 6;

        //======================================
        this.speedX = 0;
        this.speedY = 0;
        this.gravity = 1;
        this.gravitySpeed = 0;
        this.rockBottom = this.screenHeight - this.height;
        this.currentImg = BearOne;
        this.hitBottom = false;
        this.jumping = false;
    }

    //for walking sprite effect
    updateFrame() {
        this.currentFrame ++;
        if (this.currentFrame > 7) {
            this.currentImg = BearZero;
        }
        if (this.currentFrame > 12) {
            this.currentFrame = 0;
            this.currentImg = BearOne;
        }
    }

    render(state) {   
    //updates locations based on keys being pressed  
        if (state.keys.left === true) {
            this.speedX = -2;
            this.speedY = -5;
            this.updateFrame();
        } else if (state.keys.right === true) {
            this.speedX = 2;
            this.speedY = -5;
            this.updateFrame();
        } else {
            this.speedX = 0;
            this.currentImg = BearOne;
        }
        if (state.keys.up === true) {
            this.speedY = -15;
            this.jumping = true;
        } else {
            this.jumping = false;
        }
        if (state.scene === 1) {
            if (state.keys.up === true) {
                this.speedY = -30;
            }
            if (state.keys.right === true && state.keys.up === true) {
                this.speedX = 10;
            }
        };

    //updates location based on speed and gravity
        this.x += this.speedX;
        this.gravitySpeed += this.gravity;
        this.y += this.speedY += this.gravitySpeed;
        const context = state.context;
    //this keeps the character on the ground

    if (state.scene === 1) {
            this.rockBottom = (this.screenHeight - (this.screenHeight / 10) - this.height);
    } 
    if (state.falling === true) {
        this.y += 10;
    } else if (this.y > this.rockBottom) {
            this.y = this.rockBottom;
            this.gravitySpeed = 0;
            this.hitBottom = true;
    } else {
        this.hitBottom = false;
    }
    //this creates a new character image after X and Y have been updated
        let image = new Image();
        image.src = this.currentImg; 
        image.onload = () => {
            // ctx.drawImage(character,srcX,srcY,width,height,x,y,width,height);
            context.drawImage(image, this.x, this.y, this.width, this.height);
        };
        context.restore();
    }
}