var canvas;
var music;
var box;
var b1,b2,b3,b4;
var edges;
function preload(){
    music = loadSound("music.mp3");

}


function setup(){
    canvas = createCanvas(800,600);
    

    //create 4 different surfaces
    b1 = createSprite(100,590,190,15);
    b1.shapeColor = "red";
    b2 = createSprite(300,590,190,15);
    b2.shapeColor = "blue";
    b3 = createSprite(500,590,190,15);
    b3.shapeColor = "yellow";
    b4 = createSprite(700,590,190,15);
    b4.shapeColor = "green";

    //create box sprite and give velocity
    box = createSprite(400,300,20,20);
    box.shapeColor = "white";
    box.velocityX = 5;
    box.velocityY = 6;
}

function draw() {
    background("black");
    //create edgeSprite
edges = createEdgeSprites();//creating boundry
box.bounceOff(edges)
if(b1.isTouching(box)){
 box.shapeColor = "red";
}
if(b2.isTouching(box)){
    box.shapeColor = "blue";
    box.velocityX = 0;
    box.velocityY = 0;
   }
   if(b3.isTouching(box)){
    box.shapeColor = "yellow";
   }
   if(b4.isTouching(box)){
    box.shapeColor = "green";
   }
drawSprites();

    //add condition to check if box touching surface and make it box
}
