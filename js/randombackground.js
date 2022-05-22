const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
];

const viewImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.setAttribute("id", "bgImage");
bgImage.setAttribute("style", "position:relative");

bgImage.src = `img/${viewImage}`;

document.body.appendChild(bgImage);