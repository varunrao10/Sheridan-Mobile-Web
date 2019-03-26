
var companyname = "";
var companyslogan = "";
var empArrayList = new Array();

//Employee Class
class Employee {
	constructor(name, id, contact) {
		this.name = name;
		this.status = id.status;
		this.number = id.number;
		this.phone = contact.phone;
		this.email = contact.email;
	}
}

$(document).ready(function () {
	console.log("in doc ready");
	$.getJSON("employees.json", function (data1) {
		console.log(data1)

		empList = data1.company.employee;
		companyname = data1.company.name;
		companyslogan = data1.company.slogan;
		
		//Populate the array of employees
		for (let x = 0; x < empList.length; x++) {
			emp = new Employee(
				empList[x].name,
				empList[x].id,
				empList[x].contact,
			);
			empArrayList.push(emp);
			console.log(empArrayList);
		}
		console.log(companyslogan);
		console.log(companyname);

		//Now Populate the HTML values
		$("header").append("<br>");
		$("header").append(companyname);
		$("header").append("<br>");
		$("header").append(companyslogan);
		$("header").append("<br>");

		//Appended all full time employees in column 1 using an if statement from the employee array list
		$(".column1").append("<H2>List of Full Time Employees</H2><BR/>");
		for (let e of empArrayList) {

			if (e.status == "Full Time") {
				console.log(e.name);
				$(".column1").append(`<h3> EMPLOYEE: ${e.name}</h3>`);
				$(".column1").append(`Number : ${e.number}`);
				$(".column1").append("<br/>");
				$(".column1").append(`Phone # : ${e.phone} `);
				$(".column1").append("<br/>");
				$(".column1").append(`Email: ${e.email} `);
				$(".column1").append("</p>");
			}
		}
		
		//Appended all part time employees in column 2 using an if statement from the employee array list
		$(".column2").append("<H2>List of Part Time Employees</H2><BR/>");
		for (let e of empArrayList) {
			if (e.status == "Part Time") {
				$(".column2").append(`<h3> EMPLOYEE: ${e.name}</h3>`);
				$(".column2").append(`Number : ${e.number}`);
				$(".column2").append("<br/>");
				$(".column2").append(`Phone # : ${e.phone} `);
				$(".column2").append("<br/>");
				$(".column2").append(`Email: ${e.email} `);
				$(".column2").append("</p>");
			}
		}
	});
});