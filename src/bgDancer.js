var bgDancer = function(top, left, timeBetweenSteps){

  makeDancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  //this.timeBetweenSteps = timeBetweenSteps;
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

bgDancer.prototype = Object.create(makeDancer.prototype);
bgDancer.prototype.constructor = bgDancer;

bgDancer.prototype.step = function(){
  setTimeout(function(){
    $('.floor').velocity({background: "green"});
  }, 2000);
};
