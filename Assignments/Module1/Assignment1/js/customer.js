
//Hides page 2 before the quote has been submitted
function initpage(){
    document.getElementById("page2").style.display="none";
}

//Sets the items found in page 1 customer info and puts it into local storage
function SaveAndDisplay() {
    localStorage.setItem("ls_cName", document.getElementsByName("cName")[0].value);
    localStorage.setItem("ls_cEmail", document.getElementsByName("cEmail")[0].value);
    localStorage.setItem("ls_rName", document.getElementsByName("rName")[0].value);
    localStorage.setItem("ls_width", document.getElementsByName("width")[0].value);
    localStorage.setItem("ls_length", document.getElementsByName("length")[0].value);
    localStorage.setItem("ls_color", document.getElementsByName("color")[0].value);
    localStorage.setItem("ls_paintType", document.getElementById("paintType").value);


    //Populate page 2 elements by retreving the items from the local storage
    document.getElementById("p2_cInfo").innerHTML = ` Customer Name: ${localStorage.getItem("ls_cName")} Email: ${localStorage.getItem("ls_cEmail")}`;
    document.getElementById("p2_rName").innerHTML = ` Room To Be Painted: ${localStorage.getItem("ls_rName")}`;
    let w = localStorage.getItem("ls_width");
    let l = localStorage.getItem("ls_length");
    document.getElementById("p2_sqFt").innerHTML = ` Square Foot Area: ${w*l}  `;
    document.getElementById("p2_color").innerHTML = `Selected Color: <button style='background-color:${localStorage.getItem("ls_color")}'>&nbsp;&nbsp;&nbsp;</button>`;

    //Number of Cans Calculation
    var numCans = (w*l)/400;
    document.getElementById("p2_numCans").innerHTML = ` Number of Cans Needed: ${Math.ceil(numCans)}`;

    //Paint type calculation
    let paintType= localStorage.getItem("ls_paintType");
    var price=0.0;
    if(paintType=="standard"){
        price=(24.99*Math.ceil(numCans))*1.13;  
    }
    else{
        price=(39.99*Math.ceil(numCans))*1.13; 
    }
    document.getElementById("p2_price").innerHTML = ` Price: ${price.toFixed(2)}`;
    
    //THis is used to display page 2 and hide page 1 after page 2 is populated
    document.getElementById("page1").style.display="none";
    document.getElementById("page2").style.display="block";
    
}



  