fetch("../components/videos/videos.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("videos-component").innerHTML = html;
  });
