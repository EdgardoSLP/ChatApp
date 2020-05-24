

        
/* Utilice estas instrucciones de JavaScript para dar el efecto 
ocultar el ENCABEZADO al avanzar el contenido de la seccion hacia arriba, 
y de mostrar el contenido del ENCABEZADO, al momento de avanzar 
contenido hacia abajo. SI REALIZA EL EFECTO, PERO ME DESACOMODA TODO
-------------------------------------------------------------------------

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
} else {
    document.getElementById("navbar").style.top = "-50px";
}
prevScrollpos = currentScrollPos;
} 

--------------------------------------------------------------------------*/

/*Se crearon la funciones de Ocultar y Mostrar para cada uno de los relglones
de información, y que se ocultara, si ese renglon no corresponde a esa sección, 
y se mostrara la información que le corresponde*/ 

function ocultarChat(){
    var chat = document.querySelectorAll('.allRow'); 
 
    

    for (var i=0; i<chat.length; i++){
        chat[i].style.display="none";

        
    }
}

function mostrarChat(){
    var chat = document.querySelectorAll('.allRow');

    

    for (var i=0; i<chat.length; i++){
        chat[i].style.display="inline";

        
    }
}

/* Funciones para mostrar y ocultar el/los renglon(es) de la sección CHAT
--------------------------------------------------------------------------*/

function ocultarEstados(){
    var edo = document.querySelectorAll('.copyEdo');

    for (var i=0; i<edo.length; i++){
        edo[i].style.display="none";

    }
}

function mostrarEstados(){
    var edo = document.querySelectorAll('.copyEdo'); 

    for (var i=0; i<edo.length; i++){
        edo[i].style.display="block";
    }
}

/* Funciones para mostrar y ocultar el/los renglon(es) de la sección ESTADOS
--------------------------------------------------------------------------*/

function ocultarLlamadas(){
    var call = document.querySelectorAll('.copyCall');

    for (var i=0; i<call.length; i++){
        call[i].style.display="none";

    }
}

function mostrarLlamadas(){
    var call = document.querySelectorAll('.copyCall'); 

    for (var i=0; i<call.length; i++){
        call[i].style.display="block";
        
    }
}
/* Funciones para mostrar y ocultar el/los renglon(es) de la sección LLAMADAS
--------------------------------------------------------------------------*/

/* Funcion para Duplicar el renglon ROW de la sección CHATS*/
function duplicate(){
    var str_html = '';
    var deb = document.querySelector('.allRow').innerHTML;
    console.log(deb); //log in console class copy innerHTML 
    str_html += deb;
    console.log(str_html);  //log in console class renglon innerHTML - Guardar en registro en contenido de la clase copy
    
    document.querySelector('body').innerHTML += str_html;
}
/* El problema que tengo es que al duplicar los renglones de chat, no los puedo 
ocultar al momento de cambiar de a la seccion de ESTADOS y LLAMADAS, unicamente 
se oculta el primer renglon, y al regresar se muestra, pero no los que se duplican */

/*-------------------------------------------------------------------------
 Funciones para incluir la linea blanca en cada uno de las estiquetas de cada
 una de las secciones */
function activetab1(){
    var tabestados = document.querySelectorAll('#bottom-line');
    for (var i = 0; i<tabestados.length; i++){
        tabestados[i].style.borderBottom = '3px solid green';
    }
    tabestados[0].style.borderBottom = '3px solid white';

    ocultarEstados();
    mostrarChat();
    ocultarLlamadas();
}

function activetab2(){
    var tabestados = document.querySelectorAll('#bottom-line');
    for (var i = 0; i<tabestados.length; i++){
        tabestados[i].style.borderBottom = '3px solid green';
    }
    tabestados[1].style.borderBottom = '3px solid white';

    ocultarChat();
    mostrarEstados();
    ocultarLlamadas();
}

function activetab3(){
    var tabestados = document.querySelectorAll('#bottom-line');
    for (var i = 0; i<tabestados.length; i++){
        tabestados[i].style.borderBottom = '3px solid green';
    }
    tabestados[2].style.borderBottom = '3px solid white';

    ocultarChat();
    ocultarEstados();
    mostrarLlamadas();
}

