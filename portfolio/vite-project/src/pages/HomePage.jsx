import { useEffect, useRef } from 'react';

const HomePage = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let mouse = { x: canvas.width / 2, y: canvas.height / 2, out: false };

    canvas.onmouseout = () => {
      mouse.out = true;
    };

    canvas.onmousemove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        out: false,
      };
    };

    let gravityStrength = 10;
    let particles = [];
    let spawnTimer = 0;
    let spawnInterval = 10;
    let type = 0;
    let time = performance.now();

    const newParticle = () => {
      type = type ? 0 : 1;
      particles.push({
        x: mouse.x,
        y: mouse.y,
        xv: type ? 18 * Math.random() - 9 : 24 * Math.random() - 12,
        yv: type ? 18 * Math.random() - 9 : 24 * Math.random() - 12,
        c: type
          ? 'rgb(255,' + ((200 * Math.random()) | 0) + ',' + ((80 * Math.random()) | 0) + ')'
          : 'rgb(255,255,255)',
        s: type ? 5 + 10 * Math.random() : 1,
        a: 1,
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.globalAlpha = p.a;
        ctx.fillStyle = p.c;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.s, 0, 2 * Math.PI);
        ctx.fill();
      }
    };

    const calculate = (newTime) => {
      const dt = newTime - time;
      time = newTime;

      if (!mouse.out) {
        spawnTimer += dt < 100 ? dt : 100;
        while (spawnTimer > 0) {
          newParticle();
          spawnTimer -= spawnInterval;
        }
      }

      const particleOverflow = particles.length - 700;
      if (particleOverflow > 0) {
        particles.splice(0, particleOverflow);
      }

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (!mouse.out) {
          const x = mouse.x - p.x;
          const y = mouse.y - p.y;
          let a = x * x + y * y;
          a = a > 100 ? gravityStrength / a : gravityStrength / 100;
          p.xv = (p.xv + a * x) * 0.99;
          p.yv = (p.yv + a * y) * 0.99;
        }
        p.x += p.xv;
        p.y += p.yv;
        p.a *= 0.99;
      }
    };

    const loop = (newTime) => {
      draw();
      calculate(newTime);
      requestAnimationFrame(loop);
    };

    requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      <canvas
        ref={canvasRef}
      ></canvas>
    </div>
  );
};

export default HomePage;
