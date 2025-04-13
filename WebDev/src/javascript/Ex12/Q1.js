let pos = 200
let direction = 1;
let canvas = document.createElement("canvas");
let ctx = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 300;
canvas.style.backgroundColor = "white";


function createHouse(){

    ctx.beginPath()
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.fillStyle = "orange";
    ctx.fillRect(50, 170, 50, 60)
    ctx.strokeRect(50, 170, 50, 60)
    ctx.closePath()

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.fillStyle = "blue";
    ctx.fillRect(55, 180, 10, 10)
    ctx.strokeRect(55, 180, 10, 10)
    ctx.closePath()

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.fillStyle = "brown";
    ctx.fillRect(50+20, 200, 10, 30)
    ctx.strokeRect(50+20, 200, 10, 30)
    ctx.closePath()

    ctx.beginPath();
    ctx.moveTo(50, 170);
    ctx.lineTo(50+25, 170-30);
    ctx.lineTo(50+50, 170);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();


    ctx.beginPath();
    ctx.arc(50+25, 250, 10, 0, 2*Math.PI);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.ellipse(200, 150+50, 80, 50, 0,0, 2*Math.PI)
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

    pos += direction * 2; // Move the boat

    if (pos > 240 || pos < 120) {
        direction *= -1;
    }


    document.body.appendChild(canvas);
    requestAnimationFrame(createHouse);

}