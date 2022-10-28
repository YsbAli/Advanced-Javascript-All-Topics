
/*

// const a =20;

// a = 50 // can not Re-assign


// but can mutable 


const obj = {
    a:20,
    b:30
}
obj.c = 50;
console.log('obj:', obj)      // {a:20, b:30, c:50}

// so const and mutubility are different thing 









// Normal Function 

const obj = {
    a :10,
    print: function (){
        console.log(this.a)
    }
}
obj.print()    // 10


// Arrow Function 

const obj2 = {
    a :10,
    print: ()=>{
        console.log(this.a)
    }
}
obj2.print()    // undefined






// Spread  Operator 

// let str = 'maggie';
// console.log('str:', ...str)      // str: m a g g i e





// For of Loop 


 let arr = [78,94, 98]
let sum = 0;
for(let x of arr){
    // console.log(x);
    sum += x;

}
// console.log('sum:', sum)       //  sum: 270


let str = 'masaiSchool';
for(let i of str){
    console.log(i)               // we can itreta the string                                              l
    
    
}


*/


//Arrow Funciton :-


// normal Function :-


// function sum(a,b){
//     return a+b;
// }

// sum(3,6)

// 1.

let sum = (a,b) => {
   // console.log(a+b);      //5
    return a+b;
} 
sum(2,3)  


// 2.

let sum2 =(a,b) => a+b;  //shorter form
sum2(10,30)

// 3.

let sum3 = a => a+1;     //shorter form
sum3(4,6)





 let sum4 = (a,b,c) =>{
      return a+b+c;
 }

 let arr = [2,4,6]

//  console.log(sum4(...arr));      // 12



 let sum5=(...args )=>{     //Parameters                           //...args is Rest Operator 
      return args;
 }

//  console.log(sum5(10,20,30))                                  // [ 10, 20, 30 ]

 let arr2 = [ 10, 20, 30 ];

 
 console.log(sum5(arr2))   // Arguments                           [ [ 10, 20, 30 ] ]






//  difference between Arguments and parameters  :-

// Parameters :- when we declare a function we pass parameters there.Parameters is fixed,

// Arguments :- when we call the function we pass Arguments there. Arguments is not fixed
  

