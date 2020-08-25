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

/* Contact form image animation script*/

var block_show = false;

function scrollTracking() {
  if (block_show) {
    return false;
  }

  var wt = $(window).scrollTop();
  var wh = $(window).height();
  var et = $('.contact-form__wrapper').offset().top;
  var eh = $('.contact-form__wrapper').outerHeight();
  var dh = $(document).height();

  if (wt + wh >= et || wh + wt == dh || eh + et < wh) {
    block_show = true;
    $('.contact-form__animation').addClass('animation-start');
  }
}

$(document).scroll(function () {
  console.log("scroll");
  scrollTracking();
});
$(document).ready(function () {
  console.log("scroll");
  scrollTracking();
});
/* Contact form image animation script*/
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {//Google map api settings
$(document).ready(function () {
  (function initMap() {
    var sLatLng = {
      lat: 59.93172927746452,
      lng: 30.322663050000028
    }; // Styles a map in night mode.

    var map = new google.maps.Map(document.getElementById('googleMap'), {
      center: sLatLng,
      zoom: 18,
      disableDefaultUI: true,
      styles: [{
        elementType: 'geometry',
        stylers: [{
          color: '#343332'
        }]
      }, {
        elementType: 'labels.text.stroke',
        stylers: [{
          color: '#242f3e'
        }]
      }, {
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#746855'
        }]
      }, {
        elementType: "labels.icon",
        stylers: [{
          visibility: "off"
        }]
      }, {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{
          color: '#454545'
        }]
      }, {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{
          color: '#212a37'
        }]
      }, {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#9d9d9d'
        }]
      }, {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{
          color: '#746855'
        }]
      }, {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{
          color: '#1f2835'
        }]
      }, {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#9d9d9d'
        }]
      }, {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{
          color: '#191a1a'
        }]
      }, {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#9d9d9d'
        }]
      }, {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{
          color: '#9d9d9d'
        }]
      }]
    });
    new google.maps.Marker({
      position: sLatLng,
      map: map,
      title: "Hello World!",
      icon: {
        url: "../img/map-marker.svg",
        scaledSize: new google.maps.Size(80, 100)
      }
    });
  })();
}); //Google map api settings
//Button up

