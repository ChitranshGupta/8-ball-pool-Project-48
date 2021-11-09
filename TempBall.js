class TempBall{
    constructor(x, y, radius){




        this.body = createSprite(x, y, radius, radius);
        this.width = radius;
        this.height = radius;


        this.image = loadImage("spr_yellowBall2.png");

        this.radius = radius;


    }

    display(){
        
        this.body.x = mouseX;
        this.body.y = mouseY;
        if (goal ===1)
        {
            World.remove(world, this.body);
          goal=0;
        }else 
        {ellipseMode(CENTER);
       image(this.image, this.body.x, this.body.y, this.width, this.height);
        }

    }
}