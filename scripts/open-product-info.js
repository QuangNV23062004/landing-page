fetch("../components/product/modal/product-info.html")
  .then((res) => res.text())
  .then(
    (html) => (document.getElementById("product-modal-info").innerHTML = html)
  );

// Use event delegation for dynamically loaded elements
document.addEventListener("click", function (e) {
  const modal = document.getElementById("nutritional-modal");
  const modalOverlay = document.getElementById("modal-overlay");

  // Open modal - desktop button
  if (e.target.closest("#open-nutritional-modal")) {
    if (modal && modalOverlay) {
      modal.classList.remove("hidden");
      modalOverlay.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    }
    return;
  }

  // Open modal - mobile button
  if (e.target.closest("#open-nutritional-modal-mobile")) {
    if (modal && modalOverlay) {
      modal.classList.remove("hidden");
      modalOverlay.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    }
    return;
  }

  // Close modal - close button
  if (e.target.closest("#close-nutritional-modal")) {
    if (modal && modalOverlay) {
      modal.classList.add("hidden");
      modalOverlay.classList.add("hidden");
      document.body.style.overflow = "";
    }
    return;
  }

  // Close modal - clicking overlay
  if (e.target.id === "modal-overlay") {
    if (modal) {
      modal.classList.add("hidden");
      modalOverlay.classList.add("hidden");
      document.body.style.overflow = "";
    }
    return;
  }
});

// Close modal - pressing Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    const modal = document.getElementById("nutritional-modal");
    const modalOverlay = document.getElementById("modal-overlay");
    if (modal && !modal.classList.contains("hidden")) {
      modal.classList.add("hidden");
      if (modalOverlay) modalOverlay.classList.add("hidden");
      document.body.style.overflow = "";
    }
  }
});
