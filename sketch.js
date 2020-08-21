//Create variables here
var dog,happyDog;
var database,foodS;
var foodStock,FoodObj;
var fedTime,lastFed;
var button1,button2;
function preload()
{
  dog1 = loadImage("images/dogimg.png");
  doghappy = loadImage("images/dogimg1.png");
}

function setup() {
	createCanvas(500,500);
 dog=createSprite(250,250,15,15)
 dog.image = loadImage(dog1)
}


function draw() {  
  background(46,139,87)
foodStock=database
foodStock.on("value"/readstock)
//if (KeyDown(UP_ARROW)){
 // writeStock(foodS);
 // dog.addImages(doghappy)
}
  drawSprites();
  //add styles here

//}
function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}
Fill(255,255,254);
textSize(15);
if(lastFed>=12){
  text("Last Feed : "+ lastFed%12 + "PM" , 350,30);
}else if(lastFed==0){
  text("Last Feed : 12 AM",350,30);
}else{
  text("Las Feed : "+ lastFed + "AM",350,30);
}
function feedDog(){
  dog.addImages(doghappy)
  FoodObj.updateFoodStock(foodobj.getFoodStock()-1);
  Food.foodObj.getFoodStock();
  FeedTime:hour()
}
function addFoods(){
  foodS++;
  database.ref('/').update({Food:foodS})
}