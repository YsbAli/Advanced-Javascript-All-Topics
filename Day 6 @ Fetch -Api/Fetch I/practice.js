// let url = `https://fakestoreapi.com/products`;

// const Container = document.getElementById("container");

// // fetch(url)
// //   .then(function (res) {
// //     return res.json();
// //   })
// //   .then(function (res) {
// //     console.log("res:", res);
// //     dataAppend(res);
// //   })
// //   .catch(function (error) {
// //     console.log("error:", error);
// //   });

// fetch(`https://fakestoreapi.com/products`)
//   .then(function (res) {
//     res.json().then(function (res) {
//       console.log("res:", res);
//       dataAppend(res);
//     });
//   })
//   .catch(function (error) {
//     console.log("error:", error);
//   });

// function dataAppend(data) {
//   data.forEach(function (element) {
//     let div = document.createElement("div");

//     let title = document.createElement("h1");

//     title.innerText = element.title;

//     let price = document.createElement("h2");

//     price.innerText = element.price;

//     let image = document.createElement("img");

//     image.src = element.image;

//     let description = document.createElement("p");

//     description.innerText = element.description;

//     div.append(image, price, title, description);

//     Container.append(div);
//   });
// }


















// OMDB API : My api kew=y is =  e2c7e00a
// My api = https://www.omdbapi.com/?i=tt3896198&apikey=e2c7e00a





let url = `https://www.omdbapi.com/?i=tt3896198&apikey=e2c7e00a`;

const Container = document.getElementById("container");

fetch(`url`)
  .then(function (res) {
    res.json().then(function (res) {
      console.log("res:", res);
      dataAppend(res);
    });
  })
  .catch(function (error) {
    console.log("error:", error);
  });
  

function dataAppend(data) {
  data.forEach(function (element) {
    let div = document.createElement("div");

    let Title = document.createElement("h1");

    Title.innerText = element.Title;

    let Year = document.createElement("h2");

    Year.innerText = element.Year;

    let image = document.createElement("img");

    image.src = element.image;

    let description = document.createElement("p");

    description.innerText = element.description;

    div.append(Title,Year);

    Container.append(div);
  });
}