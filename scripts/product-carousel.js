$(document).ready(function () {
  // Main product slider
  $(".product-main-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: ".product-thumb-slider",
    prevArrow:
      '<button type="button" class="slick-prev"><img src="../assets/others/left.webp" alt="Previous" class="w-full h-full"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="../assets/others/right.webp" alt="Next" class="w-full h-full"></button>',
  });

  // Thumbnail slider
  $(".product-thumb-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".product-main-slider",
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
  });

  // Mobile nutritional modal trigger
  $("#open-nutritional-modal-mobile").on("click", function () {
    $("#nutritional-modal").removeClass("hidden");
    $("#modal-overlay").removeClass("hidden");
  });
});
