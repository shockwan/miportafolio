$(function() {
  $('[data-toggle="tooltip"]').tooltip()
})

$(function() {

  $("a").click(function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var gato = this.hash;
      $("html, body").animate({
        scrollTop: $(gato).offset().top
      }, 950, function() {
        window.location.hash = gato;
      });
    }

  });

});
