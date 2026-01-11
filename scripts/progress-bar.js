document.addEventListener("DOMContentLoaded", function () {
  const fullbars = document.getElementsByClassName("total-bar");
  const progressbars = document.getElementsByClassName("progress-bar");

  if (!fullbars.length || !progressbars.length) return;

  for (let i = 0; i < fullbars.length; i++) {
    const fullValue = parseInt(fullbars[i].getAttribute("value")) || 100;
    const progressValue = parseInt(progressbars[i].getAttribute("value")) || 0;
    const percentage = Math.round((progressValue / fullValue) * 100);
    progressbars[i].style.width = `${percentage}%`;
  }
});
