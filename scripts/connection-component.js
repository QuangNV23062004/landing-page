fetch("../components/connection/connection-missing.html")
  .then((res) => res.text())
  .then(
    (html) => (document.getElementById("connection-component").innerHTML = html)
  );
