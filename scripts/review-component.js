fetch("../components/reviews/average-review.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.getElementById("average-review-component").innerHTML = data;
  });

fetch("../components/reviews/review-stats.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.getElementById("review-stats-component").innerHTML = data;
  });

fetch("../components/reviews/review-action.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.getElementById("review-action-component").innerHTML = data;
  });

fetch("../components/reviews/review-sort-by.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.getElementById("review-sort-by-component").innerHTML = data;
  });

fetch("../components/reviews/diamond-authentic.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.getElementById("diamond-authentic-component").innerHTML = data;
  });

fetch("../components/reviews/review-list.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.getElementById("review-list-component").innerHTML = data;
  });
