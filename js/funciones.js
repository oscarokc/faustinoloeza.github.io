x=$(document);
    x.ready(flipi);
    x.ready(menu);
    x.ready(girarimagenes);
     function girarimagenes(){var x=$('ul#imagenes');x.roundabout({btnNext: ".next", duration: 450,reflect:true, btnPrev: ".prev",duration: 450, reflect: false,autoplay: true,autoplayDuration: 5000});}function menu (){var x=$("#menu");x.click(menumagico);}function menumagico(){var x=$("nav ul");x.slideToggle("fast");}
    function flipi()
    {   
        var x=$("#jjj");
        x.click(flipir);
    }
    function flipir()
    {
        $("#gen").flip({
            direction:"tb"
        });
    }