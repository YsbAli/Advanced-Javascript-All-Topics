// Weather App api : https://openweathermap.org/current

// api sample : https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

//    for Geolocation/current location api : https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

// my api key : fb4f05b9a482be48293f2a1bf360577e

// MY API : https://api.openweathermap.org/data/2.5/weather?q=kolkata&appid=fb4f05b9a482be48293f2a1bf360577e

//const url = ` https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fb4f05b9a482be48293f2a1bf360577e`;

// but this is not dymanakic to make it dynamik or taking data from  user

// fetch(url)
//   .then(function (res) {
//     return res.json();
//   })
//   .then(function (res) {
//     console.log("res:", res.main.temp); // it will give exact data of perticuler city
//   })

//   .catch(function (error) {
//     console.log("error:", error);
//   });

// src="https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed"    // map src

function getData() {
  let city = document.getElementById("city").value;

  //   map data we can give here also

  //   let map = document.getElementById("gmap_canvas");
  //   map.src = `https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fb4f05b9a482be48293f2a1bf360577e`;

  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (res) {
      //console.log("res:", res.main.temp); // it will give exact data of perticuler city
      console.log(res);
      appendData(res);
    })

    .catch(function (error) {
      console.log("error:", error);
    });
}

// GeoLolation data $

function getDataLocation(lat, lon) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=fb4f05b9a482be48293f2a1bf360577e`;

  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (res) {
      console.log(res);
      appendData(res);
    })

    .catch(function (error) {
      console.log("error:", error);
    });
}

function appendData(data) {
  let Container = document.getElementById("container");
  let map = document.getElementById("gmap_canvas");

  Container.innerHTML = null; // it will not repeat after  second search

  let city = document.createElement("h1");
  city.innerText = `City Name: ${data.name}`;

  let min = document.createElement("p");
  min.innerText = `Min_Temparatore: ${data.main.temp_min}`;

  let max = document.createElement("p");
  max.innerText = `Max_Temparatore: ${data.main.temp_max}`;

  let current = document.createElement("p");
  current.innerText = `Current Temparatore: ${data.main.temp}`;

  let humidity = document.createElement("p");
  humidity.innerText = `Humidity: ${data.main.humidity}`;

  Container.append(city, min, max, current, humidity);
  map.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
}

/*

// Mdn Geo location to get current location : 
// https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition




Code Example : const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(pos) {
    const crd = pos.coords;
  
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);
  

// navigator.geolocation.getCurrentPosition(success, error, options);


*/

function getWeather() {
  navigator.geolocation.getCurrentPosition(success); // success is a callback function

  function success(position) {
    const crd = position.coords;

    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`); // Latitude : 26.7271012
    console.log(`Longitude: ${crd.longitude}`); // Longitude: 88.3952861
    console.log(`More or less ${crd.accuracy} meters.`); // More or less 5327.15419378722 meters.

   getDataLocation(crd.latitude, crd.longitude);

  }
}