$(document).ready(function () {
  var timeOutGoUp;

  (function goUp() {
    document.getElementById('goUpBtn').addEventListener('click', function () {
      location.hash = 0;
    });
  })();
}); //Button up
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/main-banner/main-banner.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/main-banner/main-banner.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {//Stop video on modal window close
$(document).ready(function () {
  var mainBannerVideoBlock = document.getElementById('main-modal-video');

  if (mainBannerVideoBlock) {
    var mainBannerVideoIframe = mainBannerVideoBlock.getElementsByTagName("iframe")[0];

    if (mainBannerVideoIframe) {
      var mainBannerVideoUrl = mainBannerVideoIframe.getAttribute('src');
      $('#videoModal').on('hidden.bs.modal', function (e) {
        mainBannerVideoIframe.setAttribute('src', '');
        mainBannerVideoIframe.setAttribute('src', mainBannerVideoUrl);
      });
    }
  }
}); //Stop video on modal window close
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

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

/***/ "./src/js/full-page-scroll.js":
/*!************************************!*\
  !*** ./src/js/full-page-scroll.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {function bruteForcePasswordEffect(nick, el) {
  var L = nick.length,
      cursor = 0,
      arr,
      timeout,
      prob = 0.5 // вероятность "разгадывания" очередной позиции
  ,
      rate = 10 // частота "кадров" в секунду
  ,
      delay = 1000 / rate,
      alphabet = [],
      i,
      aL; // заполним алфавит из которого брать случайные символы

  for (i = 128; i <= 255; i++) {
    alphabet.push(String.fromCharCode(i));
  }

  for (i = 1024; i <= 1279; i++) {
    alphabet.push(String.fromCharCode(i));
  }

  aL = alphabet.length;

  function tweak() {
    arr = nick.split('');

    for (pos = cursor; pos < L; pos++) {
      arr[pos] = alphabet[Math.floor(aL * Math.random())];
    }

    el.innerText = arr.join('');
    if (cursor === L) return; // done

    if (Math.random() < prob) cursor++;
    timeout = window.setTimeout(tweak, delay);
  }

  tweak();
}
/**
 * Full page
 */


(function () {
  'use strict';
  /**
   * Full scroll main function
   */

  var fullScroll = function fullScroll(params) {
    /**
     * Main div
     * @type {Object}
     */
    var main = document.getElementById(params.mainElement);
    /**
     * Sections divclass
     * @type {Array}
     */

    var sections = main.getElementsByTagName('section');
    /**
     * Full page scroll configurations
     * @type {Object}
     */

    var defaults = {
      container: main,
      sections: sections,
      animateTime: params.animateTime || 0.7,
      animateFunction: params.animateFunction || 'ease',
      maxPosition: sections.length - 1,
      currentPosition: 0,
      displayDots: typeof params.displayDots != 'undefined' ? params.displayDots : true,
      dotsPosition: params.dotsPosition || 'left'
    };
    this.defaults = defaults;
    /**
     * Init build
     */

    this.init();
  };
  /**
   * Init plugin
   */


  fullScroll.prototype.init = function () {
    this.buildPublicFunctions().buildSections().buildDots().addEvents();
    var anchor = location.hash.replace('#', '').split('/')[0];
    location.hash = 0;
    this.changeCurrentPosition(anchor);
    this.registerIeTags();
  };
  /**
   * Build sections
   * @return {Object} this(fullScroll)
   */


  fullScroll.prototype.buildSections = function () {
    var sections = this.defaults.sections;

    for (var i = 0; i < sections.length; i++) {
      sections[i].setAttribute('data-index', i);
    }

    return this;
  };
  /**
   * Build dots navigation
   * @return {Object} this (fullScroll)
   */


  fullScroll.prototype.buildDots = function () {
    this.ul = document.createElement('ul');
    this.ul.className = this.updateClass(1, 'dots', this.ul.className);
    this.ul.className = this.updateClass(1, this.defaults.dotsPosition == 'right' ? 'dots-right' : 'dots-left', this.ul.className);

    var _self = this;

    var sections = this.defaults.sections;

    for (var i = 0; i < sections.length; i++) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.setAttribute('href', '#' + i);
      a.addEventListener('click', function (i_local) {
        return function () {
          if (sections[i_local].classList) {
            if (!sections[i_local].classList.contains('animation-start')) {
              for (var el = 0; el < sections.length; el++) {
                if (el !== i_local && sections[el].classList) {
                  sections[el].classList.remove('animation-start');
                }
              }

              if (sections[i_local].classList) {
                sections[i_local].classList.add('animation-start');
              }
            }
          }
        };
      }(i));
      li.appendChild(a);

      _self.ul.appendChild(li);
    }

    this.ul.childNodes[0].firstChild.className = this.updateClass(1, 'active', this.ul.childNodes[0].firstChild.className);

    if (this.defaults.displayDots) {
      document.body.appendChild(this.ul);
    }

    return this;
  };
  /**
   * Add Events
   * @return {Object} this(fullScroll)
   */


  fullScroll.prototype.addEvents = function () {
    if (document.addEventListener) {
      document.addEventListener('mousewheel', this.mouseWheelAndKey, false);
      document.addEventListener('wheel', this.mouseWheelAndKey, false);
      document.addEventListener('keyup', this.mouseWheelAndKey, false);
      document.addEventListener('touchstart', this.touchStart, false);
      document.addEventListener('touchend', this.touchEnd, false);
      window.addEventListener("hashchange", this.hashChange, false);
      /**
       * Enable scroll if decive don't have touch support
       */

      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        if (!('ontouchstart' in window)) {
          document.body.style = "overflow: scroll;";
          document.documentElement.style = "overflow: scroll;";
        }
      }
    } else {
      document.attachEvent('onmousewheel', this.mouseWheelAndKey, false);
      document.attachEvent('onkeyup', this.mouseWheelAndKey, false);
    }

    return this;
  };
  /**
   * Build public functions
   * @return {[type]} [description]
   */


  fullScroll.prototype.buildPublicFunctions = function () {
    var mTouchStart = 0;
    var mTouchEnd = 0;

    var _self = this;

    var sectionTitle = '';
    var updatePageStatus = false;

    this.animateClassAdd = function (type) {
      if (updatePageStatus) {
        sectionTitle = this.defaults.sections[_self.defaults.currentPosition].querySelectorAll('.section-title__anime');

        if (sectionTitle.length) {
          for (var i = 0; i < sectionTitle.length; i++) {
            bruteForcePasswordEffect(sectionTitle[i].textContent, sectionTitle[i]);
          }

          sectionTitle = '';
        }
      }

      if (type === 'top') {
        _self.defaults.sections[_self.defaults.currentPosition].classList.add('animation-start');

        _self.defaults.sections[_self.defaults.currentPosition - 1].classList.remove('animation-start');
      } else if (type === 'bottom') {
        _self.defaults.sections[_self.defaults.currentPosition].classList.add('animation-start');

        _self.defaults.sections[_self.defaults.currentPosition + 1].classList.remove('animation-start');
      } else {
        _self.defaults.sections[_self.defaults.currentPosition].classList.add('animation-start');
      }
    };

    this.handleModalClose = function () {
      $('#videoModal').modal('hide');
    };

    this.mouseWheelAndKey = function (event) {
      if (event.deltaY > 0 || event.keyCode == 40) {
        if (_self.defaults.currentPosition < _self.defaults.sections.length - 1) {
          _self.defaults.currentPosition++;

          _self.changeCurrentPosition(_self.defaults.currentPosition);

          _self.animateClassAdd('top');

          _self.handleModalClose();
        }
      } else if (event.deltaY < 0 || event.keyCode == 38) {
        if (_self.defaults.currentPosition > 0) {
          _self.defaults.currentPosition--;

          _self.changeCurrentPosition(_self.defaults.currentPosition);

          _self.animateClassAdd('bottom');

          _self.handleModalClose();
        }
      }

      _self.removeEvents();
    };

    this.touchStart = function (event) {
      mTouchStart = parseInt(event.changedTouches[0].clientY);
      mTouchEnd = 0;
    };

    this.touchEnd = function (event) {
      mTouchEnd = parseInt(event.changedTouches[0].clientY);

      if (mTouchEnd - mTouchStart > 100 || mTouchStart - mTouchEnd > 100) {
        _self.handleModalClose();

        if (mTouchEnd > mTouchStart) {
          if (_self.defaults.currentPosition > 0) {
            _self.defaults.currentPosition--;

            _self.animateClassAdd('bottom');
          }
        } else {
          if (_self.defaults.currentPosition < _self.defaults.sections.length - 1) {
            _self.defaults.currentPosition++;

            _self.animateClassAdd('top');
          }
        }

        _self.changeCurrentPosition(_self.defaults.currentPosition);
      }
    };

    this.hashChange = function (event) {
      if (location) {
        var anchor = location.hash.replace('#', '').split('/')[0];

        if (anchor !== "") {
          if (anchor < 0) {
            _self.changeCurrentPosition(0);
          } else if (anchor > _self.defaults.maxPosition) {
            _self.changeCurrentPosition(_self.defaults.maxPosition);
          } else {
            _self.defaults.currentPosition = anchor;

            _self.animateScroll();
          }
        }
      }
    };

    this.removeEvents = function () {
      if (document.addEventListener) {
        document.removeEventListener('mousewheel', this.mouseWheelAndKey, false);
        document.removeEventListener('wheel', this.mouseWheelAndKey, false);
        document.removeEventListener('keyup', this.mouseWheelAndKey, false);
        document.removeEventListener('touchstart', this.touchStart, false);
        document.removeEventListener('touchend', this.touchEnd, false);
      } else {
        document.detachEvent('onmousewheel', this.mouseWheelAndKey, false);
        document.detachEvent('onkeyup', this.mouseWheelAndKey, false);
      }

      setTimeout(function () {
        _self.addEvents();
      }, 600);
    };

    this.animateScroll = function () {
      var animateTime = this.defaults.animateTime;
      var animateFunction = this.defaults.animateFunction;
      var position = this.defaults.currentPosition * 100;
      this.defaults.container.style.webkitTransform = 'translateY(-' + position + '%)';
      this.defaults.container.style.mozTransform = 'translateY(-' + position + '%)';
      this.defaults.container.style.msTransform = 'translateY(-' + position + '%)';
      this.defaults.container.style.transform = 'translateY(-' + position + '%)';
      this.defaults.container.style.webkitTransition = 'all ' + animateTime + 's ' + animateFunction;
      this.defaults.container.style.mozTransition = 'all ' + animateTime + 's ' + animateFunction;
      this.defaults.container.style.msTransition = 'all ' + animateTime + 's ' + animateFunction;
      this.defaults.container.style.transition = 'all ' + animateTime + 's ' + animateFunction;

      for (var i = 0; i < this.ul.childNodes.length; i++) {
        this.ul.childNodes[i].firstChild.className = this.updateClass(2, 'active', this.ul.childNodes[i].firstChild.className);

        if (i == this.defaults.currentPosition) {
          this.ul.childNodes[i].firstChild.className = this.updateClass(1, 'active', this.ul.childNodes[i].firstChild.className);

          if (!updatePageStatus) {
            this.defaults.sections[i].classList.add('animation-start');
            sectionTitle = this.defaults.sections[i].querySelectorAll('.section-title__anime');

            if (sectionTitle.length) {
              for (var i = 0; i < sectionTitle.length; i++) {
                bruteForcePasswordEffect(sectionTitle[i].textContent, sectionTitle[i]);
              }

              sectionTitle = '';
            }

            updatePageStatus = true;
          }
        }
      }
    };

    this.changeCurrentPosition = function (position) {
      if (position !== "") {
        _self.defaults.currentPosition = position;
        location.hash = _self.defaults.currentPosition;
      }
    };

    this.registerIeTags = function () {
      document.createElement('section');
    };

    this.updateClass = function (type, newClass, currentClass) {
      if (type == 1) {
        return currentClass += ' ' + newClass;
      } else if (type == 2) {
        return currentClass.replace(newClass, '');
      }
    };

    return this;
  };

  window.fullScroll = fullScroll;
})();

