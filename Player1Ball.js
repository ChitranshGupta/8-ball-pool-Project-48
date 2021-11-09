class Player1Ball{
    constructor(x, y, radius){
        /*
        var options = {
            isStatic : false,
            restitution : 0.6,
            friction : 1.2,
            density : 1
            
        }
        */

        this.body = createSprite(x, y, radius, radius);
 //       Matter.Body.setAngle( this.body, angle);
       //   World.add(world,this.body);
        this.width = radius;
        this.height = radius;

      //  this.image = loadImage("spr_redBall2.png");

    }

    display(){
        ellipseMode(CENTER);
        //image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);

        fill(217, 58, 58);
        stroke("white");
        ellipse(this.body.x, this.body.y, this.width, this.height);

    }
}