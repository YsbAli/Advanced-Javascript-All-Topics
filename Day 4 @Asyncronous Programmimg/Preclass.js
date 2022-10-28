console.log(1);
console.log(2);


// for(let i =0; i<=1000000000000; i++){


// }

// this lines will wait until line no 5 gets executed


console.log(3);
console.log(4);


// Asynchronous Programmimg ==> notes in the khata or note book




//test(); //==> hello this is Yousub

function test(){
    // console.log('hello this is Yousub');
    document.body.append('hello I am here')

}

setTimeout(test,3000); // it will take 3 * 1000 mili seconds to execute

//setInterval(test,3000) // it will keep on adding after 3 seconds
 
// but it will keep on going, So to stop it : use clearInterval()

let id = setInterval(test,2000);
clearInterval(id) 



// Event Loop ==> running a loop to keep on checking if there anything  is remaining in message queue or callback queue





 