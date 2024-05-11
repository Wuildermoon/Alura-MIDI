const listaDeTeclas = document.querySelectorAll('.tecla');

function playSonido(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

for (let i = 0; i < listaDeTeclas.length; i++) {
    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#sonido_${instrumento}`;

    tecla.onclick = function(){
        playSonido(idAudio);
    }
    tecla.onkeydown = function (event) {
        if (event.code === 'Space' || event.code === 'Enter') {
            tecla.classList.add('activa');
        }
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('activa');
    }
}