$(document).ready(function () {
  new fullScroll({
    mainElement: 'fullPageScroll',
    // parent container
    container: 'fullPageScroll',
    // content section
    sections: 'section',
    // animation speed
    animateTime: 0.7,
    // easing for animation
    animateFunction: 'ease',
    // current position
    currentPosition: 0,
    // display dots navigation
    displayDots: true,
    // where to place the dots navigation
    dotsPosition: 'right'
  });
});
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
/* harmony import */ var _swiper_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./swiper-settings */ "./src/js/swiper-settings.js");
/* harmony import */ var _full_page_scroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./full-page-scroll */ "./src/js/full-page-scroll.js");
/* harmony import */ var _full_page_scroll__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_full_page_scroll__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _blocks_modules_main_banner_main_banner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../blocks/modules/main-banner/main-banner */ "./src/blocks/modules/main-banner/main-banner.js");
/* harmony import */ var _blocks_modules_main_banner_main_banner__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_blocks_modules_main_banner_main_banner__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _blocks_modules_footer_footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../blocks/modules/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _blocks_modules_footer_footer__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_blocks_modules_footer_footer__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _my__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./my */ "./src/js/my.js");
/* harmony import */ var _my__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_my__WEBPACK_IMPORTED_MODULE_12__);
// Импортируем jQuery
 // Импортируем необходимые js-файлы Bootstrap 4




 // Импортируем другие js-файлы










