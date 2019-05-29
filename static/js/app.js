// from data.js
var tableData = data;
var filteredData = tableData;
var tbody = d3.select("tbody");
var $tbody = document.querySelector("tbody");

function newtable() {
	$tbody.innerHTML = "";
	filteredData.forEach((alienInvasion) => {
		var row = tbody.append("tr");
		Object.entries(alienInvasion).forEach(([key, value]) => {
			var cell = row.append("td");
			cell.text(value);
  		});
	});
};



var submit = d3.select("#search");

submit.on("click", function() {

  // Prevent the page from refreshing
	d3.event.preventDefault();

  // Select the input element and get the raw HTML node
	var inputDate = d3.select("#dateTime");
	var inputCity = d3.select("#city");
	var inputState = d3.select("#state");
	var inputCountry = d3.select("#country");
	var inputShape = d3.select("#shape");
  // Get the value property of the input element
	var filterDate = inputDate.property("value").trim();
	var filterCity = inputCity.property("value").trim().toLowerCase();
	var filterState = inputState.property("value").trim().toLowerCase();
	var filterCountry = inputCountry.property("value").trim().toLowerCase();
	var filterShape = inputShape.property("value").trim().toLowerCase();


	if (filterDate != "") {
		filteredData = filteredData.filter(date => filterDate === date.datetime);
	};

	if (filterCity != "") {
		filteredData = filteredData.filter(city => filterCity === city.city);
	};

	if (filterState != "") {
		filteredData = filteredData.filter(state => filterState === state.state);
	};

	if (filterCountry != "") {
		filteredData = filteredData.filter(country => filterCountry === country.country);
	};

	if (filterShape != "") {
		filteredData = filteredData.filter(shape => filterShape === shape.shape);
	};

	console.log(filteredData);

	newtable();

	filterDate = "";
	filterCity = "";
	filterState = "";
	filterCountry = "";
	filterShape = "";
}); 



newtable();