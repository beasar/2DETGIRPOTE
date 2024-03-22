$(document).ready(function(){
    $(".hamburger-menu").click(function(){
        console.log("Menu blev klikket");
        $(this).toggleClass("active");
        $(".nav-list").toggleClass("active");
    });
});