/***/ }),

/***/ "./src/js/my.js":
/*!**********************!*\
  !*** ./src/js/my.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {// Получаем нужный элемент
var element = document.querySelector('#target');

var VisibleElelm = function VisibleElelm(target) {
  // Все позиции элемента
  var targetPosition = {
    top: window.pageYOffset + target.getBoundingClientRect().top,
    left: window.pageXOffset + target.getBoundingClientRect().left,
    right: window.pageXOffset + target.getBoundingClientRect().right,
    bottom: window.pageYOffset + target.getBoundingClientRect().bottom
  },
      // Получаем позиции окна
  windowPosition = {
    top: window.pageYOffset,
    left: window.pageXOffset,
    right: window.pageXOffset + document.documentElement.clientWidth,
    bottom: window.pageYOffset + document.documentElement.clientHeight
  };

  if (targetPosition.bottom > windowPosition.top || targetPosition.top < windowPosition.bottom) {
    return true;
  } else {
    return false;
  }

  ;
};

$(document).ready(function () {
  var allSections = document.querySelectorAll('section');
  allSections.forEach(function (item) {
    var sectionTitle = item.querySelector('.section-title');
    window.addEventListener('scroll', function () {
      if (VisibleElelm(item)) {
        if (sectionTitle) console.log(item.querySelector('.section-title'));
      }
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

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