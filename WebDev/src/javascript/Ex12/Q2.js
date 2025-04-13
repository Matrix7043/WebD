let pos = 200;
let direction = 1;
let canvas = document.createElement("canvas");
let ctx = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 300;
canvas.style.backgroundColor = "white";

function drawSun() {
    ctx.beginPath();
    ctx.arc(350, 50, 25, 0, 2 * Math.PI);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.stroke();

    for (let i = 0; i < 12; i++) {
        let angle = (i * Math.PI) / 6;
        let x1 = 350 + Math.cos(angle) * 25;
        let y1 = 50 + Math.sin(angle) * 25;
        let x2 = 350 + Math.cos(angle) * 35;
        let y2 = 50 + Math.sin(angle) * 35;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }
}

function drawDuck() {

    ctx.beginPath();
    ctx.arc(340, 180, 15, 0, 2 * Math.PI);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.stroke();


    ctx.beginPath();
    ctx.arc(355, 170, 8, 0, 2 * Math.PI);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.stroke();


    ctx.beginPath();
    ctx.arc(358, 168, 2, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();


    ctx.beginPath();
    ctx.moveTo(362, 170);
    ctx.lineTo(368, 168);
    ctx.lineTo(368, 172);
    ctx.closePath();
    ctx.fillStyle = "orange";
    ctx.fill();
}

function drawFlower() {
    ctx.beginPath();
    ctx.moveTo(340, 250);
    ctx.lineTo(340, 220);
    ctx.strokeStyle = "green";
    ctx.lineWidth = 2;
    ctx.stroke();

    for (let i = 0; i < 5; i++) {
        let angle = (i * Math.PI * 2) / 5;
        let x = 340 + Math.cos(angle) * 10;
        let y = 220 + Math.sin(angle) * 10;
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 2 * Math.PI);
        ctx.fillStyle = "pink";
        ctx.fill();
        ctx.stroke();
    }

    ctx.beginPath();
    ctx.arc(340, 220, 5, 0, 2 * Math.PI);
    ctx.fillStyle = "yellow";
    ctx.fill();
}

function drawStones() {
    ctx.fillStyle = "gray";
    ctx.beginPath();
    ctx.arc(30, 260, 10, 0, 2 * Math.PI);
    ctx.arc(40, 265, 12, 0, 2 * Math.PI);
    ctx.arc(50, 260, 8, 0, 2 * Math.PI);
    ctx.fill();
}

function drawStones1() {
    ctx.fillStyle = "gray";
    ctx.beginPath();
    ctx.arc(330, 260, 10, 0, 2 * Math.PI);
    ctx.arc(340, 265, 12, 0, 2 * Math.PI);
    ctx.arc(350, 260, 8, 0, 2 * Math.PI);
    ctx.fill();
}

function createHouse() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawSun();
    drawDuck();
    drawFlower();
    drawStones();
    drawStones1();

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.fillStyle = "orange";
    ctx.fillRect(50, 170, 50, 60);
    ctx.strokeRect(50, 170, 50, 60);
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.fillStyle = "blue";
    ctx.fillRect(55, 180, 10, 10);
    ctx.strokeRect(55, 180, 10, 10);
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.fillStyle = "brown";
    ctx.fillRect(50 + 20, 200, 10, 30);
    ctx.strokeRect(50 + 20, 200, 10, 30);
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(50, 170);
    ctx.lineTo(50 + 25, 170 - 30);
    ctx.lineTo(50 + 50, 170);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.ellipse(200, 150 + 50, 80, 50, 0, 0, 2 * Math.PI);
    ctx.fillStyle = "skyblue";
    ctx.fill();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(pos, 200);
    ctx.lineTo(pos + 50, 200);
    ctx.lineTo(pos + 50 - 10, 200 + 10);
    ctx.lineTo(pos + 50 - 10 - 30, 200 + 10);
    ctx.lineTo(pos, 200);
    ctx.fillStyle = "brown";
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.closePath();

    pos += direction * 2;

    if (pos > 240 || pos < 120) {
        direction *= -1;
    }

    document.body.appendChild(canvas);
    requestAnimationFrame(createHouse);
}

