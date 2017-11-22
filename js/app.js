document.addEventListener('DOMContentLoaded', function () {

  const $main = $('main');

  $('a[href*="#"]').click(function(e) {
    e.preventDefault();

    const target = $(this.hash);
    if (target.length) {
      $main.animate({
        scrollTop: target.offset().top - ($main.offset().top - $main.scrollTop())
      }, 800);
    }

  });

});
