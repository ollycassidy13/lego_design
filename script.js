var minifigure = document.querySelector('.minifigure');
var faces = document.querySelector('.faces');
var upperBody = document.querySelector('.upper-body');
var lowerBody = document.querySelector('.lower-body');
var explode = document.querySelector('.explode');
var randomize = document.querySelector('.randomize');
var headwearRangeInput = document.querySelector('.headwear-range');
var expressionRangeInput = document.querySelector('.expression-range');
var colorRangeInput = document.querySelectorAll('.color-range');
var upperHue = document.getElementById('upper-hue');
var upperSaturation = document.getElementById('upper-saturation');
var upperLightness = document.getElementById('upper-lightness');
var lowerHue = document.getElementById('lower-hue');
var lowerSaturation = document.getElementById('lower-saturation');
var lowerLightness = document.getElementById('lower-lightness');
var hatHue = document.getElementById('hat-hue');
var hatSaturation = document.getElementById('hat-saturation');
var hatLightness = document.getElementById('hat-lightness');
var hatBeforeHue = document.getElementById('hat-before-hue');
var hatBeforeSaturation = document.getElementById('hat-before-saturation');
var hatBeforeLightness = document.getElementById('hat-before-lightness');

explode.addEventListener('click', explodeMinifigure);
randomize.addEventListener('click', randomizeInputs);
expressionRangeInput.addEventListener('input', setExpression);
headwearRangeInput.addEventListener('input', setHeadwear);

for (var i = 0; i < colorRangeInput.length; i++) {
  colorRangeInput[i].addEventListener('input', setColors);
}

function getRandomNum(min, max) {
  return Math.random() * (max - min) + min;
}

function explodeMinifigure() {
  minifigure.classList.toggle('explode');

  if (minifigure.classList.contains('explode')) {
    explode.innerHTML = 'Rebuild';
  } else {
    explode.innerHTML = 'Explode';
  }
}

function randomizeInputs() {
  var randomExpression = getRandomNum(0, 5);
  var randomUpperHue = getRandomNum(0, 360);
  var randomUpperSaturation = getRandomNum(0, 100);
  var randomUpperLightness = getRandomNum(0, 90);
  var randomLowerHue = getRandomNum(0, 360);
  var randomLowerSaturation = getRandomNum(0, 100);
  var randomLowerLightness = getRandomNum(0, 90);
  var randomHeadwear = getRandomNum(0, 2) * 100;
  
  expressionRangeInput.value = randomExpression * 100;
  upperHue.value = randomUpperHue;
  upperSaturation.value = randomUpperSaturation;
  upperLightness.value = randomUpperLightness;
  lowerHue.value = randomLowerHue;
  lowerSaturation.value = randomLowerSaturation;
  lowerLightness.value = randomLowerLightness;
  headwearRangeInput.value = randomHeadwear;
  
  setExpression();
  setColors();
  setHeadwear();
  randomizeHatColors();
}

function setExpression() {
  var expressionVal = parseInt(expressionRangeInput.value);
  faces.style.transform = 'translateX(-' + expressionVal + '%)';
}

function setColors() {
  var upperHueVal = parseInt(upperHue.value);
  var upperSaturationVal = parseInt(upperSaturation.value);
  var upperLightnessVal = parseInt(upperLightness.value);
  var lowerHueVal = parseInt(lowerHue.value);
  var lowerSaturationVal = parseInt(lowerSaturation.value);
  var lowerLightnessVal = parseInt(lowerLightness.value);
  
  upperBody.style.color = 'hsl(' + upperHueVal + ',' + upperSaturationVal + '%,' + upperLightnessVal + '%)';
  lowerBody.style.color = 'hsl(' + lowerHueVal + ',' + lowerSaturationVal + '%,' + lowerLightnessVal + '%)';
  
  if (document.querySelector('.hat').style.display === 'block') {
    setHatColors();
  }
}

function setHeadwear() {
  var headwearVal = parseInt(headwearRangeInput.value);
  var hat = document.querySelector('.hat');
  var hair = document.querySelector('.hair');
  var hatColorControls = document.querySelector('.hat-color-controls');
  
  if (headwearVal === 0) {
    hat.style.display = 'none';
    hair.style.display = 'none';
    hatColorControls.style.display = 'none';
  } else if (headwearVal === 100) {
    hat.style.display = 'block';
    hair.style.display = 'none';
    hatColorControls.style.display = 'block';
  } else if (headwearVal === 200) {
    hat.style.display = 'none';
    hair.style.display = 'block';
    hatColorControls.style.display = 'none';
  }
}

function randomizeHatColors() {
  var randomHatHue = getRandomNum(0, 360);
  var randomHatSaturation = getRandomNum(50, 100);
  var randomHatLightness = getRandomNum(30, 70);
  var randomHatBeforeHue = getRandomNum(0, 360);
  var randomHatBeforeSaturation = getRandomNum(50, 100);
  var randomHatBeforeLightness = getRandomNum(30, 70);
  
  hatHue.value = randomHatHue;
  hatSaturation.value = randomHatSaturation;
  hatLightness.value = randomHatLightness;
  hatBeforeHue.value = randomHatBeforeHue;
  hatBeforeSaturation.value = randomHatBeforeSaturation;
  hatBeforeLightness.value = randomHatBeforeLightness;
  
  setHatColors();
}

function setHatColors() {
  var hat = document.querySelector('.hat');
  var hatHueVal = parseInt(hatHue.value);
  var hatSaturationVal = parseInt(hatSaturation.value);
  var hatLightnessVal = parseInt(hatLightness.value);
  var hatBeforeHueVal = parseInt(hatBeforeHue.value);
  var hatBeforeSaturationVal = parseInt(hatBeforeSaturation.value);
  var hatBeforeLightnessVal = parseInt(hatBeforeLightness.value);
  
  var mainColor = 'hsl(' + hatHueVal + ',' + hatSaturationVal + '%,' + hatLightnessVal + '%)';
  var beforeColor = 'hsl(' + hatBeforeHueVal + ',' + hatBeforeSaturationVal + '%,' + hatBeforeLightnessVal + '%)';
  
  hat.style.setProperty('--hat-main-color', mainColor);
  hat.style.setProperty('--hat-before-color', beforeColor);
}
