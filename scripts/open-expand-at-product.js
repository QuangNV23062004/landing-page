document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", (e) => {
    const trigger = e.target.closest(".product-expand");
    if (!trigger) return;

    const id = trigger.dataset.expand;

    const content = document.getElementById(`product-expand${id}-content`);
    const icon = document.getElementById(`product-expand${id}-icon`);

    // Toggle expanded state with smooth transition
    const isExpanded = content.classList.contains("max-h-0");

    if (isExpanded) {
      content.classList.remove("max-h-0", "opacity-0");
      content.classList.add("max-h-[500px]", "opacity-100");
    } else {
      content.classList.add("max-h-0", "opacity-0");
      content.classList.remove("max-h-[500px]", "opacity-100");
    }

    icon.classList.toggle("rotate-45");

    trigger.classList.toggle("border-[#d2d2d2]");
    trigger.classList.toggle("border-[#039869]");
  });
});
