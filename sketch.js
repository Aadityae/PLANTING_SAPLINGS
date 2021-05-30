var ground,player;
var ground_img,player_img;
var fence,fence_img,fenceGroup;
var sapling,seed1,seed2,seed3,sapling_img

function preload()
{
  ground_img = loadImage("IMAGES - PLANTING SAPLINGS/path-1.png")
  player_img = loadAnimation("IMAGES - PLANTING SAPLINGS/Runner-1.png","IMAGES - PLANTING SAPLINGS/Runner-2.png")
  fence_img = loadImage("IMAGES - PLANTING SAPLINGS/fence.png")
  seed1 =loadImage("IMAGES - PLANTING SAPLINGS/seed- 1.png")
  seed2 =loadImage("IMAGES - PLANTING SAPLINGS/seed-2.png")
  seed3 =loadImage("IMAGES - PLANTING SAPLINGS/seed-3.png")
  sapling_img = loadImage("IMAGES - PLANTING SAPLINGS/sapling-1.png")
}

function setup()
{
  createCanvas(500,800)

  ground = createSprite(250,400)
  ground.addImage(ground_img)
  ground.scale = 4
  ground.velocityY = 3

  player = createSprite(200,700)
  player.addAnimation("players",player_img)
  player.scale = 0.08
  
  fenceGroup = new Group()

}

function draw()
{
  background("white")



if(ground.y>800)
  {
   ground.y = 400 
   ground.height = ground.height/2

  }

  if(keyDown("RIGHT_ARROW"))
  {
    player.x = player.x+2
  }

  
  if(keyDown("LEFT_ARROW"))
  {
    player.x = player.x-2
  }

  spawnObstacles()

  drawSprites()
}


function spawnObstacles()
{
  if(frameCount%250 === 0)
  {
    fence = createSprite(30,-20)
    fence.addImage(fence_img)
    fence.velocityY =3
    fence.scale = 0.25
    fence.x = Math.round(random(40,330))
    fence.lifetime = 480
    fenceGroup.add(fence)
  }
  
}
