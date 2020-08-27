/*Contact form script*/
$(document).ready(function () {
    var sContactForm = document.getElementById('s-contact-form');
    var sFormAllInput = sContactForm.querySelectorAll('input')

    sFormAllInput.forEach(function (item) {
        item.addEventListener('input', function () {
            if (!item.classList.contains('visited')) item.classList.add('visited');
        });
    });
});
/*Contact form script*/

/* Contact form image animation script*/
var block_show = false;

function scrollTracking(){
    if (block_show) {
        return false;
    }

    var wt = $(window).scrollTop();
    var wh = $(window).height();
    var et = $('.contact-form__wrapper').offset().top;
    var eh = $('.contact-form__wrapper').outerHeight();
    var dh = $(document).height();

    if (wt + wh >= et || wh + wt == dh || eh + et < wh){
        block_show = true;
        $('.contact-form__animation').addClass('animation-start');
    }
}

$(document).scroll(function(){
    scrollTracking();
});

$(document).ready(function(){
    scrollTracking();
});
/* Contact form image animation script*/