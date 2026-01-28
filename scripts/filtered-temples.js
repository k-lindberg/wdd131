const today = new Date();

const currentYear = document.querySelector("#currentyear");
currentYear.textContent = today.getFullYear();

const lastModified = document.querySelector("#lastmodified");

const fullDate = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;

lastModified.innerHTML = `<span class="highlight">${fullDate}</span>`

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});

const temples = [
    {
        templeName: "St. George Utah",
        location: "St. George, Utah, United States",
        dedicated: "1877, April, 6",
        area: 143969,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/st.-george-utah-temple/st.-george-utah-temple-40435-main.jpg"
    },
    {
        templeName: "Orlando Florida",
        location: "windermere, Florida, United States",
        dedicated: "1994, October, 9",
        area: 70000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/orlando-florida-temple/orlando-florida-temple-51938-main.jpg"
    },
    {
        templeName: "Laie Hawaii",
        location: "Laie, Hawaii, United States",
        dedicated: "1919, November, 27",
        area: 42100,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/laie-hawaii-temple/laie-hawaii-temple-7370-main.jpg"
    },
    {
        templeName: "Las Vegas Nevada",
        location: "Las Vegas, Nevada, United States",
        dedicated: "1989, December, 16",
        area: 80350,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/las-vegas-nevada-temple/las-vegas-nevada-temple-35604-main.jpg"
    },
    {
        templeName: "Guayaquil Ecuador",
        location: "Guayaquil, Ecuador",
        dedicated: "1999, August, 1",
        area: 45000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/_temp/058-Guayaquil-Ecuador-Temple.jpg"
    },
    {
        templeName: "Tucson Arizona",
        location: "Tucson, Arizona, United States",
        dedicated: "2017, August, 13",
        area: 38216,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/tucson-arizona-temple/tucson-arizona-temple-8384-main.jpg"
    },
    {
        templeName: "Mesa Arizona",
        location: "Mesa, Arizona, United States",
        dedicated: "1927, October, 23",
        area: 75000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/mesa-arizona-temple/mesa-arizona-temple-46561-main.jpg"
    },
    {
        templeName: "Saratoga Springs Utah",
        location: "Saratoga Springs, Utah, United States",
        dedicated: "2023, August, 13",
        area: 97836,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/saratoga-springs-utah-temple/saratoga-springs-utah-temple-32872-main.jpg"
    },
    {
        templeName: "Cobán Guatemala",
        location: "Cobán, Guatemala",
        dedicated: "2024, June, 9",
        area: 8772,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/coban-guatemala-temple/coban-guatemala-temple-46348-main.jpg"
    },
    {
        templeName: "Salt Lake",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 382207,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
    },
    {
        templeName: "Casper Wyoming",
        location: "Casper, Wyoming, United States",
        dedicated: "2024, November, 29",
        area: 9950,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/casper-wyoming-temple/casper-wyoming-temple-45007-main.jpg"
    },
    {
        templeName: "London England",
        location: "Surrey, England",
        dedicated: "1958, October, 7",
        area: 42652,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/london-england-temple/london-england-temple-56886-main.jpg"
    },
];

createTempleCard(temples);

const homeLink = document.querySelector("#home");

homeLink.addEventListener("click", () => {
    createTempleCard(temples)
});

const oldLink = document.querySelector("#old");

oldLink.addEventListener("click", () => {
    const oldTemples = temples.filter(temple => {
        const year = new Date(temple.dedicated).getFullYear();
        return year < 1900;
    });
    createTempleCard(oldTemples)
});

const newLink = document.querySelector("#new");

newLink.addEventListener("click", () => {
    const newTemples = temples.filter(temple => {
        const year = new Date(temple.dedicated).getFullYear();
        return year > 2000;
    });
    createTempleCard(newTemples)
});

const smallLink = document.querySelector("#small");

smallLink.addEventListener("click", () => {
    let small = temples.filter(temple => temple.area < 10000);
    createTempleCard(small);
})

const largeLink = document.querySelector("#large");

largeLink.addEventListener("click", () => {
    let large = temples.filter(temple => temple.area > 90000);
    createTempleCard(large);
})

function createTempleCard(filteredTemples) {
    document.querySelector(".container").innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedication:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", 300)
        img.setAttribute("height", 200)

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".container").appendChild(card);
    });
}