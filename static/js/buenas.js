(function (){
var manuelesConfig = {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "image",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "static/img/trueba.png",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 51.29459670609772,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
};
var estrellasConfig = {
  "particles": {
    "number": {
      "value": 355,
      "density": {
        "enable": true,
        "value_area": 789.1476416322727
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.88,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 0.2,
        "opacity_min": 0.5,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 0,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 0.3,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 83.91608391608392,
        "size": 1,
        "duration": 3,
        "opacity": 1,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
};
  function getRandomQuote() {
    var quotes = [
      "Tenes un min?",
      "Como te estan tratando?",
      "No me gusta el home office",
      "Porque yo veía la matrix..."
    ];

    var randomElemIdx = Math.floor(Math.random() * quotes.length);
    return quotes[randomElemIdx];
  }

  var particleElId = 'particles-js';

  var particleEl = document.getElementById(particleElId);

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
  }

  function randomN(n,amt) {
    var rnd = Math.round(Math.random() * amt);
    if (rnd == n) {
      return randomN(rnd,amt);
    }
    return rnd;
  }
  function getPJSInstance() {
    return pJSDom.find(pjs => pjs.pJS.canvas.el.parentElement.id === particleElId).pJS;
  }

  
  var mainBuenasNum = 0;
  function playBuenas () {
    // console.log("current particle amount:", buenasPJsInstance.particles.array.length);
    var audioSrc = '/tenesunmin/static/snd/buenas_%d.mp3';
    var buenasAmt = 10;
    var buenasNum = randomN(mainBuenasNum,buenasAmt);
    mainBuenasNum = buenasNum;

    if (buenasNum == 10)
      buenas_score++;

    var currentBuenas =
    audioSrc.replace('%d', buenasNum);

    var a = new Audio();
    a.src = currentBuenas;
    a.play();
    navigator.vibrate(100);
  }
  particlesJS("estrellas", estrellasConfig);
  particlesJS(particleElId, manuelesConfig);
  var buenasPJsInstance = getPJSInstance()
  document.body.addEventListener('touchstart', playBuenas);
  document.body.addEventListener('click', playBuenas);

  function updateQuote() {
    var quoteElem = document.querySelector('#frase');
    var quoteText = getRandomQuote();

    setTimeout(function () {
      quoteElem.textContent = quoteText
      requestAnimationFrame(updateQuote);
    }, 30000);
  }
  updateQuote();
  updateScore();
})();