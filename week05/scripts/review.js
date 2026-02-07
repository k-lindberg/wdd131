const today = new Date();

const currentYear = document.querySelector("#currentyear");
currentYear.textContent = today.getFullYear();

const lastModified = document.querySelector("#lastmodified");

const fullDate = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;

lastModified.innerHTML = `${fullDate}`




let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

reviewCount++;

localStorage.setItem("reviewCount", reviewCount);

document.querySelector("#reviewCounter").textContent = reviewCount;