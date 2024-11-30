const cars = [
    {
        image: "./img/carro-1.png",
        title: "911 Turbo",
        year: "2023",
        description: "Porche 911 Turbo com um design futurista...",
    },
    {
        image: "./img/carro-2.png",
        title: "Ferrari",
        year: "2021",
        description: "Ferrari com design esportivo e motor V12...",
    },
    {
        image: "./img/carro-3.png",
        title: "Lamborghini",
        year: "2022",
        description: "Lamborghini Aventador com design <br> esportivo e motor V12...",
    },
];

let currentIndex = 0;

const carImg = document.querySelector(".car-img img");
const carTitle = document.querySelector(".car-info h2");
const carYear = document.querySelector(".car-info .year");
const carDescription = document.querySelector(".car-info p");
const carNumber = document.querySelector(".indicators .number");

const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");
const indicators = document.querySelectorAll(".indicators ul li");

function animateCar() {
    const carContainer = document.querySelector(".car-img");
    carContainer.style.animation = "none"; 
    setTimeout(() => {
        carContainer.style.animation = "slideIn 1s ease-out";
    }, 10); 
}

function updateCar(index) {
    carImg.src = cars[index].image;
    carTitle.textContent = cars[index].title;
    carYear.textContent = cars[index].year;
    carDescription.textContent = cars[index].description;


    carNumber.textContent = `0${index + 1}`;


    indicators.forEach((indicator, i) => {
        indicator.classList.toggle("active", i === index);
    });


    animateCar();
}

leftArrow.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + cars.length) % cars.length;
    updateCar(currentIndex);
});

rightArrow.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % cars.length;
    updateCar(currentIndex);
});

updateCar(currentIndex);
