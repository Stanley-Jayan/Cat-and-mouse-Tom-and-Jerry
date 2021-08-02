var garden
var tom
var jerry
var tomImg
var jerryImg

function preload() {
 garden=loadImage("images/garden.png")
 tomImg=loadImage("images/cat1.png")
 tomImg2=loadImage("images/cat2.png","images/cat3.png")
 tomImg3=loadImage("images/cat4.png")

 jerryImg=loadImage("images/mouse1.png")
 jerryImg2=loadImage("images/mouse2.png","images/mouse3.png")
 jerryImg3=loadImage("images/mouse4.png")

}




function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(870,600)
    tom.addAnimation("Tom",tomImg)
    jerry=createSprite(200,600)
    jerry.addAnimation("Jerry",jerryImg)
    tom.scale=0.2
    jerry.scale=0.2

}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
        tom.changeAnimation("Happy",tomImg3)
        jerry.changeAnimation("Happyy",jerryImg3)
        tom.scale=0.2
        jerry.scale=0.2
        tom.velocityX=0
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
      jerry.changeAnimation("TEASER",jerryImg2)
      jerry.scale=0.2
      tom.velocityX=-5
      tom.changeAnimation("hooray",tomImg2)

  }



}
