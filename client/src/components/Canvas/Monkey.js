import Monkey from '../../images/Canvas/monkeyResting.png';
import MonkeyAttack from '../../images/Canvas/monkeyAttack.png';

export default class Character {
    constructor(attr) {
        console.log(attr)
        this.screenHeight = attr.screen.height;
        this.screenWidth = attr.screen.width;
        this.width = (this.screenHeight / 4);
        this.height = (this.screenWidth / 4);
        this.x = this.screenWidth - this.width;
        this.y = this.screenHeight - this.height;
        this.speedX = 0;
        this.speedY = 0;
        this.gravity = 1;
        this.gravitySpeed = 0;
        this.rockBottom = this.screenHeight - this.height;
        this.fightInitiated = true;
        this.jumping = false;
        this.jumpOne = false;
        this.jumpTwo = false;
        this.jumpThree= false;
        this.frameCount = 0;
        // this.imageArray = [Mariozero, Marioone, Mariotwo, Mariothree];
    }



    render(state) {
        this.frameCount ++;
        //updates locations based on keys being pressed  
        if (state.monkeyHealth > 1) {
            this.gravitySpeed = 0;
            this.speedY = -4;
        }
        if (state.keys.left === true) {
            this.speedX = 6;
            this.speedY = -5;
        } else if (state.keys.right === true) {
            this.speedX = -6;
            this.speedY = -5;
        } else {
            this.speedX = 0
        }
        if (state.keys.up === true) {
            this.speedY = -15;
        };
//=======^^^^key events^^^^^==========================
        //======Monkey Actions===========
        if (this.x < ((this.screenWidth) - (this.screenWidth / 3))) {
            this.fightInitiated = false;
        } else {
            this.fightInitiated = true;
        }
        if (!this.fightInitiated) {
            if (!this.jumpOne && !this.jumping  && this.frameCount > 40) {
                this.speedY = -30;
                this.jumping = true;
                this.jumpOne = true;
                this.jumpTwo = false;
                this.speedX = -50;
            } else if (!this.jumpTwo && !this.jumping  && this.frameCount > 55) {
                this.speedY = -40;
                this.jumping = true;
                this.jumpTwo = true;
                this.jumpThree = false;
                this.speedX = -50;
            } else if (!this.jumpThree && !this.jumping && this.frameCount > 70) {
                this.speedY = -60;
                this.jumping = true;
                this.jumpThree = true;
                this.jumpOne = false;
                this.frameCount = 0;
                this.speedX = 70;
            }

        }

        //updates location based on speed and gravity
        this.x += this.speedX;
        this.gravitySpeed += this.gravity;
        this.y += this.speedY += this.gravitySpeed;
        const context = state.context;

        //this keeps the character on the ground
        if (this.y > this.rockBottom) {
            this.jumping = false;
            this.y = this.rockBottom;
            this.gravitySpeed = 0;
        } 

        if (state.touching === true || this.jumping) {
            let image = new Image();
            image.src = MonkeyAttack;
            image.onload = () => {
                context.drawImage(image, this.x, this.y, this.width, this.height);
            };
        } else {
            let image = new Image();
            image.src = Monkey;
            image.onload = () => {
                context.drawImage(image, this.x, this.y, this.width, this.height);
            };
        }
        //this creates a new character image after X and Y have been updated

        context.restore();
    }
}