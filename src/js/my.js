// Получаем нужный элемент
var element = document.querySelector('#target');

var VisibleElelm = function (target) {
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
        return true
    } else {
        return false
    };
};


$(document).ready(function () {
    var allSections = document.querySelectorAll('section')

    allSections.forEach(function (item) {
        var sectionTitle = item.querySelector('.section-title')
        window.addEventListener('scroll', function() {
            if(VisibleElelm (item)) {
                if(sectionTitle)
                    console.log(item.querySelector('.section-title'))
            }
        });
    });
});

