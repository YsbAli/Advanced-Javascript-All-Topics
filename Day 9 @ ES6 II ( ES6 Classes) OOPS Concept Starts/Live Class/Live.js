/*

Consrructore Function:-

function Person(n,a){
    this.name = n;
    this.age = a;
     
    this.showName = () => {
        console.log(this.name)
    };

}
const p1 = new Person('Raj',20)
p1.showName()
console.log('p1:', p1)







// Now ES6 Classes 


class Person{

    constructor(n,a){
        this.name = n;
        this.age = a;
    }
    
    showName(){
        console.log(this.name)
    }




}

const p2 = new Person("Raj", 23)
console.log('p2:', p2)           // p2: Person { name: 'Raj', age: 23 }

p2.showName()                   // Raj


// so ES6 same as Constructore Function with different syntax

// easy to read





class Cat {
  constructor() {
    this.species = "cat",
    this.legs = 4;
    this.furs = true;
  }
}



class  Tiger  extends Cat {

    constructor(){
         // super()                                     // if we dont write super then will throw an error - Must call super constructor in derived class before accessing 'this' or returning from derived constructor at new Tiger
         super() 
         this.speed = 60; 
    }

}

let t1 = new Tiger ()
console.log('t1:', t1)                                  // t1: Tiger { species: 'cat', legs: 4, furs: true, speed: 60 }





// Passing Parameters 


class Cat {
    constructor(s,l) {
      this.species = s;
      this.legs = l;
      this.furs = true;
    }
  }

  class Tiger extends Cat{
  
      constructor(s,l){                             
           super(s,l) 
           this.speed = 60; 
      }
  
  }



  
//   let t1 = new Tiger ("Cat", 4)
//   console.log('t1:', t1)                           // t1: Tiger { species: 'Cat', legs: 4, furs: true, speed: 60 }
  

// but want to extends  Class Tiger's Property  also : - so All we need to do is -,

 
  class WhiteTiger extends Tiger{
    constructor(s,l){
        super(s,l)

        this.name = "Simba"
    }
  }

let w1 = new WhiteTiger("Whitetiger", 10)      // new WhiteTiger reffering the super keyword that properties are coming from Tiger class

 console.log('w1:', w1)                     //Output is: w1: WhiteTiger {species: 'Whitetiger', legs: 10, furs: true, speed: 60, name: 'Simba' }                   






//  video Starts at : 48:10 sec


// any topic that is complex to you , will be asked in INTERVIEW 



// Build Own Stack  :-



class MyStack{

    constructor(){
        this.length = 0;
        this.stack = []
    }
     
    push(value){  
        this.stack.push(value)
        this.length++;
        console.log(this.stack)                //[ 2,3]
    }n

    pop(){
        this.stack.pop()
        this.length--;
        console.log(this.stack)                // [ 2 ]          
    }


}


let stack = new MyStack()

stack.push(2)
// console.log('stack:', stack)               // stack: MyStack { length: 1, stack: [ 2 ] }

stack.push(3)
// console.log('stack:', stack)                // stack: MyStack { length: 2, stack: [ 2, 3 ] }

stack.pop()


*/



// but if we want to push(2,4,5) at the same time , then  :- 







class MyStack{

    constructor(){
        this.length = 0;
        this.stack = []
    }
     
    push(...value){                        // destructure value
        value.forEach((el)=>{
            this.stack.push(el)
            this.length++;
        }) 
        
        console.log(this.stack)              // Outout is:-   [ 2, 3, 5 ]  
    }

    pop(){
        this.stack.pop()
        this.length--;
        console.log(this.stack)                       
    }


}
let stack = new MyStack();
stack.push(2,3,5)

stack.push(2,3,5,7,6,8,9,10)               // output will be:-  [2, 3, 5, 2, 3, 5, 7, 6, 8, 9,10]

















