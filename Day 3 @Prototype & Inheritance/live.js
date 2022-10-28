console.log("Hello World! It's Working");

// cat ecosystem

// const cat = {
//   legs: 4,
//   tail: true,
//   furs: true,
//   claws: "sharp",
// };

// const lion = {
//   legs: 4,
//   tail: true,
//   furs: true,
//   claws: "sharp",

//   speed: "60kph",
//   color: "Orange",
// };

// const tiger = {
//   legs: 4,
//   tail: true,
//   furs: true,
//   claws: "sharp",

//   speed: "90kph",
//   color: "Yellow",
// };

// Efficient Way --- Object.create()

// const lion = Object.create(cat)
// lion.speed = '60kph'
// console.log('lion:', lion)
// console.log('lion', lion.legs) //==> 4
// const tiger = Object.create(cat)
// console.log('tiger:', tiger)

// const liger = Object.create(lion);

// can i add 2 prototype ==> No, We can't ;

//prototype = inheritance
// DNA = Inheritance ? ==> No
// Inheritance is  Idea

// WE PROBLEM
// Create a web 17 Students database using Object.create()

// const Students_Data ={
//     Batch :"Web17",
//     Unit: 3,
//     Instuctor :"SK",
// }

// const Student1 = Object.create(Students_Data)
// console.log('Student1:', Student1)
// Student1.name ='Yousub';
// Student1.age = 23;

// const Student2 = Object.create(Students_Data)
// const Student3 = Object.create(Students_Data)
// const Student4 = Object.create(Students_Data)
// const Student5 = Object.create(Students_Data)
// const Student6 = Object.create(Students_Data)

// BUT WHERE ARE THE PROPERTIES STORED? (INHERITANCE PROPERTIES)

// Why its called prototypal inheritance ?
// => because we use prototype here.
// Prototype is a tool and inheritance is a idea, we use this idea useing prototype that's why its called Prototypal inheritance

// video 42:30 sec

// Inheriatnce using Constructor Function

// ...Where do this properties gets added ?
// ==>  so its in the Object .it create in the Object

// function Student(n,u){
//     this.name = n;
//     this.unit = u;
// }

// let s1 = new Student("Ishan", 3)
// console.log('s1:', s1)

// So if we want to add in the prototype using CF we need to use CF Rools,

// so now we have to use ( .prototype  )

// this is used to add in the Function

// function Student(n,u){
//     this.name = n;
//     this.unit = u;
// }
// Student.prototype.course = 'FSWB';

// Student.prototype.bio = function (){
//     console.log(`Hello From ${this.name}`)   // // this is used to add in the Function
// }

// let s1 = new Student("Ishan", 3)
// s1.bio()   // output is ==> Hello From Ishan(s1.name) // Calling the Function // this is used to add in the Function
// console.log('s1:', s1)

// PROBLEM 2

// Create a flipkart shoes product catalogue and add coupon as protype method

// function Products(b,s,p){
//     this.brand =b;
//     this.size = s;
//     this.price = p;
//     this.seller = 'Flipkart'
// }
// Products.prototype.coupon = function (){
//       console.log('20% discount on this is product') // this function will be added in prototype section
// }

// let p1 = new Products('Nike', 7, 2000)
// console.log('p1:', p1)
// p1.coupon()   // ====> 20% discount on this is product

// let p2 = new Products('Adidas', 10, 3000)
// console.log('p2:', p2)
// let p3 = new Products('Nike', 7, 2000)
// let p4 = new Products('Nike', 7, 2000)
// let p5 = new Products('Nike', 7, 2000)
// let p6 = new Products('Nike', 7, 2000)
// let p7 = new Products('Nike', 7, 2000)
// let p8 = new Products('Nike', 7, 2000)
// let p9 = new Products('Nike', 7, 2000)
// let p10 = new Products('Nike', 7, 2000)
// let p11 = new Products('Nike', 7, 2000)

// Everything in Js is OBJECT

// String :

// let str = 'Masai';
// str.length

// console.log(str.__proto__)

//  Array :

// let arr =[2,4,5]
// console.log('arr:', arr)

// arr.pop()

// Object :

// let obj ={
//     name : 'Ishan'
// }

// console.log(obj.__proto__)

// Lets Play with JAVASCRIPT

//   Prototype of Array is - Array Constructor Function

// let arr = [1,3,5]

// arr.__proto__.myProp = 'random';

// console.log(arr.myProp);  // random

