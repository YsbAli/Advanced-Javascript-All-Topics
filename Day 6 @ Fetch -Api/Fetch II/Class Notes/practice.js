


function FetchData(){
    let city = document.getElementById('city')

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fb4f05b9a482be48293f2a1bf360577e`

    fetch(url).then(function(res){
       return res.json()
    })
    .then
   


}