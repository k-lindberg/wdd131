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

const popular = [
    { 
        place: "Sunset Beach",
        image: "images/sunset.webp",
        description: "One of the longest rideable surf spots",
        link: "beaches.html",
        buttonText: "View Beaches"
    },
    {
        place: "Kawela Bay/Turtle Bay",
        image: "images/turtle-bay.webp",
        description: "Great place to snorkel",
        link: "beaches.html",
        buttonText: "View Beaches"
    },
    {
        place: "Kuaola Regional Park",
        image: "images/kualoa.webp",
        description: "Spectacular views down the east coast of Oʻahu",
        link: "beaches.html",
        buttonText: "View Beaches"
    },
    {
        place: "Makapuʻu Beach Park",
        image: "images/makapuu.webp",
        description: "Very popular with bodyborders and bodysurfers",
        link: "beaches.html",
        buttonText: "View Beaches"
    },
    {
        place: "Waikīkī Beach",
        image: "images/waikiki.webp",
        description: "One of the best places to learn how to surf",
        link: "beaches.html",
        buttonText: "View Beaches"
    },
    {
        place: "Magic Island Lagoon",
        image: "images/magic-island.webp",
        description: "Perfect place for keiki (children) to swim",
        link: "beaches.html",
        buttonText: "View Beaches"
    },
    {
        place: "Mākaha Beach",
        image: "images/makaha.webp",
        description: "Best surfing on Oʻahu’s west coast",
        link: "beaches.html",
        buttonText: "View Beaches"
    },
    {
        place: "Kō Olina Resort and Marina",
        image: "images/koolina.webp",
        description: "Man-made lagoons, perfect for families",
        link: "beaches.html",
        buttonText: "View Beaches"
    },
    {
        place: "Jurassic Valley Adventure Tour",
        image: "images/jurassic2.webp",
        description: "Tour the Jurassic World movie sets",
        link: "activities.html",
        buttonText: "View Activities"
    },
    {
        place: "Polynesian Cultural Center",
        image: "images/pcc2.webp",
        description: "Immerse yourself in six Pacific Island cultures",
        link: "activities.html",
        buttonText: "View Activities"
    },
    {
        place: "Laie Hawaiʻi Temple Visitors’ Center",
        image: "images/laie-temple2.webp",
        description: "Enjoy the lush gardens and learn about Jesus Christ",
        link: "activities.html",
        buttonText: "View Activities"
    },
    {
        place: "Dole Plantation",
        image: "images/dole-plantation2.webp",
        description: "Enjoy the \"Pineapple Experience\"",
        link: "activities.html",
        buttonText: "View Activities"
    }
]

function getRandomThree(array) {
    let result = [];
    let usedIndexes = new Set();

    while (result.length < 3) {
        let randomIndex = Math.floor(Math.random() * array.length);

        if (!usedIndexes.has(randomIndex)) {
            usedIndexes.add(randomIndex);
            result.push(array[randomIndex]);
        }
    }
    return result;
}

createPopularCard(getRandomThree(popular));

const homeLink = document.querySelector("#home");

homeLink.addEventListener("click", () => {
    createPopularCard(getRandomThree(popular))
});

function createPopularCard(places) {
    const container = document.querySelector("#cardSection");
    container.innerHTML = "";
    
    places.forEach(location => {
        let card = document.createElement("section");
        let image = document.createElement("img");
        let place = document.createElement("h3");
        let description = document.createElement("p");
        let button = document.createElement("a");

        image.setAttribute("src", location.image);
        image.setAttribute("alt", location.place);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", 100)
        image.setAttribute("height", 50)

        place.textContent = location.place;
        description.textContent = location.description;

        button.href = location.link;
        button.textContent = location.buttonText;
        button.classList.add("card-btn");

        card.appendChild(image);
        card.appendChild(place);
        card.appendChild(description);
        card.appendChild(button);

        container.appendChild(card);
    });
}