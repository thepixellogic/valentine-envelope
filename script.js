const envelope = document.getElementById('envelope');
const actionBtn = document.getElementById('actionBtn');
const heartContainer = document.getElementById('heartContainer');

let isOpen = false;
let heartInterval = null;

// The UI state controller
actionBtn.addEventListener('click', () => {
  isOpen = !isOpen;

  if (isOpen) {
    envelope.classList.add('open');
    actionBtn.textContent = 'Close Letter';
    // Initialize heart engine bursts instantly on interaction
    spawnHeartBurst(15);
    heartInterval = setInterval(() => spawnHeartBurst(3), 400);
  } else {
    envelope.classList.remove('open');
    actionBtn.textContent = 'Open Letter';
    clearInterval(heartInterval);
  }
});

// High-performance particle node generator
function spawnHeartBurst(count) {
  const emojis = ['❤️', '💖', '✨', '💕', '💘'];
  
  for (let i = 0; i < count; i++) {
    const heart = document.createElement('span');
    heart.classList.add('floating-heart');
    heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    // Generate accurate spatial offsets relative to envelope dimensions
    const xStart = Math.random() * 160 + 60; // Concentrated around middle pocket width
    const xEnd = xStart + (Math.random() * 120 - 60); // Drifts outward horizontally
    const duration = Math.random() * 1.5 + 1.0; // Dynamic velocity variations
    const scale = Math.random() * 0.6 + 0.7;

    // Inject direct variables straight to render thread
    heart.style.setProperty('--x-start', `${xStart}px`);
    heart.style.setProperty('--x-end', `${xEnd}px`);
    heart.style.setProperty('--duration', `${duration}s`);
    heart.style.setProperty('--scale', scale);
    heart.style.fontSize = `${Math.random() * 10 + 14}px`;

    heartContainer.appendChild(heart);

    // Garbage clean collection safely when animation completes
    setTimeout(() => {
      heart.remove();
    }, duration * 1000);
  }
}