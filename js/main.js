// slow slide
$(document).ready(function() {
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1500, function() {
        window.location.hash = hash;
      });
    }
  });
});

//active and focous link
var header = document.getElementById("navbar");
var btn = header.getElementsByClassName("li");
for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

//when u're on this secyiom, show link in menu
$(document).ready(function(){
    $('body').scrollspy({target: ".navbar", offset: 50});
});


// autoclose drop downmenu
jQuery(function ($) {
    var sections = $("body > section");

    $(window).scroll(function () {
        var fromTop = $(window).scrollTop();

        sections.each(function () {
            var $section = $(this);
            var offset = $section.offset().top;
            var height = $section.height();

            $("nav a[href=#" + this.id + "]").toggleClass("current", fromTop >= offset && fromTop < offset + height);
        });
    }).scroll();
});
