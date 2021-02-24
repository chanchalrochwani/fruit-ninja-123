var sword,swordImage,fruit1,fruit2,fruit3,fruit4,fruit1Image,fruit2Image,fruit3Image,fruit4Image
var alien1,alien2,alien1Image,alien2Image,fruitsGroup,aliensGroup,fruits,swooshSound
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  

  swordImage=loadImage("sword.png");
  fruit1Image=loadImage("fruit1.png");
  fruit2Image=loadImage("fruit2.png");
  fruit3Image=loadImage("fruit3.png");
  fruit4Image=loadImage("fruit4.png");
  alien1Image=loadImage("alien1.png");
  alien2Image=loadImage("alien2.png");
  swooshSound=loadSound("knifeSwooshSound.mp3");
}

function setup(){
createCanvas(700,700);
  sword=createSprite(50,250,20,20);
  sword.addImage(swordImage);
  sword.scale=0.7;
  sword.setCollider("rectangle",0,0,40,40);
  sword.debug=true;
  
  
  
  
 
  
  
  
  fruitsGroup=createGroup();
  aliensGroup=createGroup();
}
 function draw() {
   background("black");
   if(gameState===PLAY){ 
   sword.y=World.mouseY;
   sword.x=World.mouseX;
      if(sword.isTouching(fruitsGroup)){
     fruitsGroup.destroyEach();
     swooshSound.play();
   }
     if(sword.isTouching(aliensGroup)){

        gameState=END;
       fruitsGroup.velocityX=0;
     }
    
 
  
spawnaliens();
   
   spawnfruits();
   }
   if(gameState===END){
      fruitsGroup.velocityX=0;
   }
   drawSprites();
   
   
   
   
   
   
   
   
   
 }
function spawnfruits(){
 if (frameCount % 60 === 0){
   var fruits = createSprite(400,165,10,40);
   fruits.velocityX = -6;
   
    //generate random obstacles
    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: fruits.addImage(fruit1Image);
              break;
      case 2: fruits.addImage(fruit2Image);
              break;
      case 3: fruits.addImage(fruit3Image);
              break;
      case 4: fruits.addImage(fruit4Image);
              break;
   //   case 5: fruits.addImage(alien1Image);
    //          break;
    //  case 6: fruits.addImage(alien2Image);
    //          break;
      default: break;
    }
   
    //assign scale and lifetime to the obstacle           
    fruits.scale = 0.5;
    fruits.lifetime = 300;
   
   //add each fruits to the group
    fruitsGroup.add(fruits);
 }
}
function spawnaliens(){
 if (frameCount % 60 === 0){
   var aliens = createSprite(400,165,10,40);
   aliens.velocityX = -6;
   
    //generate random obstacles
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: aliens.addImage(alien1Image);
              break;
      case 2: aliens.addImage(alien2Image);
              break;
      
   //   case 5: aliens.addImage(alien1Image);
    //          break;
    //  case 6: aliens.addImage(alien2Image);
    //          break;
      default: break;
    }
   
    //assign scale and lifetime to the obstacle           
    aliens.scale = 0.5;
    aliens.lifetime = 300;
   
   //add each aliens to the group
    aliensGroup.add(aliens);
   
 }
}









