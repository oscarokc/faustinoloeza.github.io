/*Funciones 
autor: Faustino Loeza Perez
fecha: 09/2013
*/
x=$(document);
    x.ready(girarimagenes);
    x.ready(menu);
     
     function girarimagenes()
     {
          x=$('ul#imagenes');
          x.roundabout({btnNext: ".next", duration: 450,reflect:true, btnPrev: ".prev",duration: 450, reflect: false,autoplay: true,autoplayDuration: 5000});
     }
     function menu ()
     {
        var x=$("#menu");
          x.click(menumagico);
     }
     function menumagico()
     {
        var x=$("nav ul");
        x.slideToggle("slow");
     }

    