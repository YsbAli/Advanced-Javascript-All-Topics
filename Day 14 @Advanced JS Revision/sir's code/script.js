const app = document.getElementById("app");

let posts = [];





fetch("http://localhost:3000/posts").then((res) => {
  res.json().then((data) => {
    posts = data;
  });
});

let table = document.createElement("table")
table.appendChild()