$(document).ready(function () {
    var offSetWind = 0;
    window.addEventListener('scroll', scrollText);
    var space = 2
    if (window.innerHeight > 500) space = 10

    function scrollText() {
        if (window.pageYOffset > $('.our-mission__scroll-line1').offset().top - window.innerHeight && window.pageYOffset < $('.our-mission__scroll-line2').offset().top + window.innerHeight) {
            if (offSetWind > window.pageYOffset) {
                document.getElementsByClassName('our-mission__scroll-lines')[0].scrollLeft -= space
                document.getElementsByClassName('our-mission__scroll-lines')[1].scrollLeft -= space
            } else if (offSetWind !== 0) {
                document.getElementsByClassName('our-mission__scroll-lines')[0].scrollLeft += space
                document.getElementsByClassName('our-mission__scroll-lines')[1].scrollLeft += space
            } else {
                document.getElementsByClassName('our-mission__scroll-lines')[0].scrollLeft = 500
                document.getElementsByClassName('our-mission__scroll-lines')[1].scrollLeft = 500
            }
            offSetWind = window.pageYOffset;
        }
    }
});