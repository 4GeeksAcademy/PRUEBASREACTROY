import React from "react";




const Anime = () => {
	
    let textoAnimacion = [
        ["A", "H", "O", "R", "C", "A", "D", "O", "?"],
        ["D", "E", "S", "M", "E", "M", "B", "R", "A", "D", "O", "?"],
        ["D", "E", "C", "A", "P", "I", "T", "A", "D", "O", "?"],
        ["A", "P", "U", "Ñ", "A", "L", "A", "D", "O", "?"],
        ["C", "U", "A", "N", "D", "O"],
        ["A", "H", "O", "R", "A", "?"],
        ["S", "I", " ", "LL", "E", "G", "A", " ", "A", "1000000"],
        ];

    let letraContador = -1;
    let posicionArray = 0;

    const contenedorAnimacion = document.querySelector(".contenedor__texto__animacion");

    function pintarTexto() {
        letraContador++;
        contenedorAnimacion.innerHTML += textoAnimacion[posicionArray][letraContador];

        if (letraContador === textoAnimacion[posicionArray].length - 1) {
            clearInterval(intervalo);

            setTimeout(() => {

                intervalo = setInterval(() => {
                    contenedorAnimacion.innerHTML = "";
                    letraContador--;
                    textoAnimacion[posicionArray].pop();
                    textoAnimacion[posicionArray].forEach((elemento) => {
                        contenedorAnimacion.innerHTML += elemento;
                    });

                    if(letraContador < 0){
                        clearInterval(intervalo);
                        posicionArray++;
                        intervalo = setInterval(pintarTexto, 150);

                        if(posicionArray > textoAnimacion.length - 1){
                            clearInterval(intervalo);
                            posicionArray = 0;
                            animacion();
                        }
                    }
                }, 150);

            }, 1000);
        }
    }
    let intervalo = setInterval(pintarTexto, 150);
    
}
window.addEventListener("load", Anime);


export default Anime;