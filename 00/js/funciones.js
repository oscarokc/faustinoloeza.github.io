$(function() {
     	 		$(".rslides").responsiveSlides({
     	 			auto:true,
     	 			speed:400,
     	 			speed:600,});
     	 	});
$(document).ready(function() {
    $("#ga").click(function() {
        $("body").css("background-color","#fbf4ca");
        $("body p").css("color","#000000");
        $("header").css("background-color","#6ed0c0");
        $(".parrafo").css("background-color","#fef2a8");
        $(".galeria").css("background-color","#fef2a8");
        $("ol").css("background-color","#FFDB7C");
    });
     $("#go").click(function() {
        $("body").css("background-color","#f7b03e");
        $("body p").css("color","#ffffff");
        $("header").css("background-color","#FF5A00");
        $(".parrafo").css("background-color","#4e5864");
        $(".galeria").css("background-color","#bfbfbf");
         $("ol").css("background-color","#4e5864");
    });
       $("#pri").click(function() {
        $("body").css("background-color","#A8BBB7")
        $("body p").css("color","#000000");
        $("header").css("background-color","#90AEAC");
        $(".parrafo").css("background-color","#F7ECB6");
        $(".galeria").css("background-color","#BBCBC1");
        $("ol").css("background-color","white");
    });
});
