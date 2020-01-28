// from data.js
var tableData = data;

// get reference to the table and table body
var table = d3.select("#ufo-table");
var tbody = d3.select("tbody");

// loop through the data
tableData.forEach(sighting => {
    // append a table row ('tr') for each sighting report
    var row = tbody.append("tr");
    // itterate over each sighting report & log sighting key & value
    Object.entries(sighting).forEach(([key, value]) => {
        console.log(key, value);
        // append 1 cell ('td') per sighting report value (7)
        var cell = row.append("td");
        // update cells with sighting report values
        cell.text(value);
    });
});

// get reference to button
var button = d3.select("#filter-btn");
// create event listener
button.on("click", function() {

    // select input element
    var inputElement = d3.select("#datetime");
    // get value property of input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    console.log(tableData);

    // filter data based on input value
    var filterData = tableData.filter(sighting => sighting.datetime === inputValue);
    console.log(filterData);

    // clear data in table and fill table with filtered data only
    tbody.html("");

    // loop through filtered data and add to table
    filterData.forEach(sighting => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
});

