fetch("../components/issues/issues-list.html").then((res) =>
  res
    .text()
    .then((html) => (document.getElementById("issues-list").innerHTML = html))
);
