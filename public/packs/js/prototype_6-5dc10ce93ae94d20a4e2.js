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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/prototype_6.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/prototype_6.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/prototype_6.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var particlesQuantity = [26];
var circleTypes = [['ch1', 210, 220, 0, 0], ['ch2', 210, 220, 0, 0], ['ch3', 210, 220, 0, 0], ['ch4', 210, 220, 0, 0], ['ch5', 210, 220, 0, 0], ['ch6', 210, 220, 0, 0], ['ch7', 210, 220, 0, 0], ['ch8', 210, 220, 0, 0], ['ch9', 210, 220, 0, 0], ['ch10', 210, 220, 0, 0], ['ch11', 210, 220, 0, 0], ['ch12', 210, 220, 0, 0], ['ch13', 210, 220, 0, 0], ['ch14', 210, 220, 0, 0], ['ch15', 210, 220, 0, 0], ['ch16', 210, 220, 0, 0], ['ch17', 210, 220, 0, 0], ['ch18', 210, 220, 0, 0], ['ch19', 210, 220, 0, 0], ['ch20', 210, 220, 0, 0], ['ch21', 210, 220, 0, 0], ['ch22', 210, 220, 0, 0], ['ch23', 210, 220, 0, 0], ['ch24', 210, 220, 0, 0], ['ch25', 210, 220, 0, 0], ['ch26', 210, 220, 0, 0], ['ch27', 210, 220, 0, 0], ['ch28', 210, 220, 0, 0], ['ch29', 210, 220, 0, 0], ['ch30', 210, 220, 0, 0], ['ch31', 210, 220, 0, 0], ['ch32', 210, 220, 0, 0], ['ch33', 210, 220, 0, 0], ['ch34', 210, 220, 0, 0], ['ch35', 210, 220, 0, 0], ['ch36', 210, 220, 0, 0], ['ch37', 210, 220, 0, 0]];

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function sample(array) {
  // console.log("Test");
  return array[Math.floor(Math.random() * array.length)];
}

function createCircle(frame) {
  var circleElement = document.createElement('div');
  var circleType = sample(circleTypes);
  circleElement.classList.add('circle');
  var top = getRandomArbitrary(0, 100);
  var left = getRandomArbitrary(0, 10);
  var size = getRandomArbitrary(circleType[1], circleType[2]);
  circleElement.style.top = [top, 'px'].join('');
  circleElement.style.left = [left, 'px'].join('');
  circleElement.style.width = [size, 'px'].join('');
  circleElement.style.height = [size, 'px'].join('');
  circleElement.style.zIndex = Math.floor(getRandomArbitrary(circleType[3], circleType[0]));
  circleElement.classList.add(circleType[0]);
  console.log(circleElement);
  frame.appendChild(circleElement);
}

document.addEventListener('DOMContentLoaded', function () {
  var container = document.getElementsByClassName('prototype_6')[0];
  var frame = document.createElement('div');
  frame.classList.add('frame');
  container.appendChild(frame);

  for (var i = 0; i < 37; i++) {
    createCircle(frame, i);
  }
});

/***/ })

/******/ });
//# sourceMappingURL=prototype_6-5dc10ce93ae94d20a4e2.js.map