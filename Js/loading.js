/*
$(window).load(function() {
    $("#loading-animation").fadeOut(1000);
});



if (("#loading-animation").css("display", "block")) {
    $("nav").css("position", "absolute;")
    $("header").css("position", "absolute;")
} else {
    $("nav").css("position", "fixed;")
    $("header").css("position", "fixed;")
}

//hide the loader after page is loaded fully
var loader = document.getElementById("#loading-animation");
window.addEventListener("load", function() {
    loader.style.height = "100%"
    loader.style.width = "100%"

    loader.style.borderRadius = "50%"
    loader.style.visibility = "hidden%"
});
*/

document.onreadystatechange = function(){
    if(document.readyState !== "complete"){
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#loading-animation").style.visibility = "visible";
    } else{
        document.querySelector("body").style.visibility = "visible";
        document.querySelector("#loading-animation").style.display = "none";
    }
}