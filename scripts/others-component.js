fetch("../components/others/images-div.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.getElementById("images-div-component").innerHTML = data;
  });
