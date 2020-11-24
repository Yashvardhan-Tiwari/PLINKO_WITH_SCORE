var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies; 
var particles = [];
var plinkos = [];
var divisions =[];
var particle;

var divisionHeight=300;
var score = 0;
var chance = 5;
var count = 0;
var gameState ="start";

function setup() {
  createCanvas(450, 500);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  
  div1 = new Divisions(60,400,5,180);
  div2 = new Divisions(135,400,5,180);
  div3 = new Divisions(210,400,5,180);
  div4 = new Divisions(285,400,5,180);
  div5 = new Divisions(360,400,5,180);
  div6 = new Divisions(425,400,5,180);
   
    for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,175));
    }

    for (var j = 75; j <=width; j=j+50) {
        plinkos.push(new Plinko(j,275));
    }

  }
 
function draw() {
  background("black");
  textSize(25)
  fill("white");
  textFont("Ravie")
  text("Score : "+score,20,40);
textFont("Segoe Script")
 textSize(20)

  text("CHANCE = "+chance,260,50)

  textFont("Britannic")

 div1.display();

 div2.display();

 div3.display();

 div4.display();

 div5.display();

 div6.display();

 if (chance < 1) {
  ground2 = new Ground(225,250,450,500);

ground2.display();
textSize(25)
fill("black")
text("TOTAL SCORE = "+score,150,250)

}

  //text(mouseX + "," + mouseY, 35, 100);
  textSize(12)
  text(" 500 ", 10, 330);
  text(" 500 ", 85, 330);
  text(" 100 ", 160,330);
  text(" 0 ", 240,330);
  text(" 200 ", 310,330);
  text(" 200 ", 385,330);
  text("  0  ", 435,330);
  
  Engine.update(engine);
  ground.display();
  
   

  

  

  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();  
  }
 
    if(particle!=null)
    {
       particle.display();
        
        if (particle.body.position.y>340)
        {
              if (particle.body.position.x < 135 ) 
              {
                chance = chance-1
                  score=score+500;      
                  particle=null;
                                          
              }


              else if (particle.body.position.x < 210 && particle.body.position.x > 135 ) 
              {
                chance = chance-1
                    score = score + 100;
                    particle=null;
                    

              }
              else if (particle.body.position.x < 425 && particle.body.position.x > 285 )
              {
                chance = chance-1    
                 score = score + 200;
                    particle=null;
                   

              }      

             
              
              else if (particle.body.position.x < 285 && particle.body.position.x > 210){
                chance = chance-1
               score = 0;
               particle=null;
                  
           }
           else if (particle.body.position.x >425){
            chance = chance-1
            score = 0;
            particle=null;

          }
        }
  
      }


 
}


function keyPressed()
{
 if(keyCode === 32) {
    
  particle=new Particle(random(5,495),10, 10); 
  

 }
  
    
}