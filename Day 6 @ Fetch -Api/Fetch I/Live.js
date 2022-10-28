// road trip here with car
// 4 people are going to gao via car ,,,
// real life of the people  with luggage
// destination is Goa
// recuire is Root ,,,,google map, insite your car,,,,

// lets trangion real world to js world
// the road that in the internet

// in term of road in internet the raod is URL
// server of Youtube server
// type the url get back data
// there is server where all the data already present
// who allows you to road trip on different type site on internet
// that is API ....the tool is fetch => fetch means fetch water ,,, it means to access something or to bringing something
// the fetch root is  internet
// for the groceries the tool is bag
// they are going to take time  ==> wait
// either be successfull or not
// Goa trip 90% fail

// the First tool is Fetch
// 2nd tool is async await

// Online store just getting the data
// fakestore api

// const url = `https://fakestoreapi.com/products`; // declaraed with const so that no one can change this later



/*
const url = `https://reqres.in/api/users?page=2`;  //(reqres.in api)

const container = document.getElementById('container')

//let res;     // making global because it will accessible for appendData(res) function

// let x = fetch(url);
// console.log('x:', x) // ==> its a promise because it takes time to load data

fetch(url)
  .then(function (res) {
    // console.log('res:', res) ==> give only responses in ReadableStream not the data
    return res.json(); // .json() ==> collecting the data   ... 2 promises because  , first promise is to get some respone and second one is to collect data.....
    //==> trying to  collect the data from the  Stream to compiled data
    // res.json().then(function(res){
    //     console.log('res:', res)
  })
  .then(function (res) {
    console.log("res:", res);
    appendData(res);  // function is calling here because data is ready here or data came here
  })

  .catch(function (error) {
    console.log("error:", error);
  });






function appendData(data) {
  console.log('data:', data)  // undefined
  data.forEach(function (el) {
    // execute this function for each single object

    let div = document.createElement("div"); // creating div because app those property will append/ show here

    let title = document.createElement("p"); // creating p for the title

    title.innerText = el.title; // el.title will give the title value; make sure write the value as it is in the api data

    let price = document.createElement("p");

    price.innerText = el.price;

    let image = document.createElement("img");

    image.src = el.image;

    div.append(image, title, price);

    container.append(div)
  });
}

//appendData(res);   // Error:::=> Uncaught TypeError: Cannot read properties of undefined (reading 'forEach') // forEach read on Array 

*/





// Now fetch with reqres.in api 





// // let url2 = `https://fakestoreapi.com/products`;

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

// fetch(`https://reqres.in/api/users?page=2`)
//   .then(function (res) {
//     res.json().then(function (res) {
//       console.log("res:", res);
//        dataAppend(res.data);
//     });
//   })
//   .catch(function (error) {
//     console.log("error:", error);
//   });

// function dataAppend(data) {
//   data.forEach(function (element) {    // foreach or map will use only on array
//     let div = document.createElement("div");

//     let first_name = document.createElement("h1");

//     first_name.innerText = element.first_name;

//     let last_name = document.createElement("h2");

//     last_name.innerText = element.last_name;

//     let avatar = document.createElement("img");

//     avatar.src = element.avatar;

//     // let description = document.createElement("p");

//     // description.innerText = element.description;

//     div.append(avatar, first_name, last_name);

//     Container.append(div);
//   });
// }





// OMDB API 






