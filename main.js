window.onload = () => {

    let botonServir = document.getElementById('boton-servirJS');
    let videoTacita = document.getElementById('tacitaJS');
    let videoTacitaHumeando = document.getElementById('tacita-humeandoJS');
    let estadoTacita = 'vacia';

//Aprieto el botón de servir.
botonServir.onclick = () => {
    //Fijarse si la taza está vacía.
    if (estadoTacita == 'vacia'){
    //Reproducir video de la tetera sirviendo.
    reproducir(videoTacita);

    videoTacita.onended = () =>{
    //Ocultar video
    ocultar(videoTacita);

    
    }

    }
}


}

/*
Lo que hay que hacer:
- Aprieto el botón de servir.
- Fijarse si la taza está vacía.
- Reproducir video de la tetera sirviendo.
- Ocultar video.
- Mostrar video de taza humeando.
- Reproducir video.
- Rebobinar video  de tetera sirviendo.
- Setear estado de la taza llena.


*/