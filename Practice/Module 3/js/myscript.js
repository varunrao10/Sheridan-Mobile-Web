// myscript.js for selectorsActions.html
// 1191 Updated
$(document).ready(function () {

    console.log("in doc ready");
    $("h2:first").html("Selector and:");
    $("h2:first").append("Actions and DOM");
    $("h2:nth(0)").css("font-family", "Algerian");
    $("h2:nth(0)").addClass("h2Style");
    $("#gifImages").click(function () {
        $("#s1 img[src $= '.gif']").addClass("gifBorder");
    });

    $("#clearGIF").click(function () {
        $("#s1 img[src $= '.gif']").removeClass("gifBorder");
    });

    $("#pngToggle").click(function () {
        $("#s1 img[src $= '.png']").toggle();
    });

    $("#startsWithEx").click(function () {
        $("section[title ^= 'Text']").css("color", "red");
    });

    $("#containsEx").click(function () {
        $("section:contains('color')").css("font-style", "italic");
    });

    $("#hasEx").click(function () {
        $("section:has(p:contains('para3'))").css("text-decoration", "underline");
    });

    $("#hoverClick").click(function () {
        alert("Clicked");
    });

    $("#hoverClick").mouseover(function () {
        $(this).css("background", "yellow");
    });

    $("#hoverClick").mouseout(function () {
        $(this).css("background", "white");
    });

    $("#slide").click(function () {
        $(this).slideToggle("slow");
    });

    $("#fade").click(function () {
        $(this).fadeOut(3000), function () {
            $("#callBack").html("<img src=./images/back.gif>");}
    });

    $("#callBack").click(function () {
        $("fade").fadeIn(3000), function () { $("#callBack").html("");}
    });

        
    $("#rbutton").click(function () {
        $("img#pear").remove();
    });

      
    $("#dbutton").click(function () {
        a = $("img#strawberry").detach();
    });

    $("#d2button").click(function () {
        $("img#apple").last().after(a);
    });
    
    $("#abutton").click(function () {
        $("img#pieApple").replaceWith(a);
    });

});