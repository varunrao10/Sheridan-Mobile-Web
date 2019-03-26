
$(document).ready(function(){

    $.ajax( {
        type:"GET",
        url: "_js/cars.json",
        dataType:"json",
        success: ParseCarJson,
        error: ParseCarJsonError
    })


});

function ParseCarJson(data){
    $("#title").html(data.information);
    let usedcars = data.cars.Used; 
    
    for(i=0;i<usedcars.length;i++){
        if(usedcars[i].engine == "diesel" && usedcars[i].tag == true){
            $("#jsonbody").append( `<tr><td>${usedcars[i].make}</td><td>${usedcars[i].type}</td><td>${usedcars[i].cost}</td></tr> `);
            //alert("inside for loop");
        }

    }
}

function ParseCarJsonError(){

    $("#title").html("Error Parsing JSON");
}