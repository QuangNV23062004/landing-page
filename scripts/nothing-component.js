fetch("../components/nothing-worked/nothing.html").then((response) =>
  response.text().then((html) => {
    const nothing = document.getElementById("nothing-component");
    nothing.innerHTML = html;
  })
);