// let arr2 =[2,5,7]

// console.log(arr2.myProp)  // ==> random

// let Arr =['id', 'Roll', 20]

// Arr.__proto__.Ishan = "Hello I am Ishan Method";

// console.log(Arr.Ishan); // ==> Hello I am Ishan Method

// Arr.__proto__.Shan = function(){
//    console.log('Hello This is Shan Function');

// }
// Arr.Shan() //==> Hello This is Shan Function














// (VIDEO : 1:25:10)

// Create Custom Hindi Array Function (our own custom array staff)

// let a1 = new Array(1,3,4)

// a2 = [1,3,4]  //we write this to use easyli
// console.log('a1:', a1)

// let a3 = new myArray("x",'y','z')

function myArray() {
  //this.length = 3 // if we write like this our array length always will be 3, it will not be dynamic. so we ignore this
  //WE should write arguments object
  //console.log(arguments);
   
   Object.defineProperty(this, 'length',{
      value: 0,
      writable : true,       // writable = editable 
      enumerable : false    // enumerable = you can loop throw it,..go throw it....don't count this property
   });

  this.length = arguments.length;

  //    0:x;
  //    1:y;
  //    2:z;

  // LHS(index) = RHS(value)  //should be

  for (let i = 0; i < this.length; i++) {
    // console.log('i:', i)
    this[i] = arguments[i];
  }
}

// let a3 = new myArray("x", "y", "z");
// console.log("a3:", a3); // getting the arguments and value till this part


let a4 = new myArray('x','y', 'x'); 
                                     //console.log('arr:', arr) //==> arr: myArray {0: 'x', 1: 'y', 2: 'x', length: 3} ...it does not look like an array, //so to look like  Array we should write Object.value(arr)
 
// console.log("a4",Object.values(a4))  // it will look like the Actuall Array ["x",'y',"z"]

//want to do something like :  a4.push('c') == a4.jogkoro("c");
// a4.jogkoro("c");
// now we want to add our own push method in your own Native language,,,,to do that we need to do like:

// own push method 

myArray.prototype.jogkoro = function(value){
    let index = this.length;
    this[index] = value;
    this.length++;
};

a4.jogkoro("a");
a4.jogkoro("b");
a4.jogkoro('74034979348')

// console.log("a4" , Object.values(a4))

// own pop method 


myArray.prototype.popkoro = function(){
    let index = this.length - 1;
    delete this[index];
    this.length--;
}

a4.popkoro();



// console.log("a4" , Object.values(a4))










































// Writing Fresh code  ........Hacking JavaScript

function myArray() {

    Object.defineProperty(this, 'length',{
        value: 0,
        writable : true,      
        enumerable : false    
     });

  this.length = arguments.length;

  for (let i = 0; i < this.length; i++) {
    this[i] = arguments[i];
  }
}

let arr = new myArray('x','y', 'x'); 


myArray.prototype.dhukao = function (value){
    let index = this.length;
    this[index] = value;
    this.length++;
}


myArray.prototype.berkoro = function(){
    let index = this.length - 1;
    delete this[index];
    this.length--;
}


arr.dhukao('w')
arr.dhukao('a')
arr.dhukao('c')
arr.dhukao('v')
arr.dhukao('6')
arr.dhukao('er')
arr.dhukao('wrg')


arr.berkoro();
arr.berkoro();
arr.berkoro();

// console.log("arr" , Object.values(arr))



// ...................................................................................... 





// Write Owr Own Array :->

function MyOwnArray(){
        Object.defineProperty(this,'length',{
            value :0,
            writable :true,
            enumerable:false
        })

    this.length = arguments.length;
    for(i=0; i<this.length; i++){
        this[i] = arguments[i];
    }
}

let array = new MyOwnArray('Yousub','Ishan','Subbu');
// console.log('array:', Object.values(array));



// Now write our own array Methods :->

MyOwnArray.prototype.jogkoro = function(value){
    let index = this.length;
    this[index] = value;
    this.length++;
}

MyOwnArray.prototype.berkoro = function(){
    let index = this.length - 1;
    delete this[index]
    this.length--;
}


array.jogkoro("Opia")
array.jogkoro("Piya")
array.jogkoro("Subbupia")
array.jogkoro("Jantus")
array.jogkoro("Sultana")
array.jogkoro("Jesmin")


// console.log('array:', Object.values(array))


// array.berkoro();
// array.berkoro();
// array.berkoro();
console.log('array:', Object.values(array))