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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/ejnrkf/prototype_4.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/ejnrkf/prototype_4.js":
/*!****************************************************!*\
  !*** ./app/javascript/packs/ejnrkf/prototype_4.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module '../prototypes/prototype_4/utilities'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module '../prototypes/prototype_4/models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module '../prototypes/prototype_4/store'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());




function createLargeWhiteCircle() {
  return new Promise(function (resolve, reject) {
    console.log('createLargeWhiteCircle call');
    var circles = !(function webpackMissingModule() { var e = new Error("Cannot find module '../prototypes/prototype_4/store'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    var settings;

    if (circles.length) {
      var firstCircleVSide = circles[0]['types']['vSide'];
      var firstCircleHSide = circles[0]['types']['hSide'];
      var firstCircleSize = circles[0]['types']['size'];
      var vSide = firstCircleVSide == 'top' ? 'bottom' : 'top';
      var hSide = firstCircleHSide == 'left' ? 'right' : 'left';
      var size = firstCircleSize == 'small' ? 'large' : 'small';
      settings = createCircle(!(function webpackMissingModule() { var e = new Error("Cannot find module '../prototypes/prototype_4/models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).className, vSide, hSide, size, 1);
    } else {
      var _vSide = !(function webpackMissingModule() { var e = new Error("Cannot find module '../prototypes/prototype_4/utilities'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object.keys(!(function webpackMissingModule() { var e = new Error("Cannot find module '../prototypes/prototype_4/models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())['sides']['vSides']));

      var _hSide = !(function webpackMissingModule() { var e = new Error("Cannot find module '../prototypes/prototype_4/utilities'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object.keys(!(function webpackMissingModule() { var e = new Error("Cannot find module '../prototypes/prototype_4/models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())['sides']['hSides']));

      var _size = !(function webpackMissingModule() { var e = new Error("Cannot find module '../prototypes/prototype_4/utilities'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object.keys(!(function webpackMissingModule() { var e = new Error("Cannot find module '../prototypes/prototype_4/models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())['sizes']));

      settings = createCircle(!(function webpackMissingModule() { var e = new Error("Cannot find module '../prototypes/prototype_4/models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).className, _vSide, _hSide, _size, 1);
    }

    circles.push(settings);
    !(function webpackMissingModule() { var e = new Error("Cannot find module '../prototypes/prototype_4/store'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(circles);
    resolve();
  });
}

function createCircle(className, vSide, hSide, size, zIndex) {
  var frame = !(function webpackMissingModule() { var e = new Error("Cannot find module '../prototypes/prototype_4/utilities'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
  var largeWhiteCircleStore = !(function webpackMissingModule() { var e = new Error("Cannot find module '../prototypes/prototype_4/store'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
  var circleElement = document.createElement('div');
  var circleType = !(function webpackMissingModule() { var e = new Error("Cannot find module '../prototypes/prototype_4/models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())['largeCircleWhite'];
  circleElement.classList.add('circle');
  var vSideSettings = !(function webpackMissingModule() { var e = new Error("Cannot find module '../prototypes/prototype_4/models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())['sides'][vSide];
  var hSideSettings = !(function webpackMissingModule() { var e = new Error("Cannot find module '../prototypes/prototype_4/models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())['sides'][hSide];
  var sizeSettings = !(function webpackMissingModule() { var e = new Error("Cannot find module '../prototypes/prototype_4/models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())['sizes'][size];
  var diameterPercent = !(function webpackMissingModule() { var e = new Error("Cannot find module '../prototypes/prototype_4/utilities'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(sizeSettings['from'], sizeSettings['to']);
  var diameter = frame.getBoundingClientRect().width / 100 * diameterPercent;
  var shiftY = generateShiftYFromSide(vSide, diameter, circleElement);
  var shiftX = generateShiftXFromSide(hSide, diameter, circleElement);
  var settings = {
    types: {
      vSide: vSide,
      hSide: hSide,
      size: size
    },
    shiftY: shiftY,
    shiftX: shiftX,
    diameter: diameter
  };
  circleElement.style.width = [diameter, 'px'].join('');
  circleElement.style.height = [diameter, 'px'].join('');
  circleElement.style.zIndex = zIndex;
  circleElement.classList.add(className);
  frame.appendChild(circleElement);
  return settings;
}

function generateShiftYFromSide(side, diameter, circleElement) {
  var sideSettings = !(function webpackMissingModule() { var e = new Error("Cannot find module '../prototypes/prototype_4/models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())['sides']['vSides'][side];
  var shiftPercent = !(function webpackMissingModule() { var e = new Error("Cannot find module '../prototypes/prototype_4/utilities'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(sideSettings['from'], sideSettings['to']);
  var shift = diameter / 100 * shiftPercent; // console.log(circleElement, side, shiftPercent, shift)

  if (side === 'top') {
    circleElement.style.top = ['-', shift, 'px'].join('');
  } else if (side === 'bottom') {
    circleElement.style.bottom = ['-', shift, 'px'].join('');
  }

  return shift;
}

function generateShiftXFromSide(side, diameter, circleElement) {
  var sideSettings = !(function webpackMissingModule() { var e = new Error("Cannot find module '../prototypes/prototype_4/models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())['sides']['hSides'][side];
  var shiftPercent = !(function webpackMissingModule() { var e = new Error("Cannot find module '../prototypes/prototype_4/utilities'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(sideSettings['from'], sideSettings['to']);
  var shift = diameter / 100 * shiftPercent; // console.log(circleElement, side, shiftPercent, shift)

  if (side === 'left') {
    circleElement.style.left = ['-', shift, 'px'].join('');
  } else if (side === 'right') {
    circleElement.style.right = ['-', shift, 'px'].join('');
  }

  return shift;
}

function generateStory() {
  // for (var i = 0; i < sample(particlesQuantity); i++) {
  //   createCircle(frame)
  // }
  createLargeWhiteCircle().then(createLargeWhiteCircle);
}

document.addEventListener('DOMContentLoaded', function () {
  var container = document.getElementsByClassName('prototype_4')[0];
  var frame = document.createElement('div');
  frame.classList.add('frame');
  container.appendChild(frame);
  generateStory();
});

/***/ })

/******/ });
//# sourceMappingURL=prototype_4-0bd761303210273108be.js.map