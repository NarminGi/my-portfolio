//Particules emitter simulation
class Star {
  constructor(x, y, dx, dy, size, color) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.size = size;
      this.color = color;
      this.alpha = 1;
  }
  
  draw() {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
          ctx.lineTo(
              this.x + Math.cos((Math.PI * 2 * i) / 5) * this.size,
              this.y + Math.sin((Math.PI * 2 * i) / 5) * this.size
          );
          ctx.lineTo(
              this.x + Math.cos(((Math.PI * 2 * i) / 5 + Math.PI / 5)) * (this.size / 2),
              this.y + Math.sin(((Math.PI * 2 * i) / 5 + Math.PI / 5)) * (this.size / 2)
          );
      }
      ctx.closePath();
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.restore();
  }
  
  update() {
      this.x += this.dx;
      this.y += this.dy;
      this.alpha -= 0.01;
      this.alpha = Math.max(0, this.alpha);
  }
}

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const stars = [];

function createStars(x, y) {
  const starCount = 5;
  for (let i = 0; i < starCount; i++) {
      const dx = (Math.random() - 0.5) * 2;
      const dy = (Math.random() - 0.5) * 2;
      const size = Math.random() * 5 + 2;
      const color = `rgba(255, ${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 150) + 100}, ${Math.random()})`;
      stars.push(new Star(x, y, dx, dy, size, color));
  }
}

// Function to animate stars
function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  for (let i = 0; i < stars.length; i++) {
      stars[i].update();
      stars[i].draw();
      
      if (stars[i].alpha <= 0) {
          stars.splice(i, 1);
          i--;
      }
  }
}

canvas.addEventListener("mousemove", (event) => {
  createStars(event.clientX, event.clientY);
});

animate();
