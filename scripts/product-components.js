fetch("../components/product/images/mobile/mobile-image.html")
  .then((res) => res.text())
  .then(
    (html) =>
      (document.getElementById("product-mobile-images").innerHTML = html)
  );

fetch("../components/product/images/desktop/desktop-image.html")
  .then((res) => res.text())
  .then(
    (html) =>
      (document.getElementById("product-desktop-images").innerHTML = html)
  );

fetch("../components/product/info/description.html")
  .then((res) => res.text())
  .then((html) => {
    document.getElementById("product-info").innerHTML = html;
    // Inject FrontRow iframe after DOM is ready
    setTimeout(() => {
      const widgetContainer = document.getElementById(
        "frontrow-widget-container"
      );
      if (widgetContainer) {
        widgetContainer.innerHTML =
          '<iframe data-state="max" class="iframe-frontrow-sticker w-full overflow-hidden" id="frontrow-sticker" frameborder="0" src="https://app.thefrontrowhealth.com/api/widgets?presentation_type=sticker&product_id=2691"></iframe>';
      }
    }, 100);
  });

fetch("../components/product/tier/tier-list.html")
  .then((res) => res.text())
  .then((html) => (document.getElementById("tier-list").innerHTML = html));

fetch("../components/product/payment-info/payment-info.html")
  .then((res) => res.text())
  .then((html) => (document.getElementById("payment-info").innerHTML = html));

fetch("../components/product/review/customer-review.html")
  .then((res) => res.text())
  .then(
    (html) => (document.getElementById("customer-review").innerHTML = html)
  );

fetch("../components/product/expandable/expandable-questions.html")
  .then((res) => res.text())
  .then(
    (html) => (document.getElementById("expandable-questions").innerHTML = html)
  );

fetch("../components/product/index.html")
  .then((res) => res.text())
  .then((html) => (document.getElementById("product-index").innerHTML = html));
