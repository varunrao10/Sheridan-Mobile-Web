var cityArray = new Array();
var latArray = new Array();
var lngArray = new Array();
var rowID;

$(document).ready(function(){
    $.getJSON("dataFiles/cities.json",function(data){
        $("#cityList".html(""));
        for(x=0; x<data.cities.length;x++){
            cityArray[x]=data.cities[x].cityName;
            latArray[x] = data.cities[x].cityLat;
            lngArray[x]=data.cities[x].cityLng

            $("#cityList").append(
                <li li-id ='$[x]'>
                <a href='weather.html'>$(data.cities[x].cityName)</a>
                </li>
            );
        } //end of for loop
    }); //end of .getJson
});     //end of doc ready
// Load data from JSON and save to Local Storage
localStorage.setItem("cityArray", JSON.stringify(cityArray));
localStorage.setItem("latArray", JSON.stringify(latArray));
localStorage.setItem("lngArray", JSON.stringify(lngArray));
// Find the row selected and save to Local Storage
$(document).on("click, '#citylist >li", function(){
    rowID =$(this).closest("li").attr("li-id");
    localStorage.setItem("rowID", rowID);
});

