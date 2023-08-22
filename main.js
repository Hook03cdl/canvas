const mycanvas = document.querySelector('.mycanvas');

mycanvas.width = window.innerWidth - 40;
mycanvas.height = window.innerHeight - 40;

const ctx = mycanvas.getContext('2d');

ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 100, 100);

ctx.fillStyle = 'red';
ctx.fillRect(90, 90, 100, 100);

ctx.fillStyle = 'rgba(255, 118, 214,.6)';
ctx.fillRect(160, 160, 100, 100);

ctx.font = '80px Arial';
ctx.fillStyle = 'red';
ctx.fillText('Hola mundo', 500, 200);

ctx.strokeStyle = 'blue';
ctx.strokeText('Hola mundo', 510, 210);

var gradient = ctx.createLinearGradient(700, 0, 200, 100);
gradient.addColorStop(0, 'red');
gradient.addColorStop(1, 'blue');
ctx.fillStyle = gradient;
ctx.fillRect(450, 400, 300, 200);

const img = document.getElementById('cocodrilo');
mycanvas.addEventListener('click', (event) => {
	console.log(event.clientX, event.clientY);
	ctx.drawImage(img, event.clientX, event.clientY, 100, 100);
});
