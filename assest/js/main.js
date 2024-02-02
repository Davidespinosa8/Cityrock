$(window).on('load', function () {
    // Ocultar la barra de navegación al inicio
    $('.navbar, #offcanvas').hide();

    setTimeout(function () {
        $('#onload').fadeOut();
        $('body').removeClass('hidden');

        // Mostrar la barra de navegación después de ocultar el preloader
        $('.navbar, #offcanvas').show();
    }, 4000);
});

