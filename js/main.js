

function cambiarTexto(){

    const selectorTitulo = document.getElementById('titulo');
    const nombreUsuario = prompt("Ingrese su nombre");
    const contenedor = document.getElementById('cont-general');


    // cambiando contenido de una eetiqueta desde js
    selectorTitulo.innerText = "Óscar Castro";
    selectorTitulo.innerHTML = "<strong>USUARIO:</strong> " + nombreUsuario;
    //cambiando estilos de una etiqueta dede js
    selectorTitulo.style.backgroundColor = "white";
    selectorTitulo.style.color = "#000";
    selectorTitulo.style.padding = "20px"
    //cambiando estrutura  de una etiqueta desde js
    contenedor.classList.add('dia');
}

function circulo(){
    const selectorTitulo = document.getElementById('titulo');
    const circulo = document.getElementById('figura');
    const redondo = document.getElementById('cont-general');

    selectorTitulo.innerText = " Circulo";

    circulo.style.borderRadius = "50%";
    circulo.style.backgroundColor = "orange";
}

function rombo(){
    const selectorTitulo = document.getElementById('titulo');
    const rombo = document.getElementById('figura');
    

    selectorTitulo.innerText = " Rombo";

    rombo.style.rotate = "45deg"
    rombo.style.borderRadius = "0"
    rombo.style.backgroundColor = "orange";
}

function fondoColor(){
    const fondo = document.getElementById('cont-general');

    fondo.style.background = "red";
}

function fondoImagen(){
    const fondoImg = document.getElementById('cont-general');

    fondoImg.style.backgroundImage  = "url('img/hhdgh.jpeg')";
}

function btnTop(){
    const selectorTitulo = document.getElementById('titulo');
    const figura = document.getElementById('figura');

    figura.style.position = "absolute";
    figura.style.top = 0;
    figura.style.right = 0;
    figura.style.left = 0;
}

function btnLeft(){
    
    const selectorTitulo = document.getElementById('titulo');
    const figura = document.getElementById('figura');

    figura.style.position = "absolute";
    figura.style.top = 0;
    figura.style.left = 0;
}

function btnRight(){
    
    const selectorTitulo = document.getElementById('titulo');
    const figura = document.getElementById('figura');

    figura.style.position = "absolute";
    figura.style.top = 0;
    figura.style.right = 0;
    
}

function btnBottom(){
    const selectorTitulo = document.getElementById('titulo');
    const figura = document.getElementById('figura');

    figura.style.position = "absolute";
    figura.style.top = 1000;
    figura.style.right = 0;
    figura.style.left = 0;
}

function btnEstrella(){
    const selectorTitulo = document.getElementById('titulo');
    const estrella = document.getElementById('figura');
    const redondo = document.getElementById('cont-general');

    selectorTitulo.innerText = " Estrella";

    estrella.style.clipPath = "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";
    estrella.style.backgroundColor = "orange";
}

function panel_Lateral(){
    const panel = document.getElementById("panel_Lateral");
    panel.classList.toggle("active");
}

function panel_Superior(){
    const panelo = document.getElementById("panel_Superior");
    panelo.classList.toggle("active");
}

function diagonal() {
    const figura = document.getElementById('figura');
    figura.classList.toggle('diagonal');
}

function animation() {
    const figura = document.getElementById('figura');
    figura.classList.toggle('animation');
}


function fondoDegradado() {
    const contenedor = document.getElementById('cont-general');
    contenedor.classList.toggle('gradient');
}

