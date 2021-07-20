const images = [ "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpeg"];

const randomImages = images[Math.floor(Math.random() * images.length)];


const newImage = `url(img/${randomImages})`;
document.body.style.backgroundImage = newImage;

