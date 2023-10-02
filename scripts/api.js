
function onStart(){

  const search = document.getElementById("searchIn");
  const searchInput = search.value;

  searchBtnOnclick(searchInput);
  getForcastresult(searchInput);
  getHistoryresult(searchInput);
}


function searchBtnOnclick(searchInput){

    const cityName = document.getElementById("city-name-now");
    const tempNow = document.getElementById("temp-now");
    const fealsLike = document.getElementById("feels-like-card");
    const windGust = document.getElementById("wind-gusts-card");
    const humidity = document.getElementById("humidity-card");
    const visibility = document.getElementById("visibility-card");
    const windDirection = document.getElementById("wind-Direction-card");
    const preasure = document.getElementById("pressure-card");
    const cloudCover = document.getElementById("cloud-cover-card");
    const uv = document.getElementById("uv-card");

    const nowWicon =  document.getElementById("nowWicon");
    const conditionText = document.getElementById("conditionText");

    
    const key = "ae02f9b1bf7241ea8c3173632232409";
    
    console.log(searchInput);
    $.ajax({
        method : "GET",
        url : `https://api.weatherapi.com/v1/current.json?key=${key}&q=${searchInput}`,
        success : (resp) => {
            console.log(resp);
            
            cityName.textContent = resp.location.name;
            tempNow.textContent = resp.current.temp_c +" °C";
            fealsLike.textContent = resp.current.feelslike_c+" °C";
            windGust.textContent = resp.current.wind_kph+" km/h";
            humidity.textContent = resp.current.humidity+ " %";
            visibility.textContent = resp.current.vis_km + " km";
            windDirection.textContent = resp.current.wind_dir;
            preasure.textContent = resp.current.pressure_mb+" Pa";
            cloudCover.textContent = resp.current.cloud+" %";
            uv.textContent = resp.current.uv;

            nowWicon.src = resp.current.condition.icon;
            conditionText.textContent = resp.current.condition.text;

            callMap(resp.location.lat , resp.location.lon);
        }
    });

}

