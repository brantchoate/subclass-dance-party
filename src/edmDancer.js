var edmDancer = function(top, left, timeBetweenSteps){

  makeDancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  //this.timeBetweenSteps = timeBetweenSteps;
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

edmDancer.prototype = Object.create(makeDancer.prototype);
edmDancer.prototype.constructor = edmDancer;

edmDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.


  var scaleUp = getRandomInt(-20, -1);
  var easingUp = getRandomInt(480, 500);
  var scaleDown = getRandomInt(-1, 0);
  var easingDown = getRandomInt(200, 220);
  this.$node.velocity({scaleY: scaleUp}, easingUp)
  .velocity({scaleY: scaleDown}, easingDown);
};
