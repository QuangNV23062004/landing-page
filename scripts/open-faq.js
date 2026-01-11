document.addEventListener("DOMContentLoaded", function () {
  // Loop through FAQ items 1-10
  for (let i = 1; i <= 10; i++) {
    const faqToggle = document.querySelector(`.open-faq-${i}`);
    const faqContent = document.querySelector(`.faq-content-${i}`);
    const rotateIcon = document.querySelector(`.rotate-icon-${i}`);

    // Skip if elements don't exist
    if (!faqToggle || !faqContent || !rotateIcon) continue;

    faqToggle.addEventListener("click", function () {
      // Toggle content height
      if (faqContent.classList.contains("max-h-0")) {
        faqContent.classList.remove("max-h-0");
        faqContent.classList.add("max-h-[500px]");
      } else {
        faqContent.classList.remove("max-h-[500px]");
        faqContent.classList.add("max-h-0");
      }

      // Rotate icon 180 degrees
      rotateIcon.classList.toggle("rotate-180");
    });
  }
});
