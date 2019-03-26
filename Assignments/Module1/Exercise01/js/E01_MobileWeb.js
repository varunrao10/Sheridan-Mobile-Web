
//Sets the item by assingning the first element of the html name to the raova object of type localstorage
function SaveToStorage() {
    //localStorage.setItem("raovaFirstname", document.getElementById("fname").value);
    localStorage.setItem("raovaFirstname", document.getElementsByName("firstname")[0].value);
    localStorage.setItem("raovaLastname", document.getElementsByName("lastname")[0].value);
    localStorage.setItem("raovaStudentID", document.getElementsByName("studentID")[0].value);
    
    //If box is checked, international will be set for the html id location, otherwise it is set as domestic
    if (document.getElementById("location").checked) {
        localStorage.setItem("raovaLocation", "International");
    }
    else {
        localStorage.setItem("raovaLocation", "Domestic");
    }
}

//Passes the checkbox itself as a parameter and does a handle on whether the box is checked or not so the text under the box changes
function HandleLocationChange(cBox){
    if (cBox.checked) {
        document.getElementById("studentlocation").innerHTML = "International"
    }
    else {
        document.getElementById("studentlocation").innerHTML = "Domestic"
    }
}

//alerts the user of retreival and retrieves the items which is then outputted in their corresponding ids in the html.
function RetrieveFromStorage() {
    alert("The retrieve button was selected")
    document.getElementById("studentName").innerHTML = ` Student Name: ${localStorage.getItem("raovaLastname")} ${localStorage.getItem("raovaFirstname")}`;
    document.getElementById("sID").innerHTML = ` Student Number: ${localStorage.getItem("raovaStudentID")}`;
    document.getElementById("cDesignation").innerHTML = `${localStorage.getItem("raovaLocation")} Student`;
}

//Clears the cDesignation item from local storage via remove item
function ClearCountryFromStorage() {
    alert("The Clear Country button was selected")
    localStorage.removeItem("raovaLocation");
}