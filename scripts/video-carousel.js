document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("video-carousel");
  const videoItems = document.querySelectorAll(".video-item");
  const locationBar = document.getElementById("carousel-location-bar");
  const indicator = document.getElementById("carousel-indicator");
  const prevBtn = document.getElementById("carousel-prev");
  const nextBtn = document.getElementById("carousel-next");

  let currentlyPlaying = null;
  const itemWidth = 310 + 16; // width + gap
  let currentIndex = 0;
  const totalItems = videoItems.length; // 10 videos
  const visibleItems = 4; // Show 4 items at a time
  const totalPositions = totalItems - visibleItems + 1; // 7 positions (1-7)
  const maxIndex = totalPositions - 1; // 6 (index 0-6)

  // Update location indicator - snaps to 7 discrete positions
  function updateIndicator() {
    const indicatorWidth = (1 / totalPositions) * 100; // Each segment is 1/7 of bar
    const indicatorPosition = (currentIndex / totalPositions) * 100;
    indicator.style.width = indicatorWidth + "%";
    indicator.style.left = indicatorPosition + "%";
  }

  // Scroll to index with animation
  function scrollToIndex(index) {
    currentIndex = Math.max(0, Math.min(index, maxIndex));
    carousel.scrollTo({
      left: currentIndex * itemWidth,
      behavior: "smooth",
    });
    updateIndicator();
  }

  // Navigation buttons
  prevBtn.addEventListener("click", () => scrollToIndex(currentIndex - 1));
  nextBtn.addEventListener("click", () => scrollToIndex(currentIndex + 1));

  // Click on location bar to navigate - snaps to 7 positions
  locationBar.addEventListener("click", (e) => {
    const rect = locationBar.getBoundingClientRect();
    const clickPosition = (e.clientX - rect.left) / rect.width;
    const targetIndex = Math.round(clickPosition * maxIndex);
    scrollToIndex(targetIndex);
  });

  // Video play/pause functionality
  videoItems.forEach((item) => {
    const video = item.querySelector("video");
    const overlay = item.querySelector(".play-overlay");

    // Click on overlay (play button) - play video
    overlay.addEventListener("click", (e) => {
      e.stopPropagation();

      // Pause any currently playing video
      if (currentlyPlaying && currentlyPlaying !== video) {
        currentlyPlaying.pause();
        currentlyPlaying.currentTime = 0;
        const prevOverlay = currentlyPlaying
          .closest(".video-item")
          .querySelector(".play-overlay");
        prevOverlay.style.opacity = "1";
        prevOverlay.style.pointerEvents = "auto";
      }

      // Play this video
      video.play();
      overlay.style.opacity = "0";
      overlay.style.pointerEvents = "none";
      currentlyPlaying = video;
    });

    // Click on video while playing - pause and show overlay
    video.addEventListener("click", () => {
      if (!video.paused) {
        video.pause();
        video.currentTime = 0;
        overlay.style.opacity = "1";
        overlay.style.pointerEvents = "auto";
        currentlyPlaying = null;
      }
    });

    // When video ends - show overlay again
    video.addEventListener("ended", () => {
      overlay.style.opacity = "1";
      overlay.style.pointerEvents = "auto";
      currentlyPlaying = null;
    });
  });

  // Update indicator on scroll
  carousel.addEventListener("scroll", () => {
    const scrollLeft = carousel.scrollLeft;
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    const scrollRatio = scrollLeft / maxScroll;
    currentIndex = Math.round(scrollRatio * maxIndex);
    updateIndicator();
  });

  // Initial indicator
  updateIndicator();
});
