function setup(){
    createCanvas(1600,400)
    speed = random(223,321)
    weight = random(30,52)
    thickness = random(22,83)
    bullet = createSprite(50,200,50,5)
    wall = createSprite(1200,200,thickness,200)
    bullet.velocityX = speed 
    bullet.shapeColor = "white"
    wall.shapeColor = "white"

}
 function draw(){
     background("black")
     drawSprites()
     if( Collided(bullet,wall)){
        bullet.hide
        bullet.velocityX = 0
        damage = 0.5*weight* Math.pow(speed,2)/Math.pow(thickness,3)
        console.log (damage)
        if(damage > 10)
        wall.shapeColor = "red"
        else wall.shapeColor = "Green"
    }
}
function Collided(sprite1, sprite2){
    bulletRightEdge = sprite1.x + 50
    wallLeftEdge = sprite2.x
    if( bulletRightEdge > wallLeftEdge)
     return true 
      return false  
 }