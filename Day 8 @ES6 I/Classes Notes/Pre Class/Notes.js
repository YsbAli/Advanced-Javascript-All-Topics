/*

   --- Intoduction :---

 ECMAScript 6 was the second major revision to JavaScript.
 ECMAScript 6 is also known as ES6 and ECMAScript 2015.

 ES6 allows you to write the code in such a way that makes your code more modern and readable.
 By using ES6 features, we write less and do more, so the term 'Write less, do more' suits ES6.


*/


// let :-
// The let keyword allows you to declare a variable with block scope.


// Example:-

var x = 10;
// Here x is 10
{
  let x = 2;
  // Here x is 2
}
// Here x is 10


// Const:-

           // The const keyword allows you to declare a constant (a JavaScript variable with a constant value).

          // Constants are similar to let variables, except that the value cannot be changed.

          //Example:-
                                
                        var x = 10;
                        x=20 //works

                        const y = 2;
                        y=5 //will throw an error


// Arrow Function :-

     // Arrow functions are a simpler and more compact way of writing functions in JavaScript.
    //  Two factors influenced the introduction of arrow functions: 
   //  the need for shorter functions and the behavior of the this keyword.                      


//    ES5 Syntax:-

//    function(argument){
//     //    ... do something..... 

// }



// ES6 Syntax:-

// (args) => {
//     do something
// }

// or 

// (arg) => {} 
// the parantheses () are sometimes optionsal depending on no of arguments you have
// The curly brackets {} are also sometimes optional 


// 1.

double = (x) => {
    return x*2
    }
//or
double = x => x*2
//or
double
//is the same as

function double(x){
    return x*2
}



// 2.

var elements = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  
  var a,b,c,d,e,f,g;

  // This statement returns the array: [8, 6, 7, 9]
  a = elements.map(function(element) {
    return element.length;
  });
  
  // The regular function above can be written as the arrow function below
  b = elements.map((element) => {
    return element.length;
  }); // [8, 6, 7, 9]
  
  // When there is only one parameter, we can remove the surrounding parentheses
  c = elements.map(element => {
    return element.length;
  }); // [8, 6, 7, 9]
  
  // When the only statement in an arrow function is `return`, we can remove `return` and remove
  // the surrounding curly brackets
  d = elements.map(element => element.length); // [8, 6, 7, 9]


// 3.

//   Arrow functions do not have their own this keyword property.

var obj = { // does not create a new scope
    i: 10,
    b: () => console.log(this.i, this),
    c: function() {
      console.log(this.i, this);
    }
  }
  
  obj.b(); // prints undefined, Window {...} (or the global object)
  obj.c(); // prints 10, Object {...}


/*


  -----for of loop :------

  -The JavaScript for/of statement loops through the values of iterable objects.

  -for/of lets you loop over data structures that are iterable such as Arrays, Strings.

  -The for/of loop has the following syntax:

for (variable of iterable) {
  // code block to be executed
}
variable - For every iteration, the value of the next property is assigned to the variable. Variable can be declared with const, let, or var.

iterable - An object that has iterable properties.

Looping over an Array

Example:-

var cars = ["BMW", "Volvo", "Mini"];
var x;

for (x of cars) {
console.log(x)

}

*/
