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

let cel = document.querySelector("#cel");
let far = document.querySelector("#far");
cel.addEventListener("click", getCelsium);
far.addEventListener("click", getFahrenheit);

let celElement;
let celsiumElement;
let celsium = document.querySelector("#celcium");
let fahrenheit = document.querySelector("#farenheit");

function getCelsium(event) {
  event.preventDefault();
  celsium.classList.add("activ");
  cel.classList.add("activ");
  far.classList.remove("activ");
  fahrenheit.classList.remove("activ");
  let temp = document.querySelector(".degrees");
  temp.innerHTML = Math.round(celsiumElement);
  let realFeelTemp = document.querySelector(".temp-feeling");
  realFeelTemp.innerHTML = celElement;
}

celsium.addEventListener("click", getCelsium);

function getFahrenheit(event) {
  event.preventDefault();
  cel.classList.remove("activ");
  far.classList.add("activ");
  celsium.classList.remove("activ");
  fahrenheit.classList.add("activ");
  let temp = document.querySelector(".degrees");
  temp.innerHTML = Math.round((celsiumElement * 9) / 5 + 32);
  let realFeelTemp = document.querySelector(".temp-feeling");
  realFeelTemp.innerHTML = Math.round((celElement * 9) / 5 + 32);
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
  celsiumElement = Math.round(response.data.temperature.current);
  celElement = Math.round(response.data.temperature.feels_like);
  document.querySelector(".wind").innerHTML = `${Math.round(
    response.data.wind.speed
  )} km\\h`;
  document.querySelector(
    ".humidity"
  ).innerHTML = `${response.data.temperature.humidity}%`;
  document.querySelector("#description").innerHTML =
    response.data.condition.description;
  let realFeel = document.querySelector(".temp-feeling");
  realFeel.innerHTML = Math.round(response.data.temperature.feels_like);

  let timeNow = document.querySelector("#dayTime");
  timeNow.innerHTML = dayTime(response.data.time * 1000);

  icon.setAttribute(
    "src",
    `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
  );
  icon.setAttribute("alt", response.data.condition.description);
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
