
console.log("Hello World");


// *****************************PRE CLASS STARTS********************************


/*
let obj = {
    name: 'yousub',
    age: 22,
    city:'Kolkata',
    marks: function (){
        console.log('this is marks Sections');
    }
}

 console.log(obj.name); => yousub

 */





/*

 "this" helps us to create object using function :=>

var person = {
  name: "Ishan",
  age: 23,
  myName: function () {
    //    console.log(person.name, person.age); => Ishan 23
    // console.log(this.name, this.age) => Ishan 23
    // console.log(this) =>  this refers to the parent object; here this = person.   {name: 'Ishan', age: 23, myName: ƒ}

    console.log(this);
  }
}

// console.log(person.name, person.age) => Ishan 23

person.myName();

*/




/*

// Now we can create multiple objects using new keyword


function Person(n,a,c){
    this.name = n,
    this.age = a,
    this.city = c
}

let obj1 = new Person("Ishan", 23, "Kolkata");
console.log('obj1:', obj1)  => Person {name: 'Ishan', age: 23, city: 'Kolkata'}
let obj2 = new Person("Yousub", 22, "Cooch Behar");
console.log('obj2:', obj2)
let obj3 = new Person("Xtylish", 23, "Barasat");
console.log('obj3:', obj3)
let obj4 = new Person("Shan", 23, "Talyajnge");
console.log('obj4:', obj4)
let obj5 = new Person("Arjun", 23, "Bangluru");
console.log('obj5:', obj5)


*/



// Call   Apply    Bind




let person ={
    name : 'Yousub'
}


let person2 ={
    name : 'Ishan'
}


let person3 ={
    name : 'Shan'
}


function Myname(a){
    // console.log(this.name);
    this.age = a;
}

// Myname.call(person) => Yousub
// Myname.call(person2) => Ishan
// Myname.call(person3) => Yousub

Myname.call(person, 23)
// console.log('person:', person) => person: {name: 'Yousub', age: 23}

Myname.call(person2, 23)
//  console.log('person2:', person2) => person2: {name: 'Ishan', age: 23}

Myname.call(person3, 23)
// console.log('person3:', person3) => person3: {name: 'Shan', age: 23}


// We can pass Many Parameters Also:

function Name(n,a,c){
    this.name = n;
    this.city =c;
    this.age = a;
}

Name.call(person, "Bipul", 23, 'Situlkuchi' );
// console.log('person:', person) => person: {name: 'Bipul', age: 23, city: 'Situlkuchi'}

// Apply Takes a single array of arguments

Name.apply(person2, ["Sourav", 23, 'Ghat'] );
// console.log('person2:', person2) => Same Output
// console.log('person2:', person2)  => person2: {name: 'Sourav', age: 23, city: 'Ghat'}


Name.bind(person3, "Diponkor", 24, 'Ghughumari' );
// console.log('person3:', person3) => person3: {name: 'Diponkor', age: 24, city: 'Ghughumari'}




//Bind Method => You can bind a perticuler object as 'this' to a function and use it later;

let MyBind = Name.bind(person3, "Diponkor", 24, 'Ghughumari' );
// console.log('MyBind:', MyBind) => This will Print the Whole MyBind function
MyBind();

console.log('person3:', person3)










// *****************************PRE CLASS ENDS********************************


