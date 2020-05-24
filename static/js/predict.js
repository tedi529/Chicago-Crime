// Import csv data from data file
d3.csv("Resources/type_dict.csv").then(function(bSamples) { 

    // Create dropdown menu function for types
    function loadDropdown1(){
        let dropdownMenu = $("#types");
        dropdownMenu.empty();

        dropdownMenu.prop('selectedIndex', 0);

        // Populate dropdown with test subject IDs
        $.each(bSamples.names, function (index, entry) {
            dropdownMenu.append($('<option></option>').attr('value', entry).text(entry));
        });
    };

    loadDropdown(1);
});    

d3.csv("Resources/loct_dict.csv").then(function(bSamples) { 

    // Create dropdown menu function for locations
    function loadDropdown2(){
        let dropdownMenu = $("#locations");
        dropdownMenu.empty();

        dropdownMenu.prop('selectedIndex', 0);

        // Populate dropdown with test subject IDs
        $.each(bSamples.names, function (index, entry) {
            dropdownMenu.append($('<option></option>').attr('value', entry).text(entry));
        });
    };

    loadDropdown(2);
});