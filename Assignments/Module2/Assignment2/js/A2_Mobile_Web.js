
var planetArrayList = new Array();

//Planets Class
class Planet {

	constructor(idx, nm, clr, rad, dist, img) {

		this.idx = idx;
		this.name = nm;
		this.color = clr;
		this.radius = rad;
		this.dist_fromSun = dist.fromSun;
		this.dist_fromEarth = dist.fromEarth;
		this.image = img;
	}

}
//Ajax lets us access the JSON contents
$(document).ready(function () {
	$.ajax({
		type: "GET",
		url: "planets.json",
		dataType: "json",
		success: ReadPlanets,
		error: ReadError
	})

});


function ReadPlanets(data) {

	planetList = data.solarSystem.planets;

	//Populate the array of planets
	for (let x = 0; x < planetList.length; x++) {
		
		planet = new Planet(
			x,
			planetList[x].planetName,
			planetList[x].planetColor,
			planetList[x].planetRadiusKM,
			planetList[x].distInMillionsKM,
			planetList[x].image
		);

		//Push the object planet
		planetArrayList.push(planet);

	}

	//Append Contents
	$(".column1").append("<H2>Planets in The Solar System</H2><BR/>");
	for (let p of planetArrayList) {

		$(".column1").append(`<h3> PLANET: ${p.name}</h3>`);
		$(".column1").append(`<img src = "images/${p.image}" id = "${p.idx}"/> `);

		$("img:nth(" + p.idx + ")").click(function () {
			DisplayPlanet(p.idx);
		})

		$("img:nth(" + p.idx + ")").mouseover(function () {
			$("img:nth(" + p.idx + ")").css({ "background-color": "red" });
		})

		$("img:nth(" + p.idx + ")").mouseout(function () {
			$("img:nth(" + p.idx + ")").css({ "background-color": "transparent" });
		})
	}
}

function ReadError() {
	alert("Error when reading JSON");

}

function DisplayPlanet(i) {
	let p = planetArrayList[i];

	//Save Object properties to Local Storage
	localStorage.setItem("idx", p.idx);
	localStorage.setItem("name", p.name);
	localStorage.setItem("color", p.color);
	localStorage.setItem("radius", p.radius);
	localStorage.setItem("dist_fromSun", p.dist_fromSun);
	localStorage.setItem("dist_fromEarth", p.dist_fromEarth);
	localStorage.setItem("image", p.image);

	//Append Object properties in column2
	$(".column2").append(`<h3> Planet Name: ${localStorage.getItem("name")}</h3>`);
	$(".column2").append(`<h3> Planet color: ${localStorage.getItem("color")}</h3>`);
	$(".column2").append(`<h3> Planet radius: ${localStorage.getItem("radius")}</h3>`);
	$(".column2").append(`<h3> Planet distance from Sun in Millions of KM: ${localStorage.getItem("dist_fromSun")}</h3>`);
	$(".column2").append(`<h3> Planet distance from Earth Millions of KM: ${localStorage.getItem("dist_fromEarth")}</h3>`);
	$(".column2").css({
		"background-image": `url("images/${localStorage.getItem("image")}")`,
		"background-repeat": "no-repeat",
		"background-size": "100% 100%",
		"display": "block"
	});

	//makes column1 not appear
	$(".column1").css({ "display": "none" });
}