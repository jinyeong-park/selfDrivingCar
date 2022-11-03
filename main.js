const canvas = document.getElementById("myCanvas");
canvas.height = window.innerHeight;
canvas.width = 200;

const ctx = canvas.getContex("2d");
const car = new Car(100, 100, 30, 50);
car.draw(ctx);
