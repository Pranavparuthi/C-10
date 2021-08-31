var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
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


var playerPaddle= createSprite(390,200,10,100);
    playerPaddle.shapeColor="blue";
    var computerPaddle= createSprite(10,200,10,100);
    computerPaddle.shapeColor="red";
    var ball= createSprite(350 , 350 , 30 , 30);
    ball.shapeColor="yellow";
ball.velocityX=-3;
ball.velocityY=-4;
var ball1 = createSprite(0 , 0 , 30 , 30);
ball1.shapeColor="orange";
ball1.velocityX=+5;
ball1.velocityY=+6;
var ball2 = createSprite(0 ,400 , 30 , 30);
ball2.shapeColor="pink";
ball2.velocityX=+7;
ball2.velocityY=-8;
var ball3 = createSprite(400 , 400 , 30 , 30);
ball3.shapeColor="black";
ball3.velocityX=-9;
ball3.velocityY=+1;
var ball4 = createSprite(150 , 250 , 30 , 30 );
ball4.shapeColor="red";
ball4.velocityX=+3;
ball4.velocityY=-2;
var ball5 = createSprite( 300 , 200 , 30 , 30 );
ball5.shapeColor="blue";
ball5.velocityX=+7;
ball5.velocityY=-6;



 function draw() {
 background("GRAY")
 
 
 createEdgeSprites();
 ball.bounceOff(edges);
 ball1.bounceOff(edges);
 ball2.bounceOff(edges);
 ball3.bounceOff(edges);
 ball4.bounceOff(edges);
 ball5.bounceOff(edges);
 ball.bounce(ball1);
 ball.bounce(ball2);
 ball.bounce(ball3);
 ball.bounce(ball4);
 ball.bounce(ball5);
  drawSprites();
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
