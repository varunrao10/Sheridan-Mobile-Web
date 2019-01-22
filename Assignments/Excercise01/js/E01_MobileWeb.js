function SaveToStorage() {

    localStorage.setItem("raovaFirstname", document.getElementsByName("firstname")[0].value);
    localStorage.setItem("raovaLastname", document.getElementsByName("lastname")[0].value);
    localStorage.setItem("raovaStudentID", document.getElementsByName("studentID")[0].value);
    
    if (document.getElementById("location").checked) {
        localStorage.setItem("raovaLocation", "International");
    }
    else {
        localStorage.setItem("raovaLocation", "Domestic");
    }
}

function HandleLocationChange(cBox){
    if (cBox.checked) {
        document.getElementById("studentlocation").innerHTML = "International"
    }
    else {
        document.getElementById("studentlocation").innerHTML = "Domestic"
    }
}


function RetrieveFromStorage() {
    alert("The retrieve button was selected")
    document.getElementById("studentName").innerHTML = ` Student Name: ${localStorage.getItem("raovaLastname")} ${localStorage.getItem("raovaFirstname")}`;
    document.getElementById("sID").innerHTML = ` Student Number: ${localStorage.getItem("raovaStudentID")}`;
    document.getElementById("cDesignation").innerHTML = `${localStorage.getItem("raovaLocation")} Student`;
}

function ClearCountryFromStorage() {
    alert("The Clear Country button was selected")
    localStorage.removeItem("raovaLocation");
}