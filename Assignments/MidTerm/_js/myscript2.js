
$(document).ready(function(){

    /*Enter your name in the HTML area where indicated. Enter your student number in the HTML area where indicated */
    $("h1").append("Varun Rao");
    $("h2").append("991498928");

    /*Script the submit button (see HTML for exact button id) 
    to save the data from the 2 input fields in the content section of the HTML and save to local storage using the keys listed above
    */
   
    $("#submitRev").click(StoreToLocal);
    
    /* Script the retrieve button (see HTML for exact button id) to retrieve the data in local
    storage saved by the submit button and place into the output fields in the footer section of the HTML using template literals to build output
    */
$("#getRev").click(GetFromLocal);


});


function StoreToLocal(){

    alert('storing to local');
    localStorage.setItem("review_ComputerName",
    $("input[name = 'cname']").val());

    localStorage.setItem("review_ComputerCost",
    $("input[name = 'ccost']").val());
}

function GetFromLocal(){
    let cname = localStorage.getItem("review_ComputerName");
    let ccost = localStorage.getItem("review_ComputerCost");
    $("#makeOutput").html(`The computer make is /${cname}/`);
    $("#cost").val(`The computer cost is /${ccost}/ dollars`);

}