const mycanvas = document.querySelector(".mycanvas");

mycanvas.width = window.innerWidth-40;
mycanvas.height = window.innerHeight-40;


const ctx = mycanvas.getContext("2d");

ctx.fillStyle = "green";
ctx.fillRect(10, 10, 100, 100);

ctx.fillStyle = "red";
ctx.fillRect(90, 90, 100, 100);

ctx.fillStyle = "rgba(255, 118, 214,.6)";
ctx.fillRect(160, 160, 100, 100);
