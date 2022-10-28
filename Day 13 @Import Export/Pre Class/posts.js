      
    
// import { getData, append } from './script/Showdata.js'
// import navbar from '../components/navbar.js'

  
//  document.body.innerHTML = navbar()




// async function getData(){
//     let parent = document.getElementById('data')

//     let res = await fetch('https://jsonplaceholder.typicode.com/posts')

//     let data = await res.json()

//     append(data,parent)
// }







    
import { getData, append } from './script/Showdata.js'
import navbar from '../components/navbar.js'


navbar().then((res)=>{                                              //navbar()  --- html is present
    document.body.innerHTML = res;

   let response = getData('http://jsonplaceholder.typicode.com/posts')

   
   response.then((data) =>{
    let parent = document.getElementById('data')
    console.log('parent:', parent)

    append(data, parent, 'posts')

   })




})