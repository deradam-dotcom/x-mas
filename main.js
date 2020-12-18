const snowfallDiv = document.getElementById("snowfall");
const canvas = document.createElement("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

snowfallDiv.appendChild(canvas);

const ctx = canvas.getContext("2d");
const w = canvas.width;
const h = canvas.height;

const backgroundImage = new Image();
backgroundImage.src = "/img/karifa.jpg";

const flakes = [];
class snowfall {
  static snowFall() {
    ctx.drawImage(backgroundImage, 0, 0, w, h);
    snowfall.addFlakes();
    snowfall.addSnow();
  }
  static addFlakes() {
    const x = Math.ceil(Math.random() * w);
    const speed = Math.ceil(Math.random() * 5);
    const radius = 10 * Math.PI;

    flakes.push({
      x: x,
      y: 0,
      speed: speed,
      radius: radius,
    });
  }

  static addSnow() {
    for (let i = 0; i < flakes.length; i++) {
      let oneFlake = flakes[i];

      //creating circles
      ctx.beginPath();

      //color the circles
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)";

      //draving circle
      ctx.arc(
        oneFlake.x,
        (oneFlake.y += oneFlake.speed / 2),
        oneFlake.speed * 0.8,
        0,
        oneFlake.radius
      );
      ctx.fill();
    }
  }
}
function play() {
  let audio = new Audio("/img/Santa Claus Is Coming To Town.m4a");
  audio.play();
}
setInterval(() => snowfall.snowFall(), 8);
play();
