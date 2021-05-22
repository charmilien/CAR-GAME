var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["bde4b3b5-9170-4a17-a07f-46879cf1ae7b","efc00418-8375-49d2-bfbe-7a698df00f0f"],"propsByKey":{"bde4b3b5-9170-4a17-a07f-46879cf1ae7b":{"name":"car2","sourceUrl":"assets/api/v1/animation-library/gamelab/2Wst0crBX002NuqQdekKOiKVP38BYZuX/category_vehicles/car_green.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"2Wst0crBX002NuqQdekKOiKVP38BYZuX","loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/2Wst0crBX002NuqQdekKOiKVP38BYZuX/category_vehicles/car_green.png"},"efc00418-8375-49d2-bfbe-7a698df00f0f":{"name":"car1","sourceUrl":"assets/api/v1/animation-library/gamelab/oedEYhPfzPWR_4kkfuEfPPuRKABKTEQw/category_vehicles/car_black.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"oedEYhPfzPWR_4kkfuEfPPuRKABKTEQw","loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/oedEYhPfzPWR_4kkfuEfPPuRKABKTEQw/category_vehicles/car_black.png"}}};
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

var car1 = createSprite(150,380,20,20);
car1.setAnimation("car1");
car1.scale = 0.25;
var car2 = createSprite(250,380,20,20);
car2.setAnimation("car2");
car2.scale = 0.25;
var wall1 = createSprite(75,300,125,10);
var wall2 = createSprite(350,230,125,10);
var wall3 = createSprite(75,180,125,10);
var wall4 = createSprite(350,130,125,10);
var wall5 = createSprite(75,70,125,10);
var finish = createSprite(200,25,200,30);

  wall1.velocityX = 4;
  wall2.velocityX = 4;
  wall3.velocityX = 4;
  wall4.velocityX = 4;
  wall5.velocityX = 4;

function draw() {
  background("green");
  rect(100, 0, 200, 400);
  
  for (var i = 0; i < 400; i=i+20) {
    line(200,i,200,i+10);
  }
  wall1.shapeColor = "WHITE";
  wall2.shapeColor = "WHITE";
  wall3.shapeColor = "WHITE";
  wall4.shapeColor = "WHITE";
  wall5.shapeColor = "WHITE";
  finish.shapeColor = "#89c181";
  
  if (keyDown(UP_ARROW)) {
    car2.y = car2.y -4;
  }
  if (keyDown(DOWN_ARROW)) {
    car2.y = car2.y +4;
  }
  
  if (keyDown("w")) {
    car1.y = car1.y -4;
  }
  if (keyDown("s")) {
    car1.y = car1.y +4;
  }
  if (car1.isTouching(finish)){
    text("PLAYER 1 WON THE RACE",20,200);
    
  }
  fill("#4aff00");
    textSize(25);
    stroke("yellow");
    
  if (car2.isTouching(finish)){
    text("PLAYER 2 WON THE RACE",20,200);
    
  }
  fill("yellow");
    textSize(25);
    stroke("blue");
  
  if (car1.isTouching(wall1)
  ||car1.isTouching(wall2)
  ||car1.isTouching(wall3)
  ||car1.isTouching(wall4)
  ||car1.isTouching(wall5))
  {
    car1.x = 150;
    car1.y = 380;
  }
  
  if (car2.isTouching(wall1)
  ||car2.isTouching(wall2)
  ||car2.isTouching(wall3)
  ||car2.isTouching(wall4)
  ||car2.isTouching(wall5))
  {
    car2.x = 250;
    car2.y = 380;
  }
  createEdgeSprites();
  
  wall1.bounceOff(edges);
  wall2.bounceOff(edges);
  wall3.bounceOff(edges);
  wall4.bounceOff(edges);
  wall5.bounceOff(edges);
  
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
