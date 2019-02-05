
var sArray = new Array();
var fArray = new Array();
var newRec;

class Student {
	constructor(name, number, program, coop, list) {
		this.name = name; this.number = number;
		this.program = program;
		this.coop = coop; this.list = list;
	}
} // end of class Student

class Faculty {
	constructor(name, number, school, fullTime, list) {
		this.name = name; this.number = number;
		this.school = school;
		this.fullTime = fullTime; this.list = list;
	}
} // end of class Faculty

// document.ready
$(document).ready(function () {
	console.log("in doc ready")
	$.getJSON("dataFiles/SchoolData.JSON", function (data) {
		console.log(data)
		start = data.students.studentRec;
		for (let x = 0; x < start.length; x++) {
			newRec = new Student(
				start[x].name,
				start[x]["student-number"],
				start[x].program,
				start[x].coop,
				start[x].email,
			);
			sArray.push(newRec);
			console.log(sArray);
		}
	});
});

// end of document.ready



function loadStudentData() {
	$("h4").html("Student Data");
	$(".labels").html("<th>NAME</th><th>ID</th><th>PROGRAM</th><th>COOP?</th><th>EMAIL</th>");
	$("#sdata").html("");

	// load table detail

}

function loadFacultyData() {
	$("h4").html("Faculty Data");
	$(".labels").html("<th>NAME</th><th>ID</th><th>SCHOOL</th><th>FULL TIME?</th><th>EMAIL</th>");
	$("#sdata").html("");

	// load table detail

}

/* AJAX call that can be used instead of .getJSON()
    $.ajax({
        type: "POST",
        url: "ex02-JSON.json",
        dataType: "json",
        success: loadJSON,
				error: function (request,error) {
            alert('Network error has occurred: ' + error);}
    });

*/