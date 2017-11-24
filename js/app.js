$(() => {

  $('a[href*="#"]').click(function(e) {
    e.preventDefault();

    const $target = $(this.hash);
    if ($target.length) {
      $('html, body').animate({
        scrollTop: $target.offset().top
      }, 800);
    }
  });

});
