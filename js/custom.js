(function ($) {
  "use strict";

  // NAVBAR
  $(".navbar-collapse a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  $(function () {
    $(".hero-slides").vegas({
      slides: [
        {
          src: "images/slides/centro-recuperacion-covid-doctora-sosteniendo-manos-paciente-mayor.jpg",
        },
        {
          src: "images/slides/mujer-que-trabaja-como-medico.jpg",
        },
        {
          src: "images/slides/retrato-enfermera-hospital.jpg",
        },
      ],
      timer: false,
      animation: "kenburns",
    });
  });

  // CUSTOM LINK
  $(".smoothscroll").click(function () {
    var el = $(this).attr("href");
    var elWrapped = $(el);
    var header_height = $(".navbar").height() + 60;

    scrollToDiv(elWrapped, header_height);
    return false;

    function scrollToDiv(element, navheight) {
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop - navheight;

      $("body,html").animate(
        {
          scrollTop: totalScroll,
        },
        300
      );
    }
  });
})(window.jQuery);
