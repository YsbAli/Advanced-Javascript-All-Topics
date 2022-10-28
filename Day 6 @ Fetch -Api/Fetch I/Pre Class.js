// two ways to create api requests

// ONE WAY : Fetch

// fetch('https://reqres.in/api/users')
// .then(function(res){
//     res.json().then(function(res){
//         console.log(res.data)
//     })
// })
// .catch(function(error){
//    console.log(error)
// })


// Second Way : Async await


async function makeRequest(){
    let res = await fectch("https://reqres.in/api/users")
    let data = await res.json()
    console.log('data:', data.data)
}
makeRequest();