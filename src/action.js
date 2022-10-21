function dayTime(timestamp) {
  let dateTime = new Date(timestamp);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDay = days[dateTime.getDay()];
  let currentHour = dateTime.getHours();
  currentHour = currentHour > 9 ? currentHour : "0" + currentHour;
  let currentMinutes = dateTime.getMinutes();
  currentMinutes = currentMinutes > 9 ? currentMinutes : "0" + currentMinutes;
  dateTime = `${currentDay}, ${currentHour}:${currentMinutes}`;
  return dateTime;
}

let celcium = document.querySelector(".celcium");
let fahrenheit = document.querySelector(".farenheit");
function getCelcium(event) {
  event.preventDefault();
  let temp = document.querySelector("strong");
  temp.innerHTML = 24;
}
celcium.addEventListener("click", getCelcium);

function getFahrenheit(event) {
  event.preventDefault();
  let temp = document.querySelector(".degrees");
  let currentTemp = 26;
  temp.innerHTML = (currentTemp * 9) / 5 + 32;
}
fahrenheit.addEventListener("click", getFahrenheit);

let form = document.querySelector("#form");

form.addEventListener("submit", getCityResponse);

function getCityResponse(event) {
  event.preventDefault();
  let h1 = document.querySelector("#city");
  let city = document.querySelector("#search-text").value;

  if (city.length === 0) {
    alert("You forgot to enter city");
    h1.innerHTML = "Try again";
  } else if (Number(city)) {
    alert("It looks like a number🤔");
    h1.innerHTML = "It is a number";
  } else {
    h1.innerHTML =
      city.trim().charAt(0).toUpperCase() + city.toLowerCase().trim().slice(1);
  }
  console.log(city);
  displayWeather(city);
}

function displayWeather(city) {
  let apiKey = "00263b074o4ecaf9ct355cdf11faff32";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(getTemp);
}

function getTemp(response) {
  document.querySelector("#city").innerHTML = response.data.city;
  document.querySelector(".degrees").innerHTML = Math.round(
    response.data.temperature.current
  );

  document.querySelector(".wind").innerHTML = `${Math.round(
    response.data.wind.speed
  )} km\\h`;
  document.querySelector(
    ".humidity"
  ).innerHTML = `${response.data.temperature.humidity}%`;
  document.querySelector("#description").innerHTML =
    response.data.condition.description;
  let timeNow = document.querySelector("#dayTime");
  timeNow.innerHTML = dayTime(response.data.time * 1000);

  icon.setAttribute(
    "src",
    "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
  );
}

let myWeatherButton = document.querySelector("#location");
myWeatherButton.addEventListener("click", getCurrentLocation);

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getCoordinates);
}

function getCoordinates(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "00263b074o4ecaf9ct355cdf11faff32";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${apiKey}`;
  axios.get(apiUrl).then(getTemp);
}

function showKyiv(event) {
  event.preventDefault();
  let h1 = document.querySelector("#city");
  h1.innerHTML = "Kyiv";
  let apiKey = "00263b074o4ecaf9ct355cdf11faff32";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=kyiv&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(getTemp);
}
let kyiv = document.querySelector("#kyiv");
kyiv.addEventListener("click", showKyiv);

function showMadrid(event) {
  event.preventDefault();
  let h1 = document.querySelector("#city");
  h1.innerHTML = "Madrid";
  let apiKey = "00263b074o4ecaf9ct355cdf11faff32";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=madrid&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(getTemp);
}

let madrid = document.querySelector("#madrid");
madrid.addEventListener("click", showMadrid);

function showParis(event) {
  event.preventDefault();
  let h1 = document.querySelector("#city");
  h1.innerHTML = "Paris";
  let apiKey = "00263b074o4ecaf9ct355cdf11faff32";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=paris&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(getTemp);
}
let paris = document.querySelector("#paris");
paris.addEventListener("click", showParis);

function showAmsterdam(event) {
  event.preventDefault();
  let h1 = document.querySelector("#city");
  h1.innerHTML = "Amsterdam";
  let apiKey = "00263b074o4ecaf9ct355cdf11faff32";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=amsterdam&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(getTemp);
}
let amsterdam = document.querySelector("#amsterdam");
amsterdam.addEventListener("click", showAmsterdam);

function showBerlin(event) {
  event.preventDefault();
  let h1 = document.querySelector("#city");
  h1.innerHTML = "Berlin";
  let apiKey = "00263b074o4ecaf9ct355cdf11faff32";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=berlin&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(getTemp);
}
let berlin = document.querySelector("#berlin");
berlin.addEventListener("click", showBerlin);

function showVienna(event) {
  event.preventDefault();
  let h1 = document.querySelector("#city");
  h1.innerHTML = "Vienna";
  let apiKey = "00263b074o4ecaf9ct355cdf11faff32";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=vienna&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(getTemp);
}
let vienna = document.querySelector("#vienna");
vienna.addEventListener("click", showVienna);

function showPrague(event) {
  event.preventDefault();
  let h1 = document.querySelector("#city");
  h1.innerHTML = "Prague";
  let apiKey = "00263b074o4ecaf9ct355cdf11faff32";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=prague&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(getTemp);
}
let prague = document.querySelector("#prague");
prague.addEventListener("click", showPrague);
