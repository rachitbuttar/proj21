var ball;
var obg1,obg2,obg3,obg4;
var song;
function preload(){
song=loadSound("scam.mp3")

}
function setup() {
  createCanvas(780,800);
obg1=createSprite(80,780,190,30);
obg1.shapeColor="green";
obg2=createSprite(280,780,190,30);
obg2.shapeColor="aqua";
obg3=createSprite(480,780,190,30);
obg3.shapeColor="gold";
obg4=createSprite(680,780,190,30);
obg4.shapeColor="red";
ball=createSprite(random(20,300),100,50,50);
ball.velocityX=3;
ball.velocityY=7;
ball.shapeColor="white";
 }

function draw() {
  background(0,0,0);  
  text(mouseX+" "+mouseY,mouseX,mouseY);
 edges=createEdgeSprites();
 ball.bounceOff(edges);
 if(isTouching(obg1,ball)){
   ball.shapeColor="green";
  song.play();

 }
  if(isTouching(obg2,ball)){
   ball.shapeColor="aqua";
   song.play();

 }
  if(isTouching(obg3,ball)){
   ball.shapeColor="gold";
   
 }
if(isTouching(obg4,ball)){
   ball.shapeColor="red";
   
 }


  
drawSprites();
}
function isTouching(o1,o2) {
if(o1.x - o2.x <= o1.width/2 + o2.width/2 && 
  o2.x -o1.x <= o1.width/2 +o2.width/2&&
  o1.y - o2.y <=o1.height/2 + o2.height/2 && 
  o2.y - o1.y <=o1.height/2 +o2.height/2){
    return true
    
   }
  else{return false }

}