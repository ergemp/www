window.onload = function() {
    var viewModel = {
        chartOptions: {
            type: "doughnut",
            dataSource: dataSource,
            palette: "Soft Pastel",
            title: "Olympic Medals in 2008",
            legend: {
                horizontalAlignment: "right",
                verticalAlignment: "top",
                margin: 0
            },
            onPointClick: function(arg) {
                arg.target.select();
            },
            "export": {
                enabled: true
            },
            series: [{
                argumentField: "country",
                valueField: "medals",
                hoverStyle: {
                    color: "#ffd700" 
                }
            }]
        }
    };
    
    ko.applyBindings(viewModel, document.getElementById("chart-demo"));
};