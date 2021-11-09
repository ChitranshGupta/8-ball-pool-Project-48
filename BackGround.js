class backGround{
    constructor(x, y, width, height){
       

        this.body = createSprite(x, y, width, height);

        this.width = width;
        this.height = height;

        this.image = loadImage("bg2.png"||"bg.png");


    }

    display(){
       rectMode(CENTER);
        image(this.image, this.body.x, this.body.y, this.width, this.height);

    }
}