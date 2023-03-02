window.onload = () => {

    let botonServir = document.getElementById('boton-servirJS');
    let videoTacita = document.getElementById('tacitaJS');
    let videoTacitaHumeando = document.getElementById('tacita-humeandoJS');
    let estadoTacita = 'vacia';
    let botonTomar = document.getElementById('boton-tomarJS');
    let videoTacitaTomando = document.getElementById('tacita-tomandoJS');


//Aprieto el botón de servir. Q cuando le hagan click al botonServir, ejecute una función; la cual x dentro, ejecutará otra función
botonServir.onclick = () => {
 
    if (estadoTacita == 'vacia'){ //----1) Me fijo si la taza está vacía:   
        reproducir(videoTacita);  //--Si está vacía, q' reproduzca el video y q' luego lo oculte, etc.
       
        videoTacita.onended = () =>{
            ocultar(videoTacita);
            mostrar(videoTacitaHumeando);
            reproducir(videoTacitaHumeando);
            resetear(videoTacita);
            estadoTacita = 'llena';               
    }

  }
}

//--------------------------------------el otro boton de TOMAR------------------
  
    
//---------- Aprieto el boton de tomar, se fija si el estado de la tacita es 'llena'
    botonTomar.onclick = () => {

        if (estadoTacita == 'llena') {            
            // Si tiene, se vacía la tacita
            ocultar(videoTacitaHumeando);
            mostrar(videoTacitaTomando);
            reproducir(videoTacitaTomando);
            resetear(videoTacitaHumeando);
            //---------------------------------------cuando el video de la taza tomando termine
            videoTacitaTomando.onended = () => {
                mostrar(videoTacita);
                ocultar(videoTacitaTomando);
                resetear(videoTacitaTomando);
                estadoTacita = 'vacia';
            }
        }
    }


}


/*----------------------------------------------------------------Declaro FUNCIONES-----------------*/
function reproducir(video, loopear) {  //-----------------Le da play al video
    if (loopear == 'loopear') { //---si loopear viene c/ el valor de loopear, entonces video.loop= true (se frenaba el humo)
        video.loop = true;
    }
    video.play();
}


function ocultar(video) {
    video.classList.add('display-none'); //----Clase q' puse en CSS p/ ocultar el video
}


function mostrar (video) {
    video.classList.remove('display-none'); //---solo saca la clase 'display-none'
}

function resetear (video) { //---rebobino: q' corra la línea de tiempo al segundo 0
    video.pause();
    video.currentTime = 0;
}



/*----------------------------------------------------------------------------------------------------------------*/


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