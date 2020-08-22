/*Contact form script*/
$(document).ready(function () {
    var sContactForm = document.getElementById('s-contact-form');
    var sFormAllInput = sContactForm.querySelectorAll('input')

    sFormAllInput.forEach(function(item) {
        item.addEventListener('input', function() {
            if (!item.classList.contains('visited')) item.classList.add('visited');
        });
    });
});
/*Contact form script*/