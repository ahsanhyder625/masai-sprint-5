// alert("hello")
const api={
    key:"2d428749461382aec70725c4da65e00c",
    base: "https://api.openweathermap.org/data/2.5/"

}
const searchbox=document.querySelector(".search-field");
searchbox.addEventListener("keypress",setQuery)

function setQuery(event){
    if(event.keyCode==13){
        getResults(searchbox.value);
    }
}

function getResults (query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(weather => {
        return weather.json();
      }).then(displayResults);
  }
  
  function displayResults (weather) {
    var city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;
  
    var now = new Date();
    var date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);
  
    var temp = document.querySelector('.curr .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;
  
    var weather_el = document.querySelector('.curr .weather');
    weather_el.innerText = weather.weather[0].main;
  
    var hilow = document.querySelector('.high-low');
    highlow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
  }
  function dateBuilder (d) {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    var day = days[d.getDay()];
    var date = d.getDate();
    var month = months[d.getMonth()];
    var year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`;
  }