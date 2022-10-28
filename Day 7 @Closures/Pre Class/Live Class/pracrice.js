console.log("Working");

const movies_data = document.getElementById("movies");
const query = document.getElementById("query").value;
const url = `https://www.omdbapi.com/?s=${query}&apikey=d806bd70`;

async function searchMovies() {
  try {
    let res = await fetch(url);

    let data = await res.json();
    console.log("data:", data);
    appendData(data.Search);
  } catch (errer) {
    console.log("errer:", errer);
  }
}

function appendData(data) {
  data.forEach(function (ele) {
    if ((data = undefined)) {
      return false;
    }

    let p = document.createElement("p");

    p.innerText = ele.Title;

    movies_data.append(p);
  });
}
