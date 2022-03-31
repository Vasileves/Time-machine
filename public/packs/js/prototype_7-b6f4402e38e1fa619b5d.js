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
const circleTypes = [['ch1', 210, 220, 2, 4], ['ch2', 210, 220, 2, 4], ['ch3', 210, 220, 2, 4], ['ch4', 210, 220, 2, 4], ['ch5', 210, 220, 2, 4], ['ch6', 210, 220, 2, 4], ['ch7', 210, 220, 2, 4], ['ch8', 210, 220, 2, 4], ['ch9', 210, 220, 2, 4], ['ch10', 210, 220, 2, 4], ['ch11', 210, 220, 2, 4], ['ch12', 210, 220, 2, 4], ['ch13', 210, 220, 2, 4], ['ch14', 210, 220, 2, 4], ['ch15', 210, 220, 2, 4], ['ch16', 210, 220, 2, 4], ['ch17', 210, 220, 2, 4], ['ch18', 210, 220, 2, 4], ['ch19', 210, 220, 2, 4], ['ch20', 210, 220, 2, 4], ['ch21', 210, 220, 2, 4], ['ch22', 210, 220, 2, 4], ['ch23', 210, 220, 2, 4], ['ch24', 210, 220, 2, 4], ['ch25', 210, 220, 2, 4], ['ch26', 210, 220, 2, 4], ['ch27', 210, 220, 2, 4], ['ch28', 210, 220, 2, 4], ['ch29', 210, 220, 2, 4], ['ch30', 210, 220, 2, 4], ['ch31', 210, 220, 2, 4], ['ch32', 210, 220, 2, 4], ['ch33', 210, 220, 2, 4], ['ch34', 210, 220, 2, 4], ['ch35', 210, 220, 2, 4], ['ch36', 210, 220, 2, 4], ['ch37', 210, 220, 2, 4]];
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementsByClassName('prototype_6')[0];
  const frame = document.createElement('div');
  frame.classList.add('frame');
  container.appendChild(frame);
  window.addEventListener('load', function () {
    var targetCollection = document.getElementsByClassName("circle");
    var template = document.getElementsByClassName("circle")[0];
    var targetWidth = template.offsetWidth;
    var targetHeight = template.offsetHeight;
    var x_pixels = window.innerWidth - targetWidth;
    var y_pixels = window.innerHeight - targetHeight;
    var x_midScreen = window.innerWidth / 2;
    var y_midScreen = window.innerHeight / 2;

    function spawnTargets(numberOfSpawns) {
      var targets = [];
      var count = 0; // infinite recursion protection

      for (var i = 0; i < numberOfSpawns; i++) {
        do {
          do {
            var x = Math.floor(Math.random() * x_pixels);
            var y = Math.floor(Math.random() * y_pixels);

            if (count++ > 200) {
              console.log('give up');
              return;
            }
          } while (x >= x_midScreen - 450 && x <= x_midScreen + 300 && (y >= y_midScreen - 350 || y <= y_midScreen + 200));

          for (var j = 0; j < i; j++) {
            if (x >= targets[j].x - targetWidth && x <= targets[j].x + targetWidth && y >= targets[j].y - targetHeight && y <= targets[j].y + targetHeight) break; // not ok!
          }
        } while (j < i);

        targets.push({
          x,
          y
        });
        img = document.createElement('img');
        img.src = template.src;
        img.setAttribute('width', targetWidth + 'px');
        img.setAttribute('height', targetHeight + 'px');
        img.className = template.className;
        targetCollection.appendChild(img);
        img.style.left = x + "px";
        img.style.top = y + "px";
      }
    }

    spawnTargets(5);
  });
});

/***/ })

/******/ });
//# sourceMappingURL=prototype_7-b6f4402e38e1fa619b5d.js.map