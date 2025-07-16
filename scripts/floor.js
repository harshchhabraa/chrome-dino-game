import { GAME_HEIGHT, SPEED } from "./config.js";

export default class Floor {
    constructor() {
        this.x = 0;
        this.y = GAME_HEIGHT - 60;
        this.w = 2400;
        this.h = 24;
        this.image = new Image();
        this.image.src = "../assets/floor.png";
        this.speed = SPEED;
    }
    draw(context) {
        context.drawImage(this.image , this.x , this.y , this.w , this.h);
        context.drawImage(this.image , this.x + this.w , this.y , this.w , this.h);
        if(this.x < -this.w) {
            this.x = 0;
        }
        this.move();
    }
    move() {
        this.x = this.x - this.speed;
    }
}