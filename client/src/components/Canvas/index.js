import React, { Component } from 'react';

import Character from './Character';
import Background from './Background';
import Health from './Health';

import Spider from './Spider';
import Cliff from './Cliff';
import Monkey from './Monkey';
import Poop from './Poop';


class Canvas extends Component {
    constructor(data) {
        console.log("data: ", data);
        super();
        this.state = {
            screen: {
                width: window.innerWidth,
                height: window.innerHeight,
                ratio: window.devicePixelRatio || 1,
            },
            context: null,
            keys: {
                left: false,
                right: false,
                up: false,
                space: false,
            },
            health: 0,
            monkeyHealth: 0,
            touching: false,
            //==== SCENE WILL EQUAL DATA.SCENE=====
            scene: 0,
            falling: false,
            data: data,
            points: data.points,
            sceneComplete: false
        }
        this.background = [];
        this.characters = [];
        this.objects = [];
        this.monkey = [];
        this.health = [];
        this.poop = [];
    }
    //=========================
    //handles key press events
    handleKeys(value, e) {
        let keys = this.state.keys;
        if (e.keyCode === 37) keys.left = value;
        if (e.keyCode === 39) keys.right = value;
        if (e.keyCode === 38) keys.up = value;
        if (this.state.scene === 2 && e.keyCode === 32 && !this.state.keys.space) {
            this.generatePoop();
            keys.space = value;
        } else {
            keys.space = value;
        }
        this.setState({
            keys: keys
        });
    }
    //handles screen touch events
    handleTouch(value, e) {
        console.log("value: ", value, "e: ", e.touches.length);
        let keys = this.state.keys;
        if (e.touches.length > 1) {
            keys.up = value;
        } else {
            keys.up = false;
        }
        if (e.changedTouches[0].screenX < this.state.screen.width / 2) {
            keys.left = value;
        } else if (e.changedTouches[0].screenX > this.state.screen.width / 2) {
            keys.right = value
        };
        this.setState({
            keys: keys
        })
    }
    //handles screen resize events
    handleResize() {
        this.setState({
            screen: {
                width: window.innerWidth,
                height: window.innerHeight,
                ratio: window.devicePixelRatio || 1,
            }
        });
    }
    //============================================
    //starts game and activates key press/screen touch listener on component mounting
    componentDidMount() {
        console.log("mounted")
        // console.log("props: ", this.props)
        window.addEventListener('keydown', this.handleKeys.bind(this, true));
        window.addEventListener('keyup', this.handleKeys.bind(this, false));
      

        window.addEventListener('touchstart', this.handleTouch.bind(this, true));
        window.addEventListener('touchend', this.handleTouch.bind(this, false));
        window.addEventListener('resize', this.handleResize());

        const context = this.refs.canvas.getContext('2d');
        this.setState({ context: context });
        this.startGame();
        requestAnimationFrame(() => { this.update() });
    }

    //update the canvas
    update() {
        if (this.state.sceneComplete === false) {
            this.state.points = (Math.floor((1 - this.state.health) * 1000));
            // console.log("update called")
            const context = this.state.context;
            context.save();
            context.scale(this.state.screen.ratio, this.state.screen.ratio);
            context.globalAlpha = 0.001;
            // This calls a function that loops through an array updating each object
            this.updateObjects(this.background, 'background');
            this.updateObjects(this.characters, 'characters');
            this.updateObjects(this.objects, 'object');
            if (this.state.scene === 2) {
                this.updateObjects(this.monkey, 'object');
            }
            this.updateObjects(this.health, 'health');
            this.checkObjectsTouching(this.characters[0], this.monkey[0]);
            context.restore();
            // Next frame
            requestAnimationFrame(() => { this.update() });
            this.checkSceneComplete(this.characters[0]);
        }
       
    }

    //initial game start
    startGame() {
        console.log("startgame called")
        let background = new Background(this.state);
        this.background.push(background);
        //========================================
        let character = new Character(this.state);
        this.characters.push(character);
        //======================================
        let health = new Health(this.state);
        this.health.push(health);
        //======================================
        if (this.state.scene === 0) {
            this.generateObjects(6);
        } else if (this.state.scene === 1) {
            this.generateObjects(5);
        } else if (this.state.scene === 2) {
            this.generateObjects(1);
        }
        this.state.sceneComplete = false;
    }

    generateObjects(howMany) {
        for (let i = 0; i < howMany; i++) {
            if (this.state.scene === 0) {
                let object = new Spider(this.state, i);
                this.objects.push(object);
            } else if (this.state.scene === 1) {
                let object = new Cliff(this.state, i);
                this.objects.push(object);
            } else if (this.state.scene === 2) {
                let object = new Monkey(this.state, i);
                this.monkey.push(object);
            }
        }
    }

    generatePoop() {
            let object = new Poop(this.state, this.characters[0]);
            this.objects.push(object);
    }

    //updates objects based on movement
    updateObjects(items, group) {
        let index = 0;
        for (let item of items) {
            if (item.delete) {
                this[group].splice(index, 1);
            } else {
                items[index].render(this.state);
            }
            index++;
        }
    }
    //checks if character is touching obstacles
    checkObjectsTouching(characters, monkey) {
        for (let i = 0; i < this.objects.length; i++) {
            // console.log("spiders: ", this.spiders[i]);
            let object = this.objects[i];
            if (this.state.scene === 0) {
                if (object.x < (characters.x + characters.width) && object.x > characters.x && object.y > characters.y) {
                    this.setState({
                        health: this.state.health + .005,
                        touching: true
                    });
                }
            } else if (this.state.scene === 1) {
                if (characters.x > (object.x + object.width) && characters.x < (this.objects[(i + 1)].x) && !characters.jumping && !characters.hitBottom) {
                    console.log("falling");
                    this.setState({ falling: true });
                    this.setState({ health: 1});
                }
            } else if (this.state.scene === 2) {
                console.log("check touching scene two")
                if (object.x > monkey.x && object.x < (monkey.x + monkey.width) && object.y < (monkey.y + monkey.height)) {
                    this.setState({ monkeyHealth: this.state.monkeyHealth + .02 });
                    console.log("Monkey health", this.state.monkeyHealth)
                } else if (object.x > this.state.screen.width) {
                    this.objects.shift();
                } 
            }
            
        }
        if (this.state.scene === 2) {
            if (monkey.x < (characters.x + characters.width) && this.state.monkeyHealth < 1) {
                this.setState({
                    health: this.state.health + .01 ,
                    touching: true
                });
            } else {
                this.setState({ touching: false });
            }
        }
    }

    checkSceneComplete(characters) {
        if (characters.x > this.state.screen.width && !this.state.sceneComplete && this.state.scene === 2) {
            window.location.href = "/leaderboard";
        }
        if (characters.x > this.state.screen.width && !this.state.sceneComplete) {
            this.state.sceneComplete = true;
            this.state.scene ++;
            this.background = [];
            this.characters = [];
            this.objects = [];
            this.monkey = [];
            this.health = [];
            this.poop = [];
            this.componentDidMount();
        }
    }

    render() {
        return (
            <div>
                <div className="container">
                <canvas ref="canvas"
                    width={this.state.screen.width}
                    height={this.state.screen.height}
                />
                </div>
            </div>
        )
    }
}

export default Canvas;