const startDate = new Date('October 22, 2024 00:00:00').getTime();

function updateTimer() {
  const now = new Date().getTime();
  const distance = now - startDate;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('days-value').textContent = days;
  document.getElementById('hours-value').textContent = hours;
  document.getElementById('minutes-value').textContent = minutes;
  document.getElementById('seconds-value').textContent = seconds;

  requestAnimationFrame(updateTimer);
}

requestAnimationFrame(updateTimer);