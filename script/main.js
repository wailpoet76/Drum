window.addEventListener("keydown", function (e) {
    this.document.querySelector(`[data-key="${e.keyCode}"]`).classList.add('playing');
    let soundFile = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (soundFile) {

        soundFile.currentTime = 0;
        soundFile.play();
    }
    else return;
});
window.addEventListener("keyup", function (e) {
    this.document.querySelector(`[data-key="${e.keyCode}"]`).classList.remove('playing');
});