class Border{
    constructor(x, y, width, height){


        this.body = createSprite(x, y, width, height);

        this.width = width;
        this.height = height;



    }

    display(){
        rectMode(CENTER);
        rect(this.body.x, this.body.y, this.width, this.height);

    }
}