fetch("../components/logo/logo-scroll.html")
  .then((res) => res.text())
  .then((html) => (document.getElementById("logo-scroll").innerHTML = html));
