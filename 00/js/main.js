var topDiv = document.getElementById("mueve");
var speed = 1.5;

window.onscroll = function()
{
var yOffset = window.pageYOffset;
topDiv.style.backgroundPosition = "0px "+ (yOffset / speed) + "px";
}