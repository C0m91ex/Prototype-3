const trafficLight = document.getElementById('traffic-light');
const playerImage = document.getElementById('player-image');
const startButton = document.getElementById('start-btn');

let isGreenLight = true;
let gameInterval;
let playerPosition = 10;
let gameOver = false;

// Start game function
startButton.addEventListener('click', () => {
  gameOver = false;
  playerPosition = 10;
  playerImage.style.bottom = `${playerPosition}px`;
  startTrafficLight();
  document.addEventListener('keydown', movePlayer);
});

// Traffic light control
function startTrafficLight() {
  clearInterval(gameInterval);
  gameInterval = setInterval(() => {
    if (isGreenLight) {
      trafficLight.classList.replace('green', 'red');
    } else {
      trafficLight.classList.replace('red', 'green');
    }
    isGreenLight = !isGreenLight;
  }, 2000); 
}

// Move player function
function movePlayer(event) {
  if (gameOver) return;

  if (isGreenLight) {
    if (event.key === 'ArrowUp') {
      playerPosition += 10;
      playerImage.style.bottom = `${playerPosition}px`;
      if (playerPosition >= 300) {
        endGame('You win!');
      }
    }
  } else {
    endGame('You moved on a red light! Game Over.');
  }
}

// End game function
function endGame(message) {
  gameOver = true;
  clearInterval(gameInterval);
  alert(message);
  document.removeEventListener('keydown', movePlayer);
}
