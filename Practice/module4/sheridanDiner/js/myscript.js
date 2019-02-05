// Sheridan Menu - myscript.js 

alignArray = new Array();
alignArray[0] = "left";
alignArray[1] = "center";
alignArray[2] = "right";

var	initialView = true;
var xmlHold;

$(document).ready(function(){

	// Initial load to build menu and arrays

	
	// Buttons 					
	$("#bmenu").click(function() {
		// Refresh of menu items

	});	

	$("#lmenu").click(function() {
		// Refresh of menu items

	});		
	
	$("#dmenu").click(function() {
		// Refresh of menu items

	});	

	
	$("#citeT").hide();	
	$("#citeH").click(function() {$("#citeT").toggle();});
});

function buildMenu(data) {

} // end of buildMenu


function food(data, menu, align) {

} // end of food
	

function checkInitial(initialView) {
	if (initialView) {
	
		var today = new Date().getHours();
		// .getSeconds(); .getMinutes(); .getDate(); .getDay(); .getMonth(); .getFullYear(); .getTime();
		
		if (parseInt(today) >= 17) {  // dinner - 5:00 +
			food(jsonHold, 2, alignArray[2]);	
		}
		else if (today >= 11) {  // lunch
			food(jsonHold, 1, alignArray[1]);	
		}
		else {  // breakfast
			food(jsonHold, 0, alignArray[0]);	
		}
		initialView = false;
	}
} // end of checkInitial

