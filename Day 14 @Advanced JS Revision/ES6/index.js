// Creating Our Own Json-Server

// fetch(`http://localhost:3000/posts`)
//   .then((res) => res.json())
//   .then((data) => {
//     console.log("data:", data);
//     console.log("data:", data.create);
//   })
//   .catch((error) => {
//     console.log("error:", error);
//   });

///////////////////////////////////////////////////Other Method /////////////////////////////

// fetch(`http://localhost:3000/posts`,{
//     method:"GET",
//     headers :{
//         "Content-Type" :"application/json"
//     }
// })
//   .then((res) => res.json())
//   .then((data) => {
//     console.log("data:", data);
//     console.log("data:", data.create);
//   })
//   .catch((error) => {
//     console.log("error:", error);
//   });







// const app = document.getElementById("app");

// function sum(a, b) {
//   return a + b;
// }

// app.innerText = sum(3, 7);



import sum from "./math.js"

  const app = document.getElementById('app')

  app.innerText = "Home Sum is :" + sum(3,7);
