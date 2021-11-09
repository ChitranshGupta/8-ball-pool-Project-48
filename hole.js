class Hole{
    constructor(x, y, radius){

        
        this.body = createSprite(x, y, radius, radius);
       
        this.width = radius;
        this.height = radius;

        this.radius = radius;
    }

    display(){
       
        
        ellipseMode(CENTER);
        ellipse(this.body.x, this.body.y, this.width, this.height);
        
    }
}