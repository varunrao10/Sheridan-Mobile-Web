
var empArrayList = new Array();
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
	$.getJSON("../employees.json", function (data) {
        console.log(data)
        
        /*
        empList = data.company.employee;
        
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
        
        //Now Populate the HTML values

        */
	});
});