
function initpage(){
    document.getElementById("page2").style.visibility="hidden";
}

//Sets the item by assingning the first element of the html name to the raova object of type localstorage
function SaveAndDisplay() {
    localStorage.setItem("ls_cName", document.getElementsByName("cName")[0].value);
    localStorage.setItem("ls_cEmail", document.getElementsByName("cEmail")[0].value);
    localStorage.setItem("ls_rName", document.getElementsByName("rName")[0].value);
    localStorage.setItem("ls_width", document.getElementsByName("width")[0].value);
    localStorage.setItem("ls_length", document.getElementsByName("length")[0].value);
    localStorage.setItem("ls_color", document.getElementsByName("color")[0].value);
    localStorage.setItem("ls_paintType", document.getElementById("paintType").value);


    //Populate page 2 elements
    document.getElementById("p2_cInfo").innerHTML = ` Customer Name: ${localStorage.getItem("ls_cName")} Email: ${localStorage.getItem("ls_cEmail")}`;
    document.getElementById("p2_rName").innerHTML = ` Room To Be Painted: ${localStorage.getItem("ls_rName")}`;
    let w = localStorage.getItem("ls_width");
    let l = localStorage.getItem("ls_length");
    document.getElementById("p2_sqFt").innerHTML = ` Square Foot Area: ${w*l}  `;
    document.getElementById("p2_color").innerHTML = `Selected Color: <button style='background-color:${localStorage.getItem("ls_color")}'>&nbsp;&nbsp;&nbsp;</button>`;

    var numCans = (w*l)/400;
    document.getElementById("p2_numCans").innerHTML = ` Number of Cans Needed: ${Math.ceil(numCans)}`;

    let paintType= localStorage.getItem("ls_paintType");
    var price=0.0;
    if(paintType=="standard"){
        price=(24.99*Math.ceil(numCans))*1.13;  
    }
    else{
        price=(39.99*Math.ceil(numCans))*1.13; 
    }
    document.getElementById("p2_price").innerHTML = ` Price: ${price.toFixed(2)}`;
    
    document.getElementById("page1").style.visibility="hidden";
    document.getElementById("page2").style.visibility="visible";
    
}



  