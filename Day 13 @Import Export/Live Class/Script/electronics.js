/*

import navbar from "../component/navbar.js";

document.getElementById('navbar').innerHTML= navbar();






let getData = async () => {
    try {
      let res = await fetch(
        `https://fakestoreapi.com/products/category/electronics`
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
    let container = document.getElementById("el-product");
  
    data.forEach((el) => {
      let p = document.createElement("p");
  
      p.innerText = el.title;
      let image = document.createElement("img");
  
      image.src = el.image
      container.append(p,image);
    });
  };
  
//   DRY -- Do not Repeat Yourself 




*/



import navbar from "../component/navbar.js";
document.getElementById('navbar').innerHTML= navbar();



let url = 'https://fakestoreapi.com/products/category/electronics'

let container = document.getElementById('el-product')

import { getData,append } from "./fetch.js";                 //importing the functions




getData(url).then((res) =>{                                   //getData returns Promise
   append(res,container);
})












