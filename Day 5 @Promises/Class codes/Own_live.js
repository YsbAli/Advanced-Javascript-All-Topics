// let img = document.getElementById('image')

// function checkTransaction() {
//   //.....
//   return true;
// }

// const myPromise = new Promise(function (resolve, reject) {
//   let transaction_status = false;

//   setTimeout(() => {
//     transaction_status = checkTransaction();

//     if (transaction_status === true) {
//       resolve("Payment Successfull");
//     } else {
//       reject("Payment Failed");
//     }
//   }, 3000);
// });

// myPromise
//   .then(function (res) {
//     console.log("res:", res);
//     // image.style.display = 'none'
//     image.src = 'https://media4.giphy.com/media/d2Z4rTi11c9LRita/200w.webp?cid=ecf05e47pdxml6xwewuu2rh0n20wvhupuel6jyymxo8sujk0&rid=200w.webp&ct=g'
//     alert("Success");

//   })
//   .catch(function (error) {
//     console.log(" this is my edfghdfgrrror:", error);
//     image.src = 'https://media1.giphy.com/media/https://media0.giphy.com/media/d2W7eZX5z62ziqdi/100.webp?cid=ecf05e47x3ia8vokjva4qgbqquipj6w02plo8zn5klr6uimx&rid=100.webp&ct=g/giphy360p.mp4?cid=ecf05e47rri0ygzsd9g6pr9v9v7b7d1v7yvc39be4dirltvy&rid=giphy360p.mp4&ct=v&cc=en' // if you want to show error in image or something else
//     alert("Payment Fail")
//   });

// Step 7:

// let url1 = " www.google.com/gif.meme";
// let url2 = " www.google.com/gif.meme";
// let url3 = " www.google.com/gif.meme";

// function download(url) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log(`Downloding ${url}`);
//     }, 2000);

//     resolve(url);
//   });
// }

// function Process(url) {
//   console.log(`Processing ${url}`);
// }

// download(url1).then(function (res) {
//   Process(url1);

//   download(url2).then(function (res) {
//     Process(url2);

//   download(url3).then(function (res) {
//     Process(url3);

//      });
//   });
// });

// STEP 8:  Async Await

// let url1 = " www.google.com/gif.meme";
// let url2 = " www.google.com/gif.meme";
// let url3 = " www.google.com/gif.meme";

// function download(url) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log(`Downloding ${url}`);
//       resolve(url);
//     }, 2000);
//   });
// }

// function Process(url) {
//   console.log(`Processing ${url}`);
// }

// async function main() {
//   let d1 = await download(url1);
//   Process(d1);
//   let d2 = await download(url1);
//   Process(d2);
//   let d3 = await download(url1);
//   Process(d3);
// }
// main();

// MC DOnald Assignments:

function orderFood(){
  let order = document.getElementById("food").value;
  let status = "open";
  let myPromise = new Promise(function (resolve, reject) {
    let time = Math.random() * 10 * 1000;
    setTimeout(function (){
      if (status === "open") {
        resolve(order); // return order
      } else {
        reject("Order Rejected");
      }
    }, time);
  });

  myPromise.then(function (res) {
    console.log(`${res} is ready`);
  });
}
