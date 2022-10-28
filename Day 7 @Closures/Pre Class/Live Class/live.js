// hotstar Search bar

console.log("Hello its Working");

//let url = `https://www.omdbapi.com/?s=${name}&apikey=d806bd70`  //omdb api  `https://www.omdbapi.com/?s=${name}&apikey=d806bd70`);

//   try{

//   }
//   catch(){

//   }

// try will give success result and catch will give error result

/*




let movies_div = document.getElementById("movies");

async function searchMovies() {
  try {
    const query = document.getElementById("query").value;

    let res = await fetch(
      `https://www.omdbapi.com/?s=${query}&apikey=d806bd70`
    );

    let data = await res.json();
    console.log("data:", data);

    const movies_data = data.Search;
    // appendMovies(movies_data);                        // removing the data because of assemble funciton
     
    
    return movies_data;                                    // async function always give the data inform of promise
  } catch (err) {
    console.log("err:", err);
  }
}

function appendMovies(data) {
  // data is undefined ...
  // optimization #1

  if (data === undefined) {
    return false;
  }
  // optimization #2
  movies_div.innerHTML = null; //

  data.forEach(function (element) {        // forEach will give us data as undefined because here data form is : array of Object 
    let p = document.createElement("h4");

    p.innerText = element.Title;
    movies_div.append(p);
  });
}

// :- there are two function till now  have assemble into 1 function

// Goal Number 1. is : assemble then into one function

async function Main() {
   
  let data = await searchMovies()
  console.log('data:', data)




}



*/

// DOING OPTIMIZATION IN IUR TWO GOAL ,,,,,,
// 1ST ONE IS ASSEMBLE THOSE TWO FUNCTION INTO ONE FUNCTION

// :- there are two function till now  have assemble into 1 function

// Goal Number 1. is : assemble then into one function

// Goal Number 2. is : call Main() function in input html tag




let movies_div = document.getElementById("movies");
let id;

async function searchMovies() {
  try {
    const query = document.getElementById("query").value;

    let res = await fetch(
      `https://www.omdbapi.com/?s=${query}&apikey=d806bd70`
    );

    let data = await res.json();
    console.log("data:", data);

    const movies_data = data.Search;

    return movies_data;
  } catch (err) {
    console.log("err:", err);
  }
}

function appendMovies(data) {
  // optimization #2
  movies_div.innerHTML = null; //

  data.forEach(function (element) {
    let p = document.createElement("h4");

    p.innerText = element.Title;
    movies_div.append(p);
  });
}

//1. We will Assemble them in one function

async function Main() {
  let data = await searchMovies();

  // data in undefined
  // optimization #1

  if (data === undefined) {
    return false;
  }
  appendMovies(data);
}

//2. Debouncing

function Debounce(func, deley) {
  if (id) {
    clearTimeout(id);
  }

  id = setTimeout(function () {
    func();                          // fucn() = Main()   ;;; deley = time = 1 sec = 1000 ms
  }, deley);
}


