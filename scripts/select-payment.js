// Use event delegation for dynamically loaded tier cards
document.addEventListener("click", function (e) {
  const card = e.target.closest(".tier-card");
  if (!card) return;

  const tierCards = document.querySelectorAll(".tier-card");

  // Remove selected state from all cards
  tierCards.forEach((c) => {
    c.classList.remove("selected");
    c.style.borderColor = "#039869";

    const benefits = c.querySelectorAll(".tier-benefit");
    const radioDot = c.querySelector(".tier-radio-dot");

    benefits.forEach((b) => {
      b.classList.remove("bg-[#039869]");
      b.classList.add("bg-[#a8d5c4]");
    });

    // Radio dot hidden when not selected
    if (radioDot) {
      radioDot.classList.add("hidden");
      radioDot.classList.remove("bg-[#039869]");
    }
  });

  // Add selected state to clicked card
  card.classList.add("selected");
  card.style.borderColor = "#039869";

  const benefits = card.querySelectorAll(".tier-benefit");
  const radioDot = card.querySelector(".tier-radio-dot");

  benefits.forEach((b) => {
    b.classList.remove("bg-[#a8d5c4]");
    b.classList.add("bg-[#039869]");
  });

  // Radio dot green and visible when selected
  if (radioDot) {
    radioDot.classList.remove("hidden");
    radioDot.classList.add("bg-[#039869]");
  }
});
