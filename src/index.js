function search(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#search-input");
  let cityInput = document.querySelector("#current-city");
  cityInput.innerHTML = `${searchInput.value}`;
  let apiKey = "1c21507bfe367ft66ea583e00ofa422f";
  let url = `https://api.shecodes.io/weather/v1/current?query=${searchInput.value}&key=${apiKey}&units=metric`;
  axios.get(url).then(showWeather);
}
function formatDate(date) {
  let hour = currentDate.getHours();
  let minute = currentDate.getMinutes();

  if (minute < 10) {
    minute = `0${minute}`;
  }
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[currentDate.getDay()];
  return `${day} ${hour}:${minute}`;
}
function showWeather(reponse) {
  let city = reponse.data.city;
  let temperature = Math.round(reponse.data.temperature.current);
  let cityElement = document.querySelector("#current-city");
  let temperatureElement = document.querySelector("#current-temperature-value");

  cityElement.innerHTML = `${city}`;
  temperatureElement.innerHTML = `${temperature}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateElement = document.querySelector("#current-date-time");
let currentDate = new Date();
currentDateElement.innerHTML = formatDate(currentDate);
