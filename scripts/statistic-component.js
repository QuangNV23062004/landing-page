fetch("../components/statistics/statistics.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("statistics-component").innerHTML = html;
  });
