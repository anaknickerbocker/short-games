window.onload = function () {
  let count = 0;
  let x = 300;
  let y = 350;

  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');

  let t = Date.now();
  let speed = 25;

  const draw = () => {
    let timePassed = (Date.now() - t) / 1000;
    t = Date.now();

    context.clearRect(0, 0, 600, 400);

    context.beginPath();
    context.arc(x, y, 50, 0, 2 * Math.PI);
    context.fillStyle = 'red';
    context.fill();

    context.font = '25px Arial';
    context.fillStyle = 'white';
    context.fillText(`Count: ${count}`, 20, 30);

    if (y <= 350) {
      speed += 50 * timePassed;
      y += speed * timePassed;
    } else if (y > 350) {
      count = 0;
    }

    window.requestAnimationFrame(draw);
  };

  const jump = () => {
    count += 1;
    y -= 25;
    speed = 25;
    draw();
  };

  document.onkeydown = jump;
  document.ontouchstart = jump;
  document.onmousedown = jump;

  draw();
};
