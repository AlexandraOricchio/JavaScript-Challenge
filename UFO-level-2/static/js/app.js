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


function handleChange() {
    var newData = tableData;

    var elements = d3.selectAll(".filter");
    // console.log(elements);

    inputDict = {};

    elements.each(function() {
        
        var filter = d3.select(this).select("input")
        var input= filter.property("value");
        var id = filter.property("id");
        // console.log(id);
        // console.log(input);

        if (input !== "") {
            console.log(`a filter was input for id: ${id}, with value: ${input}`);
            inputDict[id] = input;
            console.log(inputDict);
            Object.entries(inputDict).forEach(([key, value]) => {
                console.log(key);
                newData = newData.filter(sighting => sighting[key] === value);
            });
            console.log(newData);
        };

    // console.log(inputDict);

    // Object.entries(inputDict).forEach(([key, value]) => {
    //     console.log(key);
    //     newData = newData.filter(sighting => sighting[key] == value);
    //     console.log(newData);
    // });

    // console.log(newData);
    
        // newData = newData.filter(sighting => sighting[id] == filter);
        
        // console.log(newData);

    });

    // for each input if value exists then newData = newData.filter

    // // ** ORIGINAL CODE **
    // // get input of filter element 
    // var elementChg = d3.select(this).select("input")
    // // get the value of that input element selected
    // var elementVal = elementChg.property("value");
    // console.log(elementVal);
    // // get id for selected list item
    // var elementID = elementChg.property("id");
    // console.log(elementID);

    // // filter table
    // var filterData = tableData.filter(sighting => sighting[elementID] == elementVal);
    // console.log(filterData);
    
    // // clear data in table and fill table with filtered data
    // var tbody = d3.select("tbody");
    // tbody.html("");
    
    // // loop through filtered data and add to table
    // filterData.forEach(sighting => {
    //     var row = tbody.append("tr");
    //     Object.entries(sighting).forEach(([key, value]) => {
    //         var cell = row.append("td");
    //         cell.text(value);
    //     });
    // });
};

// create event listener for change
d3.selectAll(".filter").on("change", handleChange);