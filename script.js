```javascript
// Mobile Navigation Toggle
const navLinks = document.querySelector('.nav-links');
const joinBtn = document.querySelector('.join-btn');
const closeBtn = document.querySelector('.close-btn');

joinBtn.addEventListener('click', () => {
  navLinks.classList.add('active');
  joinBtn.style.display = 'none';
  closeBtn.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  navLinks.classList.remove('active');
  joinBtn.style.display = 'block';
  closeBtn.style.display = 'none';
});

// Play & Learn: Projectile Motion
const angleInput = document.getElementById('projectile-angle');
const velocityInput = document.getElementById('projectile-velocity');
const angleValue = document.getElementById('angle-value');
const velocityValue = document.getElementById('velocity-value');
const projectileCanvas = document.getElementById('projectile-canvas').getContext('2d');

angleInput.addEventListener('input', () => {
  angleValue.textContent = `${angleInput.value}°`;
});

velocityInput.addEventListener('input', () => {
  velocityValue.textContent = `${velocityInput.value} m/s`;
});

function launchProjectile() {
  projectileCanvas.clearRect(0, 0, 400, 200);
  projectileCanvas.fillStyle = 'blue';
  projectileCanvas.fillRect(50, 150, 10, 10); // Placeholder projectile
  alert(`Launched with angle ${angleInput.value}° and velocity ${velocityInput.value} m/s`);
}

// Play & Learn: Periodic Table Quiz
function checkAnswer(element) {
  const periodicCanvas = document.getElementById('periodic-canvas').getContext('2d');
  periodicCanvas.clearRect(0, 0, 400, 200);
  periodicCanvas.fillStyle = 'green';
  periodicCanvas.fillText(`Selected: ${element}`, 50, 100); // Placeholder quiz response
  alert(`You selected ${element}`);
}

// Play & Learn: Orbit Simulator
const massInput = document.getElementById('orbit-mass');
const massValue = document.getElementById('mass-value');
const orbitCanvas = document.getElementById('orbit-canvas').getContext('2d');

massInput.addEventListener('input', () => {
  massValue.textContent = massInput.value;
});

function resetOrbit() {
  orbitCanvas.clearRect(0, 0, 400, 200);
  orbitCanvas.fillStyle = 'red';
  orbitCanvas.beginPath();
  orbitCanvas.arc(200, 100, 20, 0, 2 * Math.PI); // Placeholder planet
  orbitCanvas.fill();
  alert(`Orbit reset with mass ${massInput.value}`);
}
```