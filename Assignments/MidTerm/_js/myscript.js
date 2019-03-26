

$(document).ready(function(){

    /*Include “Sheridan” in <body> section where indicated and change formatting to the "college" class */
    $("#schoolName").html("Sheridan");
    $("#schoolName").addClass("college");

    /*Include your main campus in <body> section where indicated and change text color to blue */
    $("#myCampus").html("Oakville/Trafalgar");
    $("#myCampus").css("color", "blue");

    /*Change all sections that use the "rhyme" class to italic when DOM loads */
    $("section[class='rhyme']").css("font-style","italic");

    /* Change the text color to purple for any section that includes an image */
    $("section:has(img)").css("color","purple");

    /* Add code that displays an alert box that includes "Accessible"when an img with an alt attribute is clicked */
    $("img[alt]").click(imgClick);

    /*code the hide button that will hide any section that contains “ow” */
    $("#hideCmd").click(hideowsection);

   /* code the video button to change the border around any video whose source is a .mp4 file to thick solid red */
    $("#videoCmd").click(bordervideo);
});


function imgClick(){
    alert('Accessible new');
}

function hideowsection(){
    $("section:contains('ow')").hide();
}

function bordervideo(){
    $("video[src $='.mp4']").css("border","thick solid red");

}