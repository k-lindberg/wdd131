const today = new Date();

const currentYear = document.querySelector("#currentyear");
currentYear.textContent = today.getFullYear();

const lastModified = document.querySelector("#lastmodified");

const fullDate = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;

lastModified.innerHTML = `<span class="highlight">${fullDate}</span>`


function calculateWindChill(temp, wind) {
    const windChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16)
    return windChill;
}

const temp = 74
const wind = 11

const windChill = document.querySelector("#windchill");

if (temp <= 50 && wind >= 3)
    windChill.textContent = calculateWindChill(temp, wind) + " °F";

else
    windChill.textContent = "N/A";



