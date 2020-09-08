window.addEventListener('load', () => {
    const sonidos = document.querySelectorAll('.sonidos');
    const pads = document.querySelectorAll('.pads div');

    // sonidos
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function () {
            // se puede tocar de nuevo aunque no haya terminado
            sonidos[index].currentTime = 0;
            sonidos[index].play();
        });
    });
});