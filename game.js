let name;
let x=0;
let y=0;

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
    requestAnimationFrame(gameLoop);
}

gameLoop();

