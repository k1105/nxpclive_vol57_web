let num = 1;
setInterval(() => {
  const el = document.getElementById("backImg");
  num = ((num + 1) % 3) + 1;
  el.src = `img/materials/yashi0${num}.png`;
}, 100);
