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

//skills bar
$(document).ready(function() {
  $('.progress .progress-bar').css("width",
    function() {
      return $(this).attr("aria-valuenow") + "%";
    }
  )
});
