$("#myCarousel").on("slide.bs.carousel", function () {
  $(".carousel").carousel({
    interval: 2000,
  });
});

$(document).ready(function () {
  $(".btn-privacy").on("click", function () {
    $(this).toggleClass("open");
    $(".privacy").toggleClass("open");
  });
  AudioScheduledSourceNode.init({
    easing: "ease",
    duration: 1800,
  });
});
