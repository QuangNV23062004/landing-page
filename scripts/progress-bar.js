// Function to initialize progress bars
function initProgressBars() {
  const fullbars = document.getElementsByClassName("total-bar");
  const progressbars = document.getElementsByClassName("progress-bar");

  if (!fullbars.length || !progressbars.length) return false;

  for (let i = 0; i < fullbars.length; i++) {
    const fullValue = parseInt(fullbars[i].getAttribute("value")) || 100;
    const progressValue = parseInt(progressbars[i].getAttribute("value")) || 0;
    const percentage = Math.round((progressValue / fullValue) * 100);
    progressbars[i].style.width = `${percentage}%`;
  }
  return true;
}

// Try on DOMContentLoaded first
document.addEventListener("DOMContentLoaded", function () {
  if (!initProgressBars()) {
    // If elements don't exist yet, use MutationObserver to wait for them
    const observer = new MutationObserver(function (mutations, obs) {
      if (initProgressBars()) {
        obs.disconnect(); // Stop observing once initialized
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Safety timeout - stop observing after 10 seconds
    setTimeout(() => observer.disconnect(), 10000);
  }
});
