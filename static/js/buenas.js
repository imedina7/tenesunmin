(function (){
  
  function getRandomQuote() {
    var quotes = ["Tenes un min?", "Como te estan tratando?", "No me gusta el home office", "Porque yo veía la matrix..."];
    var randomElemIdx = Math.floor(Math.random() * quotes.length);
    return quotes[randomElemIdx];
  }

  var particleElId = 'particles-js';

var particleEl = document.getElementById(particleElId);
var htmlEl = document.getElementsByTagName("html")[0];

var viewportWidth = window.innerWidth;
var viewportHeight = window.innerHeight;
var buenas_score = getStoredBuenasScore();
var video = document.querySelector('.bg-video');

function getStoredBuenasScore(){
  var score = 0;
  if (window.localStorage.getItem('score') == null)
    window.localStorage.setItem('score',score);
  else {
    score = window.localStorage.getItem('score');
  }
  return score;
}
function updateScore(){
  var scoreCountEl = document.getElementById('space-buenas');
  scoreCountEl.innerHTML = buenas_score;
  window.localStorage.setItem('score',buenas_score);
  console.log("Score has been updated");
}
function randomN(n,amt) {
  var rnd = Math.round(Math.random() * amt);
  if (rnd == n) {
    return randomN(rnd,amt);
  }
  return rnd;
}
var mainBuenasNum = 0;
function playBuenas () {
  if(!video.isPlaying) video.play();
  var audioSrc = '/static/snd/buenas_%d.mp3';
  var buenasAmt = 10;
  var buenasNum = randomN(mainBuenasNum,buenasAmt);
  mainBuenasNum = buenasNum;
  console.log("mainBuenasNum: "+mainBuenasNum+", buenasNum: "+buenasNum);
  if (buenasNum == 10)
    buenas_score++;
  var currentBuenas =
  audioSrc.replace('%d', buenasNum);

  var a = new Audio();
  a.src = currentBuenas;
  a.play().then(function () {
    console.log("playing buenas: "+ currentBuenas);
  }).catch(function () {
    console.error("Couldn't play buenass!");
  });
  navigator.vibrate(100);
}
particlesJS.load("estrellas", "static/js/estrellas.json",function(){
  console.log('Estrellas loaded');
});
particlesJS.load(particleElId, 'static/js/manueles.json', function() {
  console.log('Manueles loaded');
  particleEl.addEventListener('click',playBuenas);
  particleEl.addEventListener('click',updateScore);
});

function updateQuote() {
  var quoteElem = document.querySelector('#frase');

  var quoteText = getRandomQuote();
  setTimeout(function () {
    quoteElem.textContent = quoteText
    requestAnimationFrame(updateQuote);
  }, 20000);
}
updateQuote();
updateScore();
})();