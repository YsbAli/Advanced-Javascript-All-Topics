



// We Problem1:
//          Create e-commerce products database by accepting value through a form;



// After creating form,,,,

// function storeProducts(e){
//     e.preventDefault();

//     let form = document.getElementById('products');

//     let name = form.name.value; // => here name referes the id
//     console.log('name:', name)
//     let price = form.price.value;  // price = id
//     console.log('price:', price)
//     let brand = form.brand.value; // brand = id
//     console.log('brand:', brand)
// }
/*


// now add constructor function to defalut add value ;

let arr = [];

function Products(n, p, b) {
  this.name = n;
  this.price = p;
  this.brand = b;
}

function storeProducts(e) {
  e.preventDefault();

  let form = document.getElementById("products");

  let name = form.name.value; // => here name referes the id
  let price = form.price.value; // price = id
  let brand = form.brand.value; // brand = id

  //written 'new' keyword because afer line no. 48 all value or products data will be shared or passed through form ;

  let p1 = new Products(name, price, brand);
  arr.push(p1); //all the products which we will type in the form, will be added here in the arr
  console.log("arr:", arr);
}
*/




/*

// Now create student management system


let arr = [];

function StudentsData(n, a, b) {
  this.name = n;
  this.age = a;
  this.batch = b;
}

function storeStudentsData(e) {
  e.preventDefault();

  let form = document.getElementById("products");

  let Names = form.name.value; // => here name referes the id
  let Ages = form.age.value; // age = id
  let Batchs = form.batch.value; // bacth = id

  //written 'new' keyword because afer line no. 48 all value or products data will be shared or passed through form ;

  let p1 = new StudentsData(Names, Ages, Batchs); // here the values will be the variable names (line no. 71, 72, 73)
  arr.push(p1); //all the products which we will type in the form, will be added/stored here in the arr .... 
               //   in the console the arr name is the function name like arr [StudentsData]
  console.log("arr:", arr);
}



// Students Management System Ends here 

*/






/*

// Call Apply Bind  Starts here.................



let kitchen = {
    name: 'kitchen',
    porpuse :'cook',
    cookFood : function(order,time){
        console.log(`serving ${order} by ${time} minutes from ${this.name}`)
    }
}

let living_room = {
    name : "living Room",
    porpuse : 'watching Tv'
}
let bedroom = {
    name : "bedroom",
    porpuse : 'sleep'
}

kitchen.cookFood("maggie") //=> serving maggie from kitchen
//now if I want to change the owner object this = living_room, So we need to write

kitchen.cookFood.call(living_room,"maggie") // => serving maggie from living Room

// similerly we can change any awner abject 

kitchen.cookFood.call(bedroom,"maggie") // => serving maggie from bedroom


// we can pass many parameters also 

kitchen.cookFood.call(kitchen, 'maggie', 30)  //=> serving maggie by 30 minutes from kitchen





// Now we can do same work using Normal Function also 


let kitchen2 = {
    name : "Kitchen",
    porpuse : "Ranna Kora"
}

let living_room2 ={
    name:"Living Room",
    porpuse : "Watching TV"
}
let bedroom2 = {
    name : "Bed Room",
    porpuse : "Sleep"
}

function CookFood(order,time){
    console.log(`${order} Ready ho66ey from ${this.name} by ${time} Minutes`)
}

CookFood.call(bedroom2, "puri", 25)  // => puri Ready ho66ey from Bed Room by 25 Minutes

// Apply Method  => Same as Call method but it just takes single array as arguments

CookFood.apply(bedroom2, ["Porota", 30]); //  => Porota Ready ho66ey from Bed Room by 30 Minutes



// bind Method 


let BindMethod = CookFood.bind(kitchen2, "Biriyani", 30)
console.log('BindMethod:', BindMethod)   // this will print whole CookFood Function, so we need to executed or call the function or executed the function
 
BindMethod();  // => Biriyani Ready ho66ey from Kitchen by 30 Minutes



*/