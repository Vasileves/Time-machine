/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/prototype_7.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/prototype_7.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/prototype_7.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const colors = ['#F26DF8', '#FF5C00', '#FFE500', '#00FF29', '#00FFF0', '#4B3BFF'];
const particlesQuantity = [6, 7, 8, 9];
const positionCell = [[0, 0], [200, 0], [400, 0], [600, 0], [0, 200], [200, 200], [400, 200], [600, 200], [0, 400], [200, 400], [400, 400], [600, 400], [0, 600], [200, 600], [400, 600], [600, 600]]; // [0, 5,3 ]

const occupated = [];
const circleTypes = [['ch1', 210, 220, 2, 4], ['ch2', 210, 220, 2, 4], ['ch3', 210, 220, 2, 4], ['ch4', 210, 220, 2, 4], ['ch5', 210, 220, 2, 4], ['ch6', 210, 220, 2, 4], ['ch7', 210, 220, 2, 4], ['ch8', 210, 220, 2, 4], ['ch9', 210, 220, 2, 4], ['ch10', 210, 220, 2, 4], ['ch11', 210, 220, 2, 4], ['ch12', 210, 220, 2, 4], ['ch13', 210, 220, 2, 4], ['ch14', 210, 220, 2, 4], ['ch15', 210, 220, 2, 4], ['ch16', 210, 220, 2, 4], ['ch17', 210, 220, 2, 4], ['ch18', 210, 220, 2, 4], ['ch19', 210, 220, 2, 4], ['ch20', 210, 220, 2, 4], ['ch21', 210, 220, 2, 4], ['ch22', 210, 220, 2, 4], ['ch23', 210, 220, 2, 4], ['ch24', 210, 220, 2, 4], ['ch25', 210, 220, 2, 4], ['ch26', 210, 220, 2, 4], ['ch27', 210, 220, 2, 4], ['ch28', 210, 220, 2, 4], ['ch29', 210, 220, 2, 4], ['ch30', 210, 220, 2, 4], ['ch31', 210, 220, 2, 4], ['ch32', 210, 220, 2, 4], ['ch33', 210, 220, 2, 4], ['ch34', 210, 220, 2, 4], ['ch35', 210, 220, 2, 4], ['ch36', 210, 220, 2, 4]];

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function sample(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function changeSVGColor(color) {
  var svg = document.getElementByClassName("circle").contentDocument;
  var elements = svg.getElementsByClassName("circle");

  for (var i = 0; i < elements.length; i++) elements[i].style.fill = color;

  console.log('changed');
}

function createCircle(frame) {
  const circleElement = document.createElement('div');
  const circleType = sample(circleTypes);
  circleElement.classList.add('circle');
  const cell = Math.floor(getRandomArbitrary(0, 15));

  while (occupated.includes(cell)) {
    cell = Math.floor(getRandomArbitrary(0, 15));
  }

  occupated.push(cell);
  const top = positionCell[cell][1]; //+ getRandomArbitrary(0, 100)

  const left = positionCell[cell][0]; //+ getRandomArbitrary(0, 100)

  const size = getRandomArbitrary(circleType[1], circleType[2]);
  circleElement.style.top = [top, 'px'].join('');
  circleElement.style.left = [left, 'px'].join('');
  circleElement.style.width = [size, 'px'].join('');
  circleElement.style.height = [size, 'px'].join('');
  circleElement.style.zIndex = Math.floor(getRandomArbitrary(circleType[3], circleType[4]));
  circleElement.classList.add(circleType[0]);
  frame.appendChild(circleElement);
  createEyeBrows(circleElement);
  createEyes(circleElement);
  createMouth(circleElement);
  createHat(circleElement);
  createNose(circleElement);
  createItem(circleElement); // circleElement.style.transform = `rotate(${getRandomArbitrary(10, 350)}deg)`
}

function randomChance(crit) {
  const number = Math.floor(Math.random() * 100) + 1;

  switch (true) {
    case number < crit:
      return 1;

    default:
      return 0;
  }
}

function randomChance2(crit, crit2) {
  const number = Math.floor(Math.random() * 100) + 1;

  switch (true) {
    case number < crit:
      return 1;

    case number < crit2:
      return 2;

    default:
      return 0;
  }
}

function createHat(circleElement) {
  if (randomChance(20) == 1) {
    const hat = document.createElement('img');
    hat.setAttribute('src', `/assets/hat${Math.floor(getRandomArbitrary(1, 3))}.svg`);
    hat.classList.add('hat');
    circleElement.appendChild(hat);
  }
}

function createEyeBrows(circleElement) {
  const eyeBrows = document.createElement('img');
  eyeBrows.setAttribute('src', `/assets/eyebrows${Math.floor(getRandomArbitrary(1, 3))}.svg`);
  eyeBrows.classList.add('eyeBrows');
  circleElement.appendChild(eyeBrows);
}

function createEyes(circleElement) {
  const eyes = document.createElement('img');
  eyes.setAttribute('src', `/assets/eye${Math.floor(getRandomArbitrary(1, 3))}.svg`);
  eyes.classList.add('eyes');
  circleElement.appendChild(eyes);
}

function createNose(circleElement) {
  if (randomChance(15) == 1) {
    const nose = document.createElement('img');
    nose.setAttribute('src', `/assets/nose${Math.floor(getRandomArbitrary(1, 3))}.svg`);
    nose.classList.add('nose');
    circleElement.appendChild(nose);
  }
}

function createMouth(circleElement) {
  const mouth = document.createElement('img');
  mouth.setAttribute('src', `/assets/mouth${Math.floor(getRandomArbitrary(1, 3))}.svg`);
  mouth.classList.add('mouth');
  circleElement.appendChild(mouth);
}

function createItem(circleElement) {
  let chance = randomChance2(10, 20);

  if (chance == 1) {
    const item = document.createElement('img');
    item.setAttribute('src', `/assets/itemLeft${Math.floor(getRandomArbitrary(1, 3))}.svg`);
    item.classList.add('itemLeft');
    circleElement.appendChild(item);
  } else if (chance == 2) {
    const item = document.createElement('img');
    item.setAttribute('src', `/assets/itemRight${Math.floor(getRandomArbitrary(1, 3))}.svg`);
    item.classList.add('itemRight');
    circleElement.appendChild(item);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementsByClassName('prototype_7')[0];
  const frame = document.createElement('div');
  frame.classList.add('frame');
  container.appendChild(frame);

  for (var i = 0; i < sample(particlesQuantity); i++) {
    createCircle(frame);
  }
});

/***/ })

/******/ });
//# sourceMappingURL=prototype_7-183913d6cee6ffd8d6e7.js.map