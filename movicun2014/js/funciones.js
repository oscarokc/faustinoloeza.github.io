/*Funciones 
autor: Faustino Loeza Perez
fecha: 09/2013
*/
x=$(document);
x.ready(girarimagenes);
  
     
      function girarimagenes()
     {
          x=$('ul#imagenes');
          x.roundabout({btnNext: ".next", duration: 450,reflect:true, btnPrev: ".prev",duration: 450, reflect: false,autoplay: true,autoplayDuration: 5000});
     }

    