class LastBall{
    constructor(x, y, radius){
     

        this.body = createSprite(x, y, radius, radius);
 
        this.width = radius;
        this.height = radius;

    

    }

    display(){
        ellipseMode(CENTER);
        fill("black");
        ellipse(this.body.x, this.body.y, this.width, this.height);

    }
}