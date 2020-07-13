//Create variables here
var dog, happyDog, database, foodS, foodStock;

function preload()
{

  this.happyimage = loadImage("happydog.png");
  this.dogimage = loadImage("Dog.png");
	//load images here
}

function setup() {
	createCanvas(500,500);
  var dog = createSprite(250,250,20,20);
  dog.addImage(dogimage);
  dog.scale=0.5

  foodStock= database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
backGround(46,139,87);

if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(happyimage);

Text('press UP_ARROW key to feed this guy');



}



  drawSprites();
  //add styles here

}


function readStock(data){
  foodS=data.val();

}

function writeStock(x){

database.ref('/').update({
food:x

})

}