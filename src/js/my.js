/**
 * Функция для имитации подбора пороля, для заголовков
 */
function bruteForcePasswordEffect(nick, el) {

    var L = nick.length
        , cursor = 0
        , arr
        , timeout
        , prob = 0.5 // вероятность "разгадывания" очередной позиции
        , rate = 10  // частота "кадров" в секунду
        , delay = 1000 / rate
        , alphabet = []
        , i
        , aL
    ;

    // заполним алфавит из которого брать случайные символы
    for (i = 128; i <= 255; i++) alphabet.push(String.fromCharCode(97 + Math.floor(Math.random() * 26)));
    for (i = 1024; i <= 1279; i++) alphabet.push(String.fromCharCode(97 + Math.floor(Math.random() * 26)));
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
 * Добавление css класса для анимации, если размер экрана меньше 991px
 */
var isScrolling = false;

window.addEventListener("scroll", throttleScroll, false);

function throttleScroll(e) {
    if (isScrolling == false) {
        window.requestAnimationFrame(function () {
            scrolling(e);
            isScrolling = false;
        });
    }
    isScrolling = true;
}

//Получаем все section на странице
var allSections = document.querySelectorAll('section')
var sectionTitlesAnim = ''
var sectionTitlesAnimStatus = true
document.addEventListener("DOMContentLoaded", scrolling, false);

function titleAnimation(section) {
    if (!section.classList.contains("animation-start")) {
        sectionTitlesAnim = section.querySelectorAll('.section-title__anime');
        if (sectionTitlesAnim.length) {
            for (var el = 0; el < sectionTitlesAnim.length; el++) {
                bruteForcePasswordEffect(sectionTitlesAnim[el].textContent, sectionTitlesAnim[el])
            }
            sectionTitlesAnim = ''
        }
        sectionTitlesAnim = ''
    }
}

//Проверяем текущий section на видимость
function scrolling(e) {
    for (var i = 0; i < allSections.length; i++) {
        var sectionItem = allSections[i];

        if (isPartiallyVisible(sectionItem)) {
            titleAnimation(sectionItem);
            sectionItem.classList.add("animation-start");
        } else {
            sectionItem.classList.remove("animation-start");
        }
    }
}

//Определение частично видимых элементов
function isPartiallyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();

    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;
    var height = elementBoundary.height;

    return ((top + height >= 0) && (height + window.innerHeight - 300 >= bottom));
}


/**
 * Полноэкранная прокрутка если размер экрана больше 991px
 */
(function () {
    'use strict';

    /**
     * Full scroll main function
     */
    var fullScroll = function (params) {
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
        this.buildPublicFunctions()
            .buildSections()
            .buildDots()
            .addEvents();

        var anchor = location.hash.replace('#', '').split('/')[0];
        location.hash = 0;
        this.changeCurrentPosition(anchor);
        this.registerIeTags();
    };

    /**
     * Destroy plugin
     */
    fullScroll.prototype.destroy = function () {
        this.ul.remove();
        var noHashURL = window.location.href.replace(/#.*$/, '');
        window.history.replaceState('', document.title, noHashURL)
        document.removeEventListener('mousewheel', this.mouseWheelAndKey, false);
        document.removeEventListener('wheel', this.mouseWheelAndKey, false);
        document.removeEventListener('keyup', this.mouseWheelAndKey, false);
        document.removeEventListener('touchstart', this.touchStart, false);
        document.removeEventListener('touchend', this.touchEnd, false);
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
            a.addEventListener('click', (function (i_local) {
                return function () {
                    if (sections[i_local].classList) {
                        if (!sections[i_local].classList.contains('animation-start')) {
                            for (var el = 0; el < sections.length; el++) {
                                if (el !== i_local && sections[el].classList) {
                                    sections[el].classList.remove('animation-start')
                                }
                            }
                            if (sections[i_local].classList) {
                                sections[i_local].classList.add('animation-start')
                            }
                        }
                    }
                }
            })(i))
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
                        bruteForcePasswordEffect(sectionTitle[i].textContent, sectionTitle[i])
                    }
                    sectionTitle = ''
                }
            }

            if (type === 'top') {
                _self.defaults.sections[_self.defaults.currentPosition].classList.add('animation-start')
                _self.defaults.sections[_self.defaults.currentPosition - 1].classList.remove('animation-start')
            } else if (type === 'bottom') {
                _self.defaults.sections[_self.defaults.currentPosition].classList.add('animation-start')
                _self.defaults.sections[_self.defaults.currentPosition + 1].classList.remove('animation-start')
            } else {
                _self.defaults.sections[_self.defaults.currentPosition].classList.add('animation-start')
            }

        }

        this.handleModalClose = function () {
            $('#videoModal').modal('hide')
        }

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
                                bruteForcePasswordEffect(sectionTitle[i].textContent, sectionTitle[i])
                            }
                            sectionTitle = ''
                        }
                        updatePageStatus = true
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


function initFullPageScroll() {
    if ($(window).width() > 991) {
        if (!fullPageScrollSetting) {
            fullPageScrollSetting = new fullScroll({
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
        }
    } else {
        if (fullPageScrollSetting) {
            fullPageScrollSetting.destroy();
            fullPageScrollSetting = ''
        }
    }
}

var fullPageScrollSetting = '';

$(window).resize(function () {
    initFullPageScroll()
});
$(document).ready(function () {
    initFullPageScroll()
})


//particlesJS

var particlesJsOption = {
    "particles": {
        "number": {"value": 80, "density": {"enable": true, "value_area": 800}},
        "color": {"value": "#ffffff"},
        "shape": {
            "type": "circle",
            "stroke": {"width": 0, "color": "#000000"},
            "polygon": {"nb_sides": 5},
            "image": {"src": "img/github.svg", "width": 100, "height": 100}
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {"enable": false, "speed": 1, "opacity_min": 0.1, "sync": false}
        },
        "size": {"value": 3, "random": true, "anim": {"enable": false, "speed": 40, "size_min": 0.1, "sync": false}},
        "line_linked": {"enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1},
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {"enable": false, "rotateX": 600, "rotateY": 1200}
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {"enable": true, "mode": "grab"},
            "onclick": {"enable": true, "mode": "push"},
            "resize": true
        },
        "modes": {
            "grab": {"distance": 400, "line_linked": {"opacity": 1}},
            "bubble": {"distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3},
            "repulse": {"distance": 200, "duration": 0.4},
            "push": {"particles_nb": 4},
            "remove": {"particles_nb": 2}
        }
    },
    "retina_detect": true
};

particlesJS("particles-js__our-mission", particlesJsOption);
particlesJS("particles-js__stages-work", particlesJsOption);
particlesJS("particles-js__footer", particlesJsOption);