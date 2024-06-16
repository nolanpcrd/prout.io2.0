function redirectToGame() {
    const name = document.getElementById('input-form-name').value;
    window.location.href = 'game.html?value=' + encodeURIComponent(name);
}