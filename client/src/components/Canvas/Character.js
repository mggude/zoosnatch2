import Marioone from '../../images/characters/animated/animated_giraffe.png';

export default class Character {
    constructor(attr) {
        console.log(attr)
        this.screenHeight = attr.screen.height;
        this.screenWidth = attr.screen.width;
        this.width = (this.screenHeight / 4);
        this.height = (this.screenWidth / 4);
        this.x = 0;
        this.y = this.screenHeight - this.height;
        this.speedX = 0;
        this.speedY = 0;
        this.gravity = 1;
        this.gravitySpeed = 0;
        this.rockBottom = this.screenHeight - this.height;
        this.currentImage = 0;
        // this.imageArray = [Mariozero, Marioone, Mariotwo, Mariothree];
    }

    render(state) {     
    //updates locations based on keys being pressed  
        if (state.keys.left === true) {
            this.speedX = -2;
            this.speedY = -5;
        } else if (state.keys.right === true) {
            this.speedX = 2;
            this.speedY = -5;
        } else {
            this.speedX = 0
        }
        if (state.keys.up === true) {
            this.speedY = -15;
        };


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
    if (this.y > this.rockBottom) {
            this.y = this.rockBottom;
            this.gravitySpeed = 0;
        }
    //this creates a new character image after X and Y have been updated
        let image = new Image();
        image.src = Marioone; 
        image.onload = () => {
            context.drawImage(image, this.x, this.y, this.width, this.height);
        };
        context.restore();
    }
}