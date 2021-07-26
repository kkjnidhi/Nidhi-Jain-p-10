var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["c297b0df-66af-41e1-bae5-07f546b127a1","74934fbf-f255-4826-8bf1-8b67b6de4465"],"propsByKey":{"c297b0df-66af-41e1-bae5-07f546b127a1":{"name":"happy","sourceUrl":"assets/api/v1/animation-library/gamelab/h_LF7PqnHba0BOlL85_9g6TgRHqzd_Lh/category_emoji/emoji_19.png","frameSize":{"x":300,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"h_LF7PqnHba0BOlL85_9g6TgRHqzd_Lh","categories":["emoji"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/h_LF7PqnHba0BOlL85_9g6TgRHqzd_Lh/category_emoji/emoji_19.png"},"74934fbf-f255-4826-8bf1-8b67b6de4465":{"name":"lost","sourceUrl":"assets/api/v1/animation-library/gamelab/qPyKRl45sAmb0toKrmso5hOxZmrDInhb/category_emoji/emoji_17.png","frameSize":{"x":300,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"qPyKRl45sAmb0toKrmso5hOxZmrDInhb","categories":["emoji"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qPyKRl45sAmb0toKrmso5hOxZmrDInhb/category_emoji/emoji_17.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

  // play till the end and see the last result please.
var gameState="serve";

var playerMallet;

var goal1=createSprite(200,18,100,20);
goal1.shapeColor=("yellow");

var goal2=createSprite(200,382,100,20);
goal2.shapeColor=("yellow");

var boundary1 = createSprite(200,0,400,10);
boundary1.shapeColor = "white";

var boundary2 = createSprite(200,400,400,10);
boundary2.shapeColor = "white";

var boundary3 = createSprite(0,200,10,400);
boundary3.shapeColor = "white";

var boundary4 = createSprite(400,200,10,400);
boundary4.shapeColor = "white";

var striker = createSprite(200,200,20,20);
striker.shapeColor = "white";

var playerMallet = createSprite(200,50,50,10);
playerMallet.shapeColor = "black";

var computerMallet = createSprite(200,350,50,10);
computerMallet.shapeColor = "black";

var cscore=0;
var pscore=0;



function draw() {
background("green");
drawSprites();
 computerMallet.x = striker.x;
for (var i = 0; i < 400; i=i+20) {
    line(i,200,i+10,200);}
    
textSize(22);
  fill("maroon");
  text(cscore,25,225);
  
  textSize(22);
  fill("maroon");
  text(pscore,25,185);
  
  if (striker.isTouching(goal1)) {
    cscore=cscore+1;
    striker.x=200;
   striker.y=200;
   striker.velocityY=0;
   striker.velocityX=0;
} 
if (striker.isTouching(goal2)) {
    pscore=pscore+1;
    striker.x=200;
    striker.y=200;
    striker.velocityY=0;
    striker.velocityX=0;
}
  

  createEdgeSprites();
  striker.bounceOff(edges);
  striker.bounceOff(playerMallet);
  striker.bounceOff(computerMallet);
  playerMallet.bounceOff(edges);
  computerMallet.bounceOff(edges);
if (gameState=="serve"){ fill("blue");
 textSize(25); 
text("Press Space to Srtike",80,200);
}
 if(keyDown("space")) {
  striker.velocityX = 10;
  striker.velocityY = 5;
  gameState="play";
}
 
  
if(gameState=="play"){

if(keyDown("left")){
    playerMallet.x = playerMallet.x-10;
    
  }
  
  if(keyDown("right")){
    playerMallet.x = playerMallet.x+10;
    
  }
  
  if(keyDown("up")){
   if(playerMallet.y>25)
   {
    playerMallet.y = playerMallet.y- 10;
   }
  }
  if(keyDown("down")){
    if(playerMallet.y<120)
   {
    playerMallet.y = playerMallet.y+10;
   }
}
}
if(pscore==5 || cscore==5) { 
  gameState="end";if (gameState==="end"){
  {fill("maroon"); 
  textSize(30);
  text("Game Over!",130,150);
  }}
 if (pscore==5){
  fill("maroon");
  textSize(30);
  text("You won!",150,260); 
  var happy = createSprite(200, 200);
 happy.setAnimation("happy");
happy. scale=0.2;
 } 
  if (cscore==5){
  fill("maroon");
  textSize(30);
  text("You Lost!",150,260); 
  var sad  = createSprite(200, 200);
 sad.setAnimation("lost");
    sad.scale=0.2;
  }}
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