var map = L.map('secondDiv').setView([0,0], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


function callMap(lat , lon){

  const marker = L.marker([0,0]).addTo(map);
  marker.setLatLng([lat,lon]).update();
  map.setView([lat,lon],13);

}
let forecastDate = $('.date');

// $.ajax({
//     method : "GET",
//     url : `http://api.weatherapi.com/v1/history.json?key=ae02f9b1bf7241ea8c3173632232409&q=Colombo&dt=2023-09-14&end_dt=2023-09-20`,
//     success : (res) => {
//         console.log(res);
//         forecastDate.text(res['forecast']['forecastday'][0]['date']);
//     }
// });

// Forcast

function getForcastresult(searchInput){

const day1 = document.getElementById("day-1");
const day2 = document.getElementById("day-2");
const day3 = document.getElementById("day-3");
const day4 = document.getElementById("day-4");
const day5 = document.getElementById("day-5");

const day1icon = document.getElementById("day-1-icon");
const day2icon = document.getElementById("day-2-icon");
const day3icon = document.getElementById("day-3-icon");
const day4icon = document.getElementById("day-4-icon");
const day5icon = document.getElementById("day-5-icon");

const day1Condition = document.getElementById("day1-Condition");
const day1RainChance = document.getElementById("day1-rain-chance");
const day1Mtemp = document.getElementById("day1-m-temp");
const day1Mwind = document.getElementById("day1-m-wind");
const day1WillRain = document.getElementById("day1-will-rain");

const day2Condition = document.getElementById("day2-Condition");
const day2RainChance = document.getElementById("day2-rain-chance");
const day2Mtemp = document.getElementById("day2-m-temp");
const day2Mwind = document.getElementById("day2-m-wind");
const day2WillRain = document.getElementById("day2-will-rain");

const day3Condition = document.getElementById("day3-Condition");
const day3RainChance = document.getElementById("day3-rain-chance");
const day3Mtemp = document.getElementById("day3-m-temp");
const day3Mwind = document.getElementById("day3-m-wind");
const day3WillRain = document.getElementById("day3-will-rain");

const day4Condition = document.getElementById("day4-Condition");
const day4RainChance = document.getElementById("day4-rain-chance");
const day4Mtemp = document.getElementById("day4-m-temp");
const day4Mwind = document.getElementById("day4-m-wind");
const day4WillRain = document.getElementById("day4-will-rain");

const day5Condition = document.getElementById("day5-Condition");
const day5RainChance = document.getElementById("day5-rain-chance");
const day5Mtemp = document.getElementById("day5-m-temp");
const day5Mwind = document.getElementById("day5-m-wind");
const day5WillRain = document.getElementById("day5-will-rain");

// const search = document.getElementById("searchIn");
const key = "ae02f9b1bf7241ea8c3173632232409";
// const searchInput = search.value;

  $.ajax({
    method : "GET",
    url : `https://api.weatherapi.com/v1/forecast.json?key=${key}&days=5&q=${searchInput}`,
    success : (res1) => {
        console.log(res1);
        // forecastDate.text(res1['forecast']['forecastday'][0]['date']);

        day1icon.src = res1.forecast.forecastday[0].day.condition.icon;
        day2icon.src = res1.forecast.forecastday[1].day.condition.icon;
        day3icon.src = res1.forecast.forecastday[2].day.condition.icon;
        day4icon.src = res1.forecast.forecastday[3].day.condition.icon;
        day5icon.src = res1.forecast.forecastday[4].day.condition.icon;

        day1.textContent = res1.forecast.forecastday[0].date;
        day1Condition.textContent = res1.forecast.forecastday[0].day.condition.text;
        day1RainChance.textContent = res1.forecast.forecastday[0].day.daily_chance_of_rain+" %";
        day1Mtemp.textContent = res1.forecast.forecastday[0].day.maxtemp_c+" °C";
        day1Mwind.textContent = res1.forecast.forecastday[0].day.maxwind_kph+" km/h";
        day1WillRain.textContent = res1.forecast.forecastday[0].day.daily_will_it_rain === 1 ? "yes":"No";

        day2.textContent = res1.forecast.forecastday[1].date;
        day2Condition.textContent = res1.forecast.forecastday[1].day.condition.text;
        day2RainChance.textContent = res1.forecast.forecastday[1].day.daily_chance_of_rain+" %";
        day2Mtemp.textContent = res1.forecast.forecastday[1].day.maxtemp_c+" °C";
        day2Mwind.textContent = res1.forecast.forecastday[1].day.maxwind_kph+" km/h";
        day2WillRain.textContent = res1.forecast.forecastday[1].day.daily_will_it_rain === 1 ? "yes":"No";

        day3.textContent = res1.forecast.forecastday[2].date;
        day3Condition.textContent = res1.forecast.forecastday[2].day.condition.text;
        day3RainChance.textContent = res1.forecast.forecastday[2].day.daily_chance_of_rain+" %";
        day3Mtemp.textContent = res1.forecast.forecastday[2].day.maxtemp_c+" °C";
        day3Mwind.textContent = res1.forecast.forecastday[2].day.maxwind_kph+" km/h";
        day3WillRain.textContent = res1.forecast.forecastday[2].day.daily_will_it_rain === 1 ? "yes":"No";

        day4.textContent = res1.forecast.forecastday[3].date;
        day4Condition.textContent = res1.forecast.forecastday[3].day.condition.text;
        day4RainChance.textContent = res1.forecast.forecastday[3].day.daily_chance_of_rain+" %";
        day4Mtemp.textContent = res1.forecast.forecastday[3].day.maxtemp_c+" °C";
        day4Mwind.textContent = res1.forecast.forecastday[3].day.maxwind_kph+" km/h";
        day4WillRain.textContent = res1.forecast.forecastday[3].day.daily_will_it_rain === 1 ? "yes":"No";

        day5.textContent = res1.forecast.forecastday[4].date;
        day5Condition.textContent = res1.forecast.forecastday[4].day.condition.text;
        day5RainChance.textContent = res1.forecast.forecastday[4].day.daily_chance_of_rain+" %";
        day5Mtemp.textContent = res1.forecast.forecastday[4].day.maxtemp_c+" °C";
        day5Mwind.textContent = res1.forecast.forecastday[4].day.maxwind_kph+" km/h";
        day5WillRain.textContent = res1.forecast.forecastday[4].day.daily_will_it_rain === 1 ? "yes" : "No";

        console.log(res1.forecast.forecastday[4].daily_will_it_rain);
        
    }
  });

}

// History

function getHistoryresult(searchInput) {

  const dayH1 = document.getElementById("dayH-1");
  const dayH2 = document.getElementById("dayH-2");
  const dayH3 = document.getElementById("dayH-3");
  const dayH4 = document.getElementById("dayH-4");
  const dayH5 = document.getElementById("dayH-5");

  const dayH1icon = document.getElementById("dayH-1-icon");
  const dayH2icon = document.getElementById("dayH-2-icon");
  const dayH3icon = document.getElementById("dayH-3-icon");
  const dayH4icon = document.getElementById("dayH-4-icon");
  const dayH5icon = document.getElementById("dayH-5-icon");

  const dayH1Condition = document.getElementById("dayH1-Condition");
  const dayH2Condition = document.getElementById("dayH2-Condition");
  const dayH3Condition = document.getElementById("dayH3-Condition");
  const dayH4Condition = document.getElementById("dayH4-Condition");
  const dayH5Condition = document.getElementById("dayH5-Condition");
  
  const dayH1MaxTemp = document.getElementById("dayH1-max-temp");
  const dayH2MaxTemp = document.getElementById("dayH2-max-temp");
  const dayH3MaxTemp = document.getElementById("dayH3-max-temp");
  const dayH4MaxTemp = document.getElementById("dayH4-max-temp");
  const dayH5MaxTemp = document.getElementById("dayH5-max-temp");

  const dayH1MinTemp = document.getElementById("dayH1-min-temp");
  const dayH2MinTemp = document.getElementById("dayH2-min-temp");
  const dayH3MinTemp = document.getElementById("dayH3-min-temp");
  const dayH4MinTemp = document.getElementById("dayH4-min-temp");
  const dayH5MinTemp = document.getElementById("dayH5-min-temp");
  
  const dayH1mWind = document.getElementById("dayH1-m-wind");
  const dayH2mWind = document.getElementById("dayH2-m-wind");
  const dayH3mWind = document.getElementById("dayH3-m-wind");
  const dayH4mWind = document.getElementById("dayH4-m-wind");
  const dayH5mWind = document.getElementById("dayH5-m-wind");

  const dayH1Visibility = document.getElementById("dayH1-visibility");
  const dayH2Visibility = document.getElementById("dayH2-visibility");
  const dayH3Visibility = document.getElementById("dayH3-visibility");
  const dayH4Visibility = document.getElementById("dayH4-visibility");
  const dayH5Visibility = document.getElementById("dayH5-visibility");

  var currenDate = new Date();
  console.log(currenDate+" today");

  var yearC = currenDate.getFullYear();
  var monthC = String(currenDate.getMonth() + 1).padStart(2, '0'); // Adding 1 to month because it is zero-based
  var dayC = String(currenDate.getDate()).padStart(2, '0');

  var formattedDateC = yearC + '-' + monthC + '-' + dayC;
  console.log(formattedDateC+" Curr days back");

  // Subtract 5 days (5 * 24 * 60 * 60 * 1000 milliseconds) from the current date
  var fiveDaysAgo = new Date(currenDate.getTime() - 5 * 24 * 60 * 60 * 1000);

  // Extract the year, month, and day components from the sevenDaysAgo date
  var year = fiveDaysAgo.getFullYear();
  var month = String(fiveDaysAgo.getMonth() + 1).padStart(2, '0'); // Adding 1 to month because it is zero-based
  var day = String(fiveDaysAgo.getDate()).padStart(2, '0');

  // Create the "yyyy-mm-dd" formatted string
  var formattedDate = year + '-' + month + '-' + day;
  console.log(formattedDate+" 5 days back");

  const key = "ae02f9b1bf7241ea8c3173632232409";

  $.ajax({
    method : "GET",
    url : `https://api.weatherapi.com/v1/history.json?&dt=${formattedDate}&end_dt=${formattedDateC}&key=${key}&q=${searchInput}`,
    success : (res2) => {
      console.log(res2);

      dayH1.textContent = res2.forecast.forecastday[5].date;
      dayH2.textContent = res2.forecast.forecastday[4].date;
      dayH3.textContent = res2.forecast.forecastday[3].date;
      dayH4.textContent = res2.forecast.forecastday[2].date;
      dayH5.textContent = res2.forecast.forecastday[1].date;

      dayH1icon.src = res2.forecast.forecastday[5].day.condition.icon;
      dayH2icon.src = res2.forecast.forecastday[4].day.condition.icon;
      dayH3icon.src = res2.forecast.forecastday[3].day.condition.icon;
      dayH4icon.src = res2.forecast.forecastday[2].day.condition.icon;
      dayH5icon.src = res2.forecast.forecastday[1].day.condition.icon;

      dayH1Condition.textContent = res2.forecast.forecastday[5].day.condition.text;
      dayH2Condition.textContent = res2.forecast.forecastday[4].day.condition.text;
      dayH3Condition.textContent = res2.forecast.forecastday[3].day.condition.text;
      dayH4Condition.textContent = res2.forecast.forecastday[2].day.condition.text;
      dayH5Condition.textContent = res2.forecast.forecastday[1].day.condition.text;

      dayH1MaxTemp.textContent = res2.forecast.forecastday[5].day.maxtemp_c+" °C";
      dayH2MaxTemp.textContent = res2.forecast.forecastday[4].day.maxtemp_c+" °C";
      dayH3MaxTemp.textContent = res2.forecast.forecastday[3].day.maxtemp_c+" °C";
      dayH4MaxTemp.textContent = res2.forecast.forecastday[2].day.maxtemp_c+" °C";
      dayH5MaxTemp.textContent = res2.forecast.forecastday[1].day.maxtemp_c+" °C";

      dayH1MinTemp.textContent = res2.forecast.forecastday[5].day.mintemp_c+" °C";
      dayH2MinTemp.textContent = res2.forecast.forecastday[4].day.mintemp_c+" °C";
      dayH3MinTemp.textContent = res2.forecast.forecastday[3].day.mintemp_c+" °C";
      dayH4MinTemp.textContent = res2.forecast.forecastday[2].day.mintemp_c+" °C";
      dayH5MinTemp.textContent = res2.forecast.forecastday[1].day.mintemp_c+" °C";

      dayH1mWind.textContent = res2.forecast.forecastday[5].day.maxwind_kph+" km/h";
      dayH2mWind.textContent = res2.forecast.forecastday[4].day.maxwind_kph+" km/h";
      dayH3mWind.textContent = res2.forecast.forecastday[3].day.maxwind_kph+" km/h";
      dayH4mWind.textContent = res2.forecast.forecastday[2].day.maxwind_kph+" km/h";
      dayH5mWind.textContent = res2.forecast.forecastday[1].day.maxwind_kph+" km/h";

      dayH1Visibility.textContent = res2.forecast.forecastday[5].day.avgvis_km+" km";
      dayH2Visibility.textContent = res2.forecast.forecastday[4].day.avgvis_km+" km";
      dayH3Visibility.textContent = res2.forecast.forecastday[3].day.avgvis_km+" km";
      dayH4Visibility.textContent = res2.forecast.forecastday[2].day.avgvis_km+" km";
      dayH5Visibility.textContent = res2.forecast.forecastday[1].day.avgvis_km+" km";

      console.log(res2.forecast.forecastday[1].day.avgvis_km + " avg 1 vis");
    }

  });

}


// ------------------------------------------------ current Location

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

var pos;

function showPosition(position) {
    // console.log( "Latitude: " + position.coords.latitude +
    // "Longitude: " + position.coords.longitude);

    pos = position.coords.latitude +"," + position.coords.longitude;
    console.log(pos);

    searchBtnOnclick(pos);


}

// getLocation();


