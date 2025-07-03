export function updateClock() {
  const now = new Date();

  const hourDeg = (now.getHours() % 12) * 30 + (now.getMinutes() * 0.5);
  const minuteDeg = now.getMinutes() * 6 + (now.getSeconds() * 0.1);
  const secondDeg = now.getSeconds() * 6;

  document.querySelector('.hour-hand').style.transform = `rotate(${hourDeg}deg)`;
  document.querySelector('.minute-hand').style.transform = `rotate(${minuteDeg}deg)`;
  document.querySelector('.second-hand').style.transform = `rotate(${secondDeg}deg)`;
}

export function startClock() {
  updateClock();
  setInterval(updateClock, 1000);
}
