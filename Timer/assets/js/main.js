const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;


function iniciaRelogio() {
    timer = setInterval(function() {
        segundos ++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
}, 1000);
}

document.addEventListener('click', function(e) {
    const el = e.target // e.target mostra qual elemento é alvo do evento 'click'.

    if (el.classList.contains('iniciar')) { // Se existe a classe zerar, no elemento clicado, execute
        relogio.classList.remove('pausado');
        clearInterval(timer);
        iniciaRelogio();
    }

    if (el.classList.contains('zerar')) { // Se existe a classe zerar, no elemento clicado, execute
        relogio.classList.remove('pausado');
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
    }

    if (el.classList.contains('pausar')) { // Se existe a classe zerar, no elemento clicado, execute
        clearInterval(timer);
        relogio.classList.add('pausado');
    }

    
});


function criaHoraDosSegundos (segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC',
    });
}