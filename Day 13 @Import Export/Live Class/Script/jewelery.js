/*

import navbar from "../component/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

// to get the jewelery data (we use fakestore api )



let getData = async () => {
  try {
    let res = await fetch(
      `https://fakestoreapi.com/products/category/jewelery`
    );

    let data = await res.json(); // collecting data
    console.log("data:", data);
    append(data);
  } catch (error) {
    console.log("error:", error);
  }
};
getData();

let append = (data) => {
  let container = document.getElementById("Jwel_container");

  data.forEach((el) => {
    let p = document.createElement("p");

    p.innerText = el.title;
    let image = document.createElement("img");

    image.src = el.image
    container.append(p,image);
  });
};





*/


// Using Import and Export 




import navbar from "../component/navbar.js";

document.getElementById("navbar").innerHTML = navbar();



let url = 'https://fakestoreapi.com/products/category/jewelery'

let container = document.getElementById('Jwel_container')

import { getData,append } from "./fetch.js";                 //importing the functions




getData(url).then((res) =>{                                   //getData returns Promise
   append(res,container);
})
