let name;
let x=0;
let y=0;

const speed =5;

const mapContainer = document.getElementById('map-container');
const mapWidth = mapContainer.offsetWidth;
const mapHeight = mapContainer.offsetHeight;
const urlParams = new URLSearchParams(window.location.search);

name = urlParams.get('value');


function updatePlayerPosition() {
    player.style.left = `${x}px`;
    player.style.top = `${y}px`;
}

let keys = {};

window.addEventListener('keydown', function(event) {
    keys[event.key] = true;
});

window.addEventListener('keyup', function(event) {
    keys[event.key] = false;
});

// Game loop
function gameLoop() {
    if (keys['ArrowUp'] || keys['z']) {
        y -= speed;
    }
    if (keys['ArrowDown'] || keys['s']) {
        y += speed;
    }
    if (keys['ArrowLeft'] || keys['q']) {
        x -= speed;
    }
    if (keys['ArrowRight'] || keys['d']) {
        x += speed;
    }



    if (x < 0) x = 0;
    if (y < 0) y = 0;
    if (x > mapWidth - player.offsetWidth) x = mapWidth - player.offsetWidth;
    if (y > mapHeight - player.offsetHeight) y = mapHeight - player.offsetHeight;

    updatePlayerPosition();
    requestAnimationFrame(gameLoop);
}

gameLoop();