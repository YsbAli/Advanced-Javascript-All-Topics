/*

// Normal Function

function test(){
    console.log("Hello WOrld");

}

// Assignment Function 

let test = function test(){
    console.log("Hello WOrld");
}


// Arrow Function 

let test =()=>{
    console.log("Hello WOrld");
}



//  forEach(callback function(element))

let arr = [1,3,4,5,7,8]

arr.forEach((el)=>{
console.log('el:', el)
})






var myobj ={
    i : 10,
    b: ()=>{
    console.log(this.i, this)
    },
    c: function (){
        console.log(this.i, this)
    }
}

myobj.b()  //  undefined Window:{}  (the global obj)
myobj.c() //  10   ,,,, { i: 10, b: [Function: b], c: [Function: c] }



*/

/*

// For of Loop 


let arr = [3,5,7,8,9]

for(let x of arr){
    console.log('x:', x)   // 3, 5,7,8,9

    
}



let str = 'masai'

for(let x of str){
    console.log('x:', x)   // m a s a i

    
}



*/

/*


// Destructuring

const user = {
  name: "ishan",
  age: 23,
  city: "Kolkata",
};

// old method (ES5)

// let name1 = user.name
// console.log('name:', name)  //ishan
// let age = user.age
// console.log('age:', age)  //23

// Destructuring

// let { name,city,x} = user;
// console.log('city:', city)  // Kolkata
// console.log('name:', name) // name : ishan
// console.log('x:', x)      //   x: undefined //have to type value that is present in the object,,,something that is not present in the object then it will print undefined

// why do we have this curly bracket {} ?
// because its kind of mimic the structure that we have defined  (here user )




//------------- Uses of Desturcture -----------------



// fetch(`https://www.omdbapi.com/?s=avengers&apikey=d806bd70`)

fetch(`https://reqres.in/api/users/2`)
.then((res) => {
  return res.json().then((res) => {
    // console.log('res:', res)         // give us data

    let data = res.data;             // give all data
    console.log("data:", data);
       
    // want to access name and email 


    // using normal:-

    // let name = data.first_name
    // let email = data.email



    // using Destructuring :-

   let {first_name,email}  = data;
   
   console.log('first_name:', first_name)
   console.log('email:', email)


  });
});






// if you want to write your own variable then we should write like this:

const user = {
  name: "ishan",
  age: 23,
  city: "Kolkata",
};


let { name: anything, city } = user;
console.log('anything:', anything)          //==> anything: ishan





// Destructing with function 


const user = {
    name: "ishan",
    age: 23,
    city: "Kolkata",
  };


//   Normal ways :-

//   function Print(n){
//     console.log(n.name, n.age, n.city);
//   }
//   Print(user);   //==> output is : ishan 23 Kolkata


  // Destructuting :-

  function Print({name, age, city}){
    console.log(name,age,city)    //output : ishan 23 Kolkata
  }
  
  Print(user);









// ____________________________ Spread Operator__________________________

//    --- for Merging 
// we use Spread Operator to merge something like arrays, objects


// 1. Array 

// to merge this two array we use will use the spread operator \

// let color1 =['red','green','blue']

// let color2 = ['yellow','white', 'violet']


// let color3 =[...color1,'yellow','white', 'violet' ]
// console.log('color3:', color2)


// 2.Obejct 



let user1 = {
    name :'Ishan',
    age : 23,
}

let user2 ={
    city : "Kolkata",
    hometown:"Cob"
}
 
const details ={...user1, ...user2};
console.log('details:', details)     // details: { name: 'Ishan', age: 23, city: 'Kolkata', hometown: 'Cob' }




// 3. Sting 

let str = [ "A", ..."EIO","U"]
console.log('str:', str)           //Output str: [ 'A', 'E', 'I', 'O', 'U' ]




// _____________________________REST OPERATOR_________________________________

// rest of the key value parameters


// 1.Obejct

const user1 = {
  name: "Ishan",
  age: 23,
  city: "Kolkata",
  hometown: "Cob",
};

const { name, ...x } = user1;
console.log("x:", x); // output will be {age:23, city:'Kolkata', hometown:"Cob"}



// 2. Array

//Declared a array and print sum of its elements using function with  rest operator


function PrintArray(...a) {
  //console.log('a:', a)           // [10,20, 30]

  let sum = 0;
  for (let num of a) {
    sum += num;
  }

  console.log("sum:", sum);             // sum: 60
}  

PrintArray(10, 20, 30);    


*/


//  ____________________Topics We have Learnt_____________________


// let, const
// arrow functions
// destructuring
// for of loop
// spread, rest









