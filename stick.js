class Stick{
    constructor(x, y, width, height, angle){


        this.body = createSprite(x, y, width, height);

        this.width = width;
        this.height = height;

    }

    display(){
        rectMode(CORNER);
        rect(this.body.x, this.body.y, this.width, this.height);

    }
}