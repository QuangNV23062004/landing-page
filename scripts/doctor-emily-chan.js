fetch("../components/doctor-emily/doctor-emily.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("doctor-emily-chan").innerHTML = html;
  });
