fetch("../components/faq/faq.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("faq-component").innerHTML = html;
  });
