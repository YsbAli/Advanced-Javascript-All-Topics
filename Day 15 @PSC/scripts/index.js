/*
Acces Key : "-lDByEVm5wX4_JnX4RsqLfzjEXNQ0PUKP8DmSbQDfwA"

Secret Key : "zb2JLqYI1Q7ctFvstnUvFzLQgfaXzX27DewxrjF-AH4"

Base Url : https://api.unsplash.com/


Api Url : https://api.unsplash.com/search/photos/?query=${value}&per_page=20client_id=YOUR_ACCESS_KEY


Search Image End Point : GET /search/photos

query : to write query --->?query=${value}

it will give thousands of data do we have to limit per page, SO to do that : --->

per_page : &per_page=20


cliend Id : https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY           So,our finall api is --->


Finall Api :  https://api.unsplash.com/search/photos/?query=cat&per_page=20&client_id=lDByEVm5wX4_JnX4RsqLfzjEXNQ0PUKP8DmSbQDfwA

*/

const api_key = "-lDByEVm5wX4_JnX4RsqLfzjEXNQ0PUKP8DmSbQDfwA";

import { Navbar } from "../components/navbar.js";
import { searchIMage, append } from "./fetch.js";

let nav = document.getElementById("navbar");

nav.innerHTML = Navbar();

// function for enter key for search :-

const search = (e) => {
  if (e.key === "Enter") {
    // e.key is a event method
    let value = document.getElementById("query").value;
    searchIMage(api_key, value).then((data) => {
      console.log("data:", data);
      let container = document.getElementById("container");
      container.innerHTML = null;
      append(data.results, container);
    });
  }
};

document.getElementById("query").addEventListener("keydown", search); // we can use onkeydown,onkeyup, onkeypress event for search through enter button //  our query is in the module file but we cant invoke there ,,so that's why we are invoking search function here

// Now Search by name

let catagories = document.getElementById("categories").children; //we have array of elements, want to add same function in every element,to do That:-                                         // it will give all the children of categories id

// let CategoriSearching = () => {              arrow function does not have this property
//   console.log(this.id);
// };

// console.log('catagories:', catagories)
// catagories.forEach((el) =>{
//     el.addEventListener('click', CategoriSearching)
// })

function CategoriSearching() {
  console.log(this.id);                                                                   // we got our value here,
  searchIMage(api_key, this.id).then((data) => {
    console.log("data:", data);
    let container = document.getElementById("container");
    container.innerHTML = null;
    append(data.results, container);
  });
}

for (let i of catagories) {
  i.addEventListener("click", CategoriSearching);
}

/* 


we have import this function 
 
// now we have to fatch our data

const searchIMage = async () => {
  let value = document.getElementById("query").value;

  try {
    let res = await fetch(
      `https://api.unsplash.com/search/photos/?query=${query}&per_page=20&client_id=${api_key}`
    );

    let data = await res.json();
    console.log("data:", data);
  } catch (error) {
    console.log("error:", error);
  }
};


*/
