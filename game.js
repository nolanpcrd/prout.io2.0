let name;
let x=0;
let y=0;
let map = document.getElementById("map");

let playerMiniMap = document.getElementById("mini-map-player");
let xPlayerMiniMap = 10;
let yPlayerMiniMap = 5;
playerMiniMap.style.left = xPlayerMiniMap + "%";
playerMiniMap.style.top = yPlayerMiniMap + "%";

const urlParams = new URLSearchParams(window.location.search);

name = urlParams.get('value');

let keys = {};

window.addEventListener('keydown', function(event) {
    keys[event.key] = true;
});

window.addEventListener('keyup', function(event) {
    keys[event.key] = false;
});

function gameLoop() {
    if (keys['z']) {
        y += 10;
        yPlayerMiniMap -= 0.082;
    }
    if (keys['s']) {
        y -= 10;
        yPlayerMiniMap += 0.082;
    }
    if (keys['q']) {
        x += 10;
        xPlayerMiniMap -= 0.082;
    }
    if (keys['d']) {
        x -= 10;
        xPlayerMiniMap += 0.082;
    }
    map.style.top = y + "px";
    map.style.left = x + "px";
    playerMiniMap.style.top = yPlayerMiniMap + "%";
    playerMiniMap.style.left = xPlayerMiniMap + "%";
    requestAnimationFrame(gameLoop);
}

gameLoop();

