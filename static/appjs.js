/* Utilice estas instrucciones de JavaScript para dar el efecto 
ocultar el ENCABEZADO al avanzar el contenido de la seccion hacia arriba, 
y de mostrar el contenido del ENCABEZADO, al momento de avanzar 
contenido hacia abajo. SI REALIZA EL EFECTO, PERO ME DESACOMODA TODO*/

let ubicacionPrincipal = window.pageYOffset;
window.onscroll = function() {
    let desp_actual = window.pageYOffset;
    if (ubicacionPrincipal >= desp_actual){
        document.getElementById('navbar').style.top = '0';
    }
    else{
        document.getElementById('navbar').style.top = '-100px'; //
    }
    ubicacionPrincipal = desp_actual;
}

/* -------------------------------------------------------------------------

Funcion para Duplicar el renglon de la sección CHATS, ESTADOS y LLAMADAS*/
function duplicate(){
    var str_html='';
    var deb =document.querySelectorAll('.copy');
    /*la variable deb va a seleccionar todos los div que esten nombrados con la
    clase copy, el cual se encuentra como contenedor de cada una de las secciones,
    CHATS, ESTADOS y LLAMADAS*/
    for(i=0; i<deb.length; i++){
      var activado = deb[i].style.display;
      /* Se utiliza la variable ACTIVADO nos dirá cuál renglon de las secciones
      CHATS, ESTADOS y LLAMADAS está seleccionado, */
      if (activado=="block"){
       str_html = document.querySelector('.row-'+i).innerHTML; //Guardamos el ROW que este identificado en la clase del segundo nivel de cada seccion,  
       console.log(str_html) //grabar en consola el valor de ROW que se asigno en la variable
       document.querySelector('.row-'+i).innerHTML += str_html;
       //concatenamos el "row-i" y lo concatenamos con un valor igual almacenado en la consola
      }
     
   
    }
   
   
   }
   //Esta función activa DIV estados "como seleccionado"
   // y elimina la selección del resto
   function activetab(renglon){
    var tabestados=document.querySelectorAll('#bottom-line');
    var edo = document.querySelectorAll('.copy');
    for(var i=0; i<tabestados.length; i++){
        tabestados[i].style.borderBottom = '3px solid green';
        edo[i].style.display="none";
        //Todos los elementos del MENU les asigna un DISPLAY "NONE" para se ocultados
        // y el bolde inferior le asigna un color VERDE
    }

    /*En esta función, se va a activar la sección que se seleccione, la cual se va a identificar
    con el parametro que se va a asignar se la instrucción Data Set, que se asignara al activar 
    la instrucción ON-CLICK del DIV MENU*/

    tabestados[renglon].style.borderBottom = '3px solid white';
    edo[renglon].style.display="block";

    /* Al elemento identificado con el parametro RENGLON que se asigna al presionar el elemento y que es asignado 
    por el DATA SET, le asigna in STYLE.DYSPLAY "BLOCK", el cual se mostrar al haber seleccionado la sección. */
  
   }
   
   
   //Se implementa la función que fue asignada en clase
   document.addEventListener('DOMContentLoaded',function(){
   document.querySelectorAll('#bottom-line').forEach(function (div) {
   div.onclick=function(){
   
       //Asignamos el valos del DATASET que se selecciono 
       console.log(div.dataset.view)
       
       activetab(div.dataset.view);
       /*Se asigna el valor del Parametro a la función ACTIVETAB, el cual nos permitira 
       elegir la sección del menu deseada, permitiendo MOSTRAR u OCULTAR los elementos de 
       cada sección.*/

     
       
   };
   });
   /*
   window.onscroll=function(){
   this.console.log(window.scrollY)
   }*/
   });