const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var b1_u, b1_d, b2, b3_u, b3_d, b4;
var h1, h2, h3, h4, h5, h6, h7, h8;
var stick;
var P1ball1, P1ball2, P1ball3, P1ball4, P1ball5, P1ball6, P1ball7;
var P2ball1, P2ball2, P2ball3, P2ball4, P2ball5, P2ball6, P2ball7;
var CommonLastBall;
var tempBall;
var mainball;
var bg, bgImg;
var mx, my;
var no = 1;
var balls = [];
var goal = 0;
var p1score = 0;
var p2score = 0;


function setup() {
  createCanvas(900,1600);

  engine = Engine.create();
  world = engine.world;

  
  bg = new backGround(0, 0, 900, 1600);

  b1_u = new Border(40, 430, 30, 650);
  b1_d = new Border(40, 1165, 30, 650);
  b2 = new Border(450, 40, 700, 30);
  b3_u = new Border(855, 430, 30, 650);
  b3_d = new Border(855, 1165, 30, 650);
  b4 = new Border(450, 1555, 700, 30);

  h1 = new Hole(80, 80, 70);
  h2 = new Hole(80, 1520, 70);
  h3 = new Hole(820, 80, 70);
  h4 = new Hole(820, 1520, 70);
  h5 = new Hole(70, 800, 70);
  h6 = new Hole(830, 800, 70);

  P1ball1 = new Player1Ball(450, 540, 30);
  P1ball2 = new Player1Ball(465, 513, 30);
  P1ball3 = new Player1Ball(420, 485, 30);
  P1ball4 = new Player1Ball(435, 457, 30);
  P1ball5 = new Player1Ball(495, 457, 30);
  P1ball6 = new Player1Ball(450, 430, 30);
  P1ball7 = new Player1Ball(480, 430, 30);

  P2ball1 = new Player2Ball(435, 513, 30);
  P2ball2 = new Player2Ball(480, 485, 30);
  P2ball3 = new Player2Ball(465, 457, 30);
  P2ball4 = new Player2Ball(405, 457, 30);
  P2ball5 = new Player2Ball(420, 430, 30);
  P2ball6 = new Player2Ball(390, 430, 30);
  P2ball7 = new Player2Ball(510, 430, 30);

  CommonLastBall = new LastBall(450, 485, 30);

  mainball = new mainBall(450, 1150, 30);
  
  stick = new Stick(450, 1220, 5, 450);
 
//Player 1 bounceoff function
    P1BallsBounceOffBorder();

//Player 2 bounceoff function
    P2BallsBounceOffBorder();

//Main ball(White ball)bounceoff function
    MainballBounceoffBorder();

//last ball(balck ball)bounceoff function
    LastballBounceOffBorder();

//bounce function for Player 1 balls
    P1BallsBounceSame();

//bounce function for player 2 ball
    P2ballsBounceSame();

//bounce function for main ball
    MainballBounceLastball();

//Bounce function between Player 1 ball and player 2 ball
    P1ballsBounceP2Balls();

}

function draw() {
  background(255,255,255);
/*
  textSize(18);
  text("Player 1 Score : "+P1Score,200,400);
  fill("black");

  textSize(18);
  text("Player 2 Score : "+p2score,250,600);
  fill("black");
*/

  Engine.update(engine);

  mx = mouseX;
  my = mouseY;



//Display for BackGrounds
  bg.display();

 //Dispay Of Borders
  b1_u.display();
  b1_d.display();
  b2.display();
  b3_u.display();
  b3_d.display();
  b4.display();

//Display Of Holes
  h1.display();
  h2.display();
  h3.display();
  h4.display();
  h5.display();
  h6.display();

//Player 1 Balls Display
  P1ball1.display();
  P1ball2.display();
  P1ball3.display();
  P1ball4.display();
  P1ball5.display();
  P1ball6.display();
  P1ball7.display();

//Player 2 Balls Display
  P2ball1.display();
  P2ball2.display();
  P2ball3.display();
  P2ball4.display();
  P2ball5.display();
  P2ball6.display();
  P2ball7.display();

//Black ball(common ball for both player at last) Display
  CommonLastBall.display();
  
//White ball Display
  mainball.display();

//Stick Display
  stick.display();



if(mouseIsPressed == true){
  var x = mouseX;
  var y = mouseY;

 line (mainball.body.x, mainball.body.y, x, y );

// mainball.body.x = x;
// mainball.body.y = y;
 if (mainball.body.y > y){
   mainball.body.velocityY = -4;


 }else{
   mainball.body.velocityY = +4;
 
 }
 if(mainball.body.x > x){
   mainball.body.velocityX = -4;

 }else{
   mainball.body.velocityX = +4;

}
}


  for(i = 0; i<balls.length; i++){
    balls[i].display()
  }



}


