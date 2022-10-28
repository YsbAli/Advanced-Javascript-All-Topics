// import navbar from '../components/navbar.js'
  
// document.body.innerHTML = navbar()
      



    
import { getData, append } from './script/Showdata.js'
import navbar from '../components/navbar.js'


navbar().then((res)=>{                                              //navbar()  --- html is present
    document.body.innerHTML = res;

   let response = getData('http://jsonplaceholder.typicode.com/users')

   
   response.then((data) =>{
    let parent = document.getElementById('usrs')
    console.log('parent:', parent)

    append(data, parent, 'users')

   })




})