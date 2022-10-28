// closure is releted to Function

function greet() {
  let n = "shan";  //n is going to garbeg
  return function () {
    console.log(n);
  };
}

// console.log(greet()) // it will return the return function

let x = greet();

x();
