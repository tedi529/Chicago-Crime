// Use d3.csv to import data
// d3.csv("././Resources/arrestpt.csv", function(data){
//    console.log(data)

// Create dropdown menu
var yearDD = d3.select("#selDataset");



// Create function for Bar Graph
function updateBar(selYear) {
console.log(selYear)
    // Use d3.csv to import data
    d3.csv("././Resources/arrestpt.csv").then(function(data){
    // console.log(data)

        x = [];
        y = [];

        var yearData = data.filter(function(row) {
            return row.year == selYear;
          });
          console.log(yearData)

        for(var i = 0; i < 10; i++) {
            var obj = yearData[i];
    
            x.push(obj.percentage);
            y.push(obj.primary_type);
        };
        
     barData = [{
        x:x,
        y:y,
        type: "bar",
        orientation: "h",
        mode: 'markers', marker: {color:['#4B308B', '#685ACD', '#0008B', '#4169E1', '#6495ED', '#FF6347', '#FF7F50', 
        '#FD8080', '#E9967A', '	#FA8072']}}],

    barLayout = {
        xaxis: {title: "Percentage of Arrests"},
        title: 'Top 10 Primary Types of Crime with the Highest Percentage of Arrests',
        font:{size: 10,
          family: 'Raleway, sans-serif'
        },
        showlegend: false,
        xaxis: {title: "Percentage of Arrests",
          tickangle: -45
        },
        yaxis: {
          zeroline: false,
          gridwidth: 0,
                  },
        bargap :0.05
      };

    Plotly.newPlot("bar", barData, barLayout, responsive = true);

    }).catch(err => {
        console.log("Error" + err);
    });
};

function updatepie(selYear) {
// Source reference:  https://plotly.com/javascript/pie-charts/

    // Use d3.csv to import data
    d3.csv("./Resources/arrestct.csv").then(function(data){
    console.log(data)

    var value = [];
    var label = [];

    var yearData = data.filter(function(row) {
        return row.year == selYear;
      });

    for(var i = 0; i < yearData.length; i++) {
        var obj = yearData[i];

        value.push(obj.count);
        label.push(obj.arrest);
    
    };

    var pieData = [{
        type: "pie",
        values: value,
        labels: ["No Arrest", "Arrest"],
        textinfo: "label+percent",
        insidetextorientation: "radial",
        automargin: true
    }];

    var pieLayout = {
        height: 400,
        width:  400,
        // margin: {"t": 0, "b": 0, "l": 0, "r":0},
        showlegend: false,
        title: "Percentage of Arrests v. No Arrests"
    };

    Plotly.newPlot("pie", pieData, pieLayout);
    }).catch(err => {
    console.log("Error" + err);
    });

};

// Create function for Bar Graph
function updateBar2(selYear) {
    console.log(selYear)
        // Use d3.csv to import data
        d3.csv("./Resources/toptenpt.csv").then(function(data){
        // console.log(data)
    
            x = [];
            y = [];
    
            var yearData = data.filter(function(row) {
                return row.year == selYear;
              });
              console.log(yearData)
    
            for(var i = 0; i < yearData.length; i++) {
                var obj = yearData[i];
        
                x.push(obj.percentage);
                y.push(obj.primary_type);
            };
            
         bar2Data = [{
            x:x,
            y:y,
            type: "bar",
            orientation: "h",
            mode: 'markers', marker: {color:['#4B308B', '#685ACD', '#0008B', '#4169E1', '#6495ED', '#FF6347', '#FF7F50', 
            '#FD8080', '#E9967A', '	#FA8072']}}],
    
        bar2Layout = {
            xaxis: {title: "Percentage of Arrests"},
            title: 'Top 10 Overall Primary Types of Crime and the Percentage of Arrests',
            font:{size: 10,
              family: 'Raleway, sans-serif'
            },
            showlegend: false,
            xaxis: {title: "Percentage of Arrests",
              tickangle: -45
            },
            yaxis: {
              zeroline: false,
              gridwidth: 0,
                      },
            bargap :0.05
          };
    
        Plotly.newPlot("bar2", bar2Data, bar2Layout, responsive = true);
    
        }).catch(err => {
            console.log("Error" + err);
        });
    };
    

// Update the visualization based on the year selected
function updatePage(){
    var yearDD = d3.select("#selDataset");
    var selYear = yearDD.property("value");
    console.log(selYear);

    updateBar(selYear);
    updatepie(selYear);
    updateBar2(selYear);
};


d3.selectAll("#selDataset").on("change", updatePage);

updatePage();