function P1Score(){
  if (
    P1ball1.body.isTouching(h1.body) || P1ball1.body.isTouching(h2.body) || P1ball1.body.isTouching(h3.body) || P1ball1.body.isTouching(h4.body) || P1ball1.body.isTouching(h5.body) || P1ball1.body.isTouching(h6.body) || P1ball1.body.isTouching(h7.body) || P1ball1.body.isTouching(h8.body) || 
    P1ball2.body.isTouching(h1.body) || P1ball2.body.isTouching(h2.body) || P1ball2.body.isTouching(h3.body) || P1ball2.body.isTouching(h4.body) || P1ball2.body.isTouching(h5.body) || P1ball2.body.isTouching(h6.body) || P1ball2.body.isTouching(h7.body) || P1ball2.body.isTouching(h8.body) || 
    P1ball3.body.isTouching(h1.body) || P1ball3.body.isTouching(h2.body) || P1ball3.body.isTouching(h3.body) || P1ball3.body.isTouching(h4.body) || P1ball3.body.isTouching(h5.body) || P1ball3.body.isTouching(h6.body) || P1ball3.body.isTouching(h7.body) || P1ball3.body.isTouching(h8.body) || 
    P1ball4.body.isTouching(h1.body) || P1ball4.body.isTouching(h2.body) || P1ball4.body.isTouching(h3.body) || P1ball4.body.isTouching(h4.body) || P1ball4.body.isTouching(h5.body) || P1ball4.body.isTouching(h6.body) || P1ball4.body.isTouching(h7.body) || P1ball4.body.isTouching(h8.body) || 
    P1ball5.body.isTouching(h1.body) || P1ball5.body.isTouching(h2.body) || P1ball5.body.isTouching(h3.body) || P1ball5.body.isTouching(h4.body) || P1ball5.body.isTouching(h5.body) || P1ball5.body.isTouching(h6.body) || P1ball5.body.isTouching(h7.body) || P1ball5.body.isTouching(h8.body) || 
    P1ball6.body.isTouching(h1.body) || P1ball6.body.isTouching(h2.body) || P1ball6.body.isTouching(h3.body) || P1ball6.body.isTouching(h4.body) || P1ball6.body.isTouching(h5.body) || P1ball6.body.isTouching(h6.body) || P1ball6.body.isTouching(h7.body) || P1ball6.body.isTouching(h8.body) || 
    P1ball7.body.isTouching(h1.body) || P1ball7.body.isTouching(h2.body) || P1ball7.body.isTouching(h3.body) || P1ball7.body.isTouching(h4.body) || P1ball7.body.isTouching(h5.body) || P1ball7.body.isTouching(h6.body) || P1ball7.body.isTouching(h7.body) || P1ball7.body.isTouching(h8.body)
     ){
       p1score = p1score+1;
     }

    }

