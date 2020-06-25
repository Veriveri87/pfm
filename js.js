document.addEventListener('DOMContentLoaded');


function abrirMenu(){
var btnMenu = document.querySelector("#btnMenu")
var estadoMenu = 0

    document.querySelector("#btnMenu").classList.toggle("menu-open");
    document.querySelector("#btnMenu").classList.toggle("btnX");

    if(estadoMenu == 0){
        document.querySelector("nav").style.right = "-10%";
        document.querySelector("nav").style.top = scrollHecho + "px";
        document.querySelector("body").style.overflow = "hidden";
        estadoMenu = 1;
    }else {
        document.querySelector("nav").style.right = "-100%";
        document.querySelector("body").style.overflow = "initial";
        estadoMenu = 0;
    }

}
