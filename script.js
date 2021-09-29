var rodarIcone=document.querySelector(".fas");
function mostrar(NumElemento){
    rodarIcone.style.rotate="45deg";
    switch(NumElemento){
        case 1: document.getElementById("mostrarTexto1").classList.toggle("aparecer");
        break;
        case 2: document.getElementById("mostrarTexto2").classList.toggle("aparecer");break;
    }
}