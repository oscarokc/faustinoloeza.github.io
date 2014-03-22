$(function() {
     	 		$(".rslides").responsiveSlides({
     	 			auto:true,
     	 			speed:400,
     	 			speed:600,});
     	 	});
$(document).ready(function() {
    $("#ga").click(function() {
        $("body").css("background-color","#0051BC")
        $("header").css("background-color","#FF5A00");
        $(".parrafo").css("background-color","#C9D41E");
        $(".galeria").css("background-color","#C9D41E");
    });
     $("#go").click(function() {
        $("body").css("background-color","#FF5A00")
        $("header").css("background-color","#FF5A00");
        $(".parrafo").css("background-color","#0051BC");
        $(".galeria").css("background-color","#DFE3D0");
    });
       $("#pri").click(function() {
        $("body").css("background-color","#A8BBB7")
        $("header").css("background-color","#90AEAC");
        $(".parrafo").css("background-color","#F7ECB6");
        $(".galeria").css("background-color","#BBCBC1");
    });
});
