fetch("../components/layout/header.html")
  .then((res) => res.text())
  .then((html) => (document.getElementById("header").innerHTML = html));

fetch("../components/layout/footer.html")
  .then((res) => res.text())
  .then((html) => (document.getElementById("footer").innerHTML = html));
