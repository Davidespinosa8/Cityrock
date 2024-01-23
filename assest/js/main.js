document.addEventListener('DOMContentLoaded', function () {
  var myOffcanvas = new bootstrap.Offcanvas(document.getElementById('offcanvas'));

  myOffcanvas._element.addEventListener('hidden.bs.offcanvas', function () {
      var target = myOffcanvas._config.backdrop ? document.body : myOffcanvas._element;
      target.style.overflow = '';
      myOffcanvas._element.removeEventListener('transitionend', handleTransition);
  });

  function handleTransition() {
      // No establecemos la visibilidad aquí
  }

  myOffcanvas._element.addEventListener('transitionend', handleTransition);

  myOffcanvas._element.addEventListener('shown.bs.offcanvas', function () {
      var target = myOffcanvas._config.backdrop ? document.body : myOffcanvas._element;
      target.style.overflow = 'hidden';
  });
});



