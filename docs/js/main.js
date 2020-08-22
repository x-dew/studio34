/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/contact-form/contact-form.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/contact-form/contact-form.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {/*Contact form script*/
$(document).ready(function () {
  var sContactForm = document.getElementById('s-contact-form');
  var sFormAllInput = sContactForm.querySelectorAll('input');
  sFormAllInput.forEach(function (item) {
    item.addEventListener('input', function () {
      if (!item.classList.contains('visited')) item.classList.add('visited');
    });
  });
});
/*Contact form script*/
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/our-mission/our-mission.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/our-mission/our-mission.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {/*Our mission block script*/
$(document).ready(function () {
  var offSetWind = 0;
  window.addEventListener('scroll', scrollText);
  var space = 2;
  if (window.innerHeight > 500) space = 10;

  function scrollText() {
    if (window.pageYOffset > $('.our-mission__scroll-line1').offset().top - window.innerHeight && window.pageYOffset < $('.our-mission__scroll-line2').offset().top + window.innerHeight) {
      if (offSetWind > window.pageYOffset) {
        document.getElementsByClassName('our-mission__scroll-lines')[0].scrollLeft -= space;
        document.getElementsByClassName('our-mission__scroll-lines')[1].scrollLeft -= space;
      } else if (offSetWind !== 0) {
        document.getElementsByClassName('our-mission__scroll-lines')[0].scrollLeft += space;
        document.getElementsByClassName('our-mission__scroll-lines')[1].scrollLeft += space;
      } else {
        document.getElementsByClassName('our-mission__scroll-lines')[0].scrollLeft = 500;
        document.getElementsByClassName('our-mission__scroll-lines')[1].scrollLeft = 500;
      }

      offSetWind = window.pageYOffset;
    }
  }
});
/*Our mission block script*/
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_js_dist_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/js/dist/util */ "./node_modules/bootstrap/js/dist/util.js");
/* harmony import */ var bootstrap_js_dist_util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_util__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_js_dist_collapse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/js/dist/collapse */ "./node_modules/bootstrap/js/dist/collapse.js");
/* harmony import */ var bootstrap_js_dist_collapse__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_collapse__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap_js_dist_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/js/dist/dropdown */ "./node_modules/bootstrap/js/dist/dropdown.js");
/* harmony import */ var bootstrap_js_dist_dropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_dropdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/js/dist/modal */ "./node_modules/bootstrap/js/dist/modal.js");
/* harmony import */ var bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _blocks_modules_header_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../blocks/modules/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _blocks_modules_header_header__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_blocks_modules_header_header__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _blocks_modules_our_mission_our_mission__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../blocks/modules/our-mission/our-mission */ "./src/blocks/modules/our-mission/our-mission.js");
/* harmony import */ var _blocks_modules_our_mission_our_mission__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_blocks_modules_our_mission_our_mission__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _blocks_modules_contact_form_contact_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../blocks/modules/contact-form/contact-form */ "./src/blocks/modules/contact-form/contact-form.js");
/* harmony import */ var _blocks_modules_contact_form_contact_form__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_blocks_modules_contact_form_contact_form__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _blocks_modules_footer_footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../blocks/modules/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _blocks_modules_footer_footer__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_blocks_modules_footer_footer__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _swiper_settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./swiper-settings */ "./src/js/swiper-settings.js");
// Импортируем jQuery
 // Импортируем необходимые js-файлы Bootstrap 4




 // Импортируем другие js-файлы







/***/ }),

/***/ "./src/js/swiper-settings.js":
/*!***********************************!*\
  !*** ./src/js/swiper-settings.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/js/swiper.esm.bundle.js");
// Импортируем Swiper slider
 //Инициализация слайдера work-examples

new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.work-examples__slider', {
  centeredSlides: true,
  slidesPerView: 'auto',
  spaceBetween: 40,
  loop: true,
  navigation: {
    nextEl: '.work-examples__slider-next',
    prevEl: '.work-examples__slider-prev'
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      spaceBetween: 25,
      centeredSlides: false
    },
    // when window width is >= 441px
    441: {
      spaceBetween: 40,
      centeredSlides: false
    },
    // when window width is >= 641px
    641: {
      centeredSlides: true
    },
    // when window width is >= 1205px
    1205: {
      spaceBetween: 60
    }
  }
});

/***/ })

/******/ });
//# sourceMappingURL=main.js.map