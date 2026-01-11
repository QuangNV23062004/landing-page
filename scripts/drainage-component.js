fetch("../components/drainage/drainage-system.html")
  .then((res) => res.text())
  .then((html) => {
    document.getElementById("drainage-component").innerHTML = html;
  });
