function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  const currentTime = `${hours}:${minutes}:${seconds}`;
  document.getElementById('digitalClock').textContent = currentTime;
}

// Initial call
updateClock();

// Update every second
setInterval(updateClock, 1000);
