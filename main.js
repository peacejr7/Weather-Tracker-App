// code starts

const API = {
    key: "9f0d6ca9286ef8a61896d8fdb203e2b2",
    url:"https://api.openweathermap.org/data/2.5/weather?q="
  }
  // they key was found in my open weather map account in my keys section
  const searchbox = document.querySelector('.search-box');
  searchbox.addEventListener('keypress', setReq);
  
  // the keycode will is set to 13 because it represents the Enter key .
  function setReq(evt) {
    if (evt.keyCode == 13) {
      getRes(searchbox.value);
    }
  }
  // this is where we will be fetching our API and return a JSON file which we will use 
  function getRes (req) {
    fetch(`${API.url}${req}&units=metric&APPID=${API.key}`)
      .then(weather => {
        return weather.json();
      }).then(displayRes);
  }

  // function helps us to display the results to our html page
  function displayRes (weather) {
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;
  
    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = makeDate(now);
  
    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;
  
    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;
  
    let hilow = document.querySelector('.low-high');
    hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
  }
  
  function makeDate (d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`;
  }

// end of code
  