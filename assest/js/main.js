$(document).ready(function () {
    $('.navbar, #offcanvas').hide();

    setTimeout(function () {
        $('#onload').fadeOut();
        $('body').removeClass('hidden');
        $('.navbar, #offcanvas').show();
    }, 4000);
});