function mouseDragged(){
  if (mouseIsPressed === true){
    mainball.body.velocityX = 0;
    mainball.body.velocityY = 0;

  }

}

  //Player 1 bounceoff function

  function P1BallsBounceOffBorder (){
    
P1ball1.body.bounceOff(b1_u.body);
P1ball1.body.bounceOff(b1_d.body);
P1ball1.body.bounceOff(b2.body);
P1ball1.body.bounceOff(b3_u.body);
P1ball1.body.bounceOff(b3_d.body);
P1ball1.body.bounceOff(b4.body);

P1ball2.body.bounceOff(b1_u.body);
P1ball2.body.bounceOff(b1_d.body);
P1ball2.body.bounceOff(b2.body);
P1ball2.body.bounceOff(b3_u.body);
P1ball2.body.bounceOff(b3_d.body);
P1ball2.body.bounceOff(b4.body);

P1ball3.body.bounceOff(b1_u.body);
P1ball3.body.bounceOff(b1_d.body);
P1ball3.body.bounceOff(b2.body);
P1ball3.body.bounceOff(b3_u.body);
P1ball3.body.bounceOff(b3_d.body);
P1ball3.body.bounceOff(b4.body);

P1ball4.body.bounceOff(b1_u.body);
P1ball4.body.bounceOff(b1_d.body);
P1ball4.body.bounceOff(b2.body);
P1ball4.body.bounceOff(b3_u.body);
P1ball4.body.bounceOff(b3_d.body);
P1ball4.body.bounceOff(b4.body);

P1ball5.body.bounceOff(b1_u.body);
P1ball5.body.bounceOff(b1_d.body);
P1ball5.body.bounceOff(b2.body);
P1ball5.body.bounceOff(b3_u.body);
P1ball5.body.bounceOff(b3_d.body);
P1ball5.body.bounceOff(b4.body);

P1ball6.body.bounceOff(b1_u.body);
P1ball6.body.bounceOff(b1_d.body);
P1ball6.body.bounceOff(b2.body);
P1ball6.body.bounceOff(b3_u.body);
P1ball6.body.bounceOff(b3_d.body);
P1ball6.body.bounceOff(b4.body);

P1ball7.body.bounceOff(b1_u.body);
P1ball7.body.bounceOff(b1_d.body);
P1ball7.body.bounceOff(b2.body);
P1ball7.body.bounceOff(b3_u.body);
P1ball7.body.bounceOff(b3_d.body);
P1ball7.body.bounceOff(b4.body);

}

//Player 2 bounceoff function

  function P2BallsBounceOffBorder(){

P2ball1.body.bounceOff(b1_u.body);
P2ball1.body.bounceOff(b1_d.body);
P2ball1.body.bounceOff(b2.body);
P2ball1.body.bounceOff(b3_u.body);
P2ball1.body.bounceOff(b3_d.body);
P2ball1.body.bounceOff(b4.body);

P2ball2.body.bounceOff(b1_u.body);
P2ball2.body.bounceOff(b1_d.body);
P2ball2.body.bounceOff(b2.body);
P2ball2.body.bounceOff(b3_u.body);
P2ball2.body.bounceOff(b3_d.body);
P2ball2.body.bounceOff(b4.body);

P2ball3.body.bounceOff(b1_u.body);
P2ball3.body.bounceOff(b1_d.body);
P2ball3.body.bounceOff(b2.body);
P2ball3.body.bounceOff(b3_u.body);
P2ball3.body.bounceOff(b3_d.body);
P2ball3.body.bounceOff(b4.body);

P2ball4.body.bounceOff(b1_u.body);
P2ball4.body.bounceOff(b1_d.body);
P2ball4.body.bounceOff(b2.body);
P2ball4.body.bounceOff(b3_u.body);
P2ball4.body.bounceOff(b3_d.body);
P2ball4.body.bounceOff(b4.body);

P2ball5.body.bounceOff(b1_u.body);
P2ball5.body.bounceOff(b1_d.body);
P2ball5.body.bounceOff(b2.body);
P2ball5.body.bounceOff(b3_u.body);
P2ball5.body.bounceOff(b3_d.body);
P2ball5.body.bounceOff(b4.body);

P2ball6.body.bounceOff(b1_u.body);
P2ball6.body.bounceOff(b1_d.body);
P2ball6.body.bounceOff(b2.body);
P2ball6.body.bounceOff(b3_u.body);
P2ball6.body.bounceOff(b3_d.body);
P2ball6.body.bounceOff(b4.body);

P2ball7.body.bounceOff(b1_u.body);
P2ball7.body.bounceOff(b1_d.body);
P2ball7.body.bounceOff(b2.body);
P2ball7.body.bounceOff(b3_u.body);
P2ball7.body.bounceOff(b3_d.body);
P2ball7.body.bounceOff(b4.body);

}

//Main ball(White ball)bounceoff function

  function MainballBounceoffBorder(){

mainball.body.bounceOff(b1_u.body);
mainball.body.bounceOff(b1_d.body);
mainball.body.bounceOff(b2.body);
mainball.body.bounceOff(b3_u.body);
mainball.body.bounceOff(b3_d.body);
mainball.body.bounceOff(b4.body);

}

//last ball( black ball)bounceoff function

 function LastballBounceOffBorder(){
  
  CommonLastBall.body.bounceOff(b1_u.body);
  CommonLastBall.body.bounceOff(b1_d.body);
  CommonLastBall.body.bounceOff(b2.body);
  CommonLastBall.body.bounceOff(b3_u.body);
  CommonLastBall.body.bounceOff(b3_d.body);
  CommonLastBall.body.bounceOff(b4.body);
 }

 function P1BallsBounceSame(){

  P1ball1.body.bounce(P1ball2.body);
P1ball1.body.bounce(P1ball3.body);
P1ball1.body.bounce(P1ball4.body);
P1ball1.body.bounce(P1ball5.body);
P1ball1.body.bounce(P1ball6.body);
P1ball1.body.bounce(P1ball7.body);
P1ball1.body.bounce(mainball.body);
P1ball1.body.bounce(CommonLastBall.body);

P1ball2.body.bounce(P1ball3.body);
P1ball2.body.bounce(P1ball4.body);
P1ball2.body.bounce(P1ball5.body);
P1ball2.body.bounce(P1ball6.body);
P1ball2.body.bounce(P1ball7.body);
P1ball2.body.bounce(mainball.body);
P1ball2.body.bounce(CommonLastBall.body);

P1ball3.body.bounce(P1ball4.body);
P1ball3.body.bounce(P1ball5.body);
P1ball3.body.bounce(P1ball6.body);
P1ball3.body.bounce(P1ball7.body);
P1ball3.body.bounce(mainball.body);
P1ball3.body.bounce(CommonLastBall.body);

P1ball4.body.bounce(P1ball5.body);
P1ball4.body.bounce(P1ball6.body);
P1ball4.body.bounce(P1ball7.body);
P1ball4.body.bounce(mainball.body);
P1ball4.body.bounce(CommonLastBall.body);

P1ball5.body.bounce(P1ball6.body);
P1ball5.body.bounce(P1ball7.body);
P1ball5.body.bounce(mainball.body);
P1ball5.body.bounce(CommonLastBall.body);

P1ball6.body.bounce(P1ball7.body);
P1ball6.body.bounce(mainball.body);
P1ball6.body.bounce(CommonLastBall.body);

P1ball7.body.bounce(mainball.body);
P1ball7.body.bounce(CommonLastBall.body);

}

function P2ballsBounceSame(){
  P2ball1.body.bounce(P2ball2.body);
P2ball1.body.bounce(P2ball3.body);
P2ball1.body.bounce(P2ball4.body);
P2ball1.body.bounce(P2ball5.body);
P2ball1.body.bounce(P2ball6.body);
P2ball1.body.bounce(P2ball7.body);
P2ball1.body.bounce(mainball.body);
P2ball1.body.bounce(CommonLastBall.body);

P2ball2.body.bounce(P2ball3.body);
P2ball2.body.bounce(P2ball4.body);
P2ball2.body.bounce(P2ball5.body);
P2ball2.body.bounce(P2ball6.body);
P2ball2.body.bounce(P2ball7.body);
P2ball2.body.bounce(mainball.body);
P2ball2.body.bounce(CommonLastBall.body);

P2ball3.body.bounce(P2ball4.body);
P2ball3.body.bounce(P2ball5.body);
P2ball3.body.bounce(P2ball6.body);
P2ball3.body.bounce(P2ball7.body);
P2ball3.body.bounce(mainball.body);
P2ball3.body.bounce(CommonLastBall.body);

P2ball4.body.bounce(P2ball5.body);
P2ball4.body.bounce(P2ball6.body);
P2ball4.body.bounce(P2ball7.body);
P2ball4.body.bounce(mainball.body);
P2ball4.body.bounce(CommonLastBall.body);

P2ball5.body.bounce(P2ball6.body);
P2ball5.body.bounce(P2ball7.body);
P2ball5.body.bounce(mainball.body);
P2ball5.body.bounce(CommonLastBall.body);

P2ball6.body.bounce(P2ball7.body);
P2ball6.body.bounce(mainball.body);
P2ball6.body.bounce(CommonLastBall.body);

P2ball7.body.bounce(mainball.body);
P2ball7.body.bounce(CommonLastBall.body);

}

function MainballBounceLastball(){

mainball.body.bounce(CommonLastBall.body);

}

function P1ballsBounceP2Balls(){
  P1ball1.body.bounce(P2ball1.body);
P1ball1.body.bounce(P2ball2.body);
P1ball1.body.bounce(P2ball3.body);
P1ball1.body.bounce(P2ball4.body);
P1ball1.body.bounce(P2ball5.body);
P1ball1.body.bounce(P2ball6.body);
P1ball1.body.bounce(P2ball7.body);

P1ball2.body.bounce(P2ball1.body);
P1ball2.body.bounce(P2ball2.body);
P1ball2.body.bounce(P2ball3.body);
P1ball2.body.bounce(P2ball4.body);
P1ball2.body.bounce(P2ball5.body);
P1ball2.body.bounce(P2ball6.body);
P1ball2.body.bounce(P2ball7.body);

P1ball3.body.bounce(P2ball1.body);
P1ball3.body.bounce(P2ball2.body);
P1ball3.body.bounce(P2ball3.body);
P1ball3.body.bounce(P2ball4.body);
P1ball3.body.bounce(P2ball5.body);
P1ball3.body.bounce(P2ball6.body);
P1ball3.body.bounce(P2ball7.body);

P1ball4.body.bounce(P2ball1.body);
P1ball4.body.bounce(P2ball2.body);
P1ball4.body.bounce(P2ball3.body);
P1ball4.body.bounce(P2ball4.body);
P1ball4.body.bounce(P2ball5.body);
P1ball4.body.bounce(P2ball6.body);
P1ball4.body.bounce(P2ball7.body);

P1ball5.body.bounce(P2ball1.body);
P1ball5.body.bounce(P2ball2.body);
P1ball5.body.bounce(P2ball3.body);
P1ball5.body.bounce(P2ball4.body);
P1ball5.body.bounce(P2ball5.body);
P1ball5.body.bounce(P2ball6.body);
P1ball5.body.bounce(P2ball7.body);

P1ball6.body.bounce(P2ball1.body);
P1ball6.body.bounce(P2ball2.body);
P1ball6.body.bounce(P2ball3.body);
P1ball6.body.bounce(P2ball4.body);
P1ball6.body.bounce(P2ball5.body);
P1ball6.body.bounce(P2ball6.body);
P1ball6.body.bounce(P2ball7.body);

P1ball7.body.bounce(P2ball1.body);
P1ball7.body.bounce(P2ball2.body);
P1ball7.body.bounce(P2ball3.body);
P1ball7.body.bounce(P2ball4.body);
P1ball7.body.bounce(P2ball5.body);
P1ball7.body.bounce(P2ball6.body);
P1ball7.body.bounce(P2ball7.body);

}