let chart1 = document.getElementById('arrests-and-prosecutions-chart').getContext('2d');
let chart2 = document.getElementById('attorney-actions-chart').getContext('2d');
//let chart3 = document.getElementById('victim-services-chart').getContext('2d');
//let chart4 = document.getElementById('special-crimes-chart').getContext('2d');
//let chart5 = document.getElementById('narcotics-chart').getContext('2d');



    //Golbal Options
    Chart.defaults.font.family = 'Lato';
    Chart.defaults.font.size = '18';
    Chart.defaults.color = '#777';
    Chart.defaults.borderWidth = 0;
    Chart.defaults.backgroundColor=[
                 'rgba(255, 99, 132, 0.6)',
                 'rgba(54, 162, 235, 0.6)',
                 'rgba(255, 206, 86, 0.6)',
                 'red',
                 'rgba(153, 102, 255, 0.6)',
                 'rgba(255, 159, 64, 0.6)' ,
            ];
    
    const chart1data = {
        labels:['Boston,', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
        datasets:
        [{
            label: 'Population',
            //inputs for the data of the charts
                data:[ 
                 617594,
                 181045,
                 153060,
                 106519,
                 105162,
                 95072
                ],
                //backgroundColor: 'green' // you can use a term like 'green' to color every bar the same color or you can use an array to change individual parts. Can also use rgba() values.
                // backgroundColor:[],
                // borderWidth: 1,
                borderColor: '#777',
                hoverBorderWidth:3,
                hoverBorderColor:'#000'
        }]
    };
    
    const chart1config = //Config stores most settings which transform the graph in some way, although some must be in data
    {
        type: 'doughnut', //CHANGE THIS LINE TO CHANGE GRAPH TYPE ACCEPTABLE TYPES: BAR, PIE, LINE, DOUGHNUT, RADAR, POLARAREA, BUBBLE, SCATTER, AREA 
        data: chart1data, //put the data in config
        options:{
            indexAxis: 'y', //horizontalBar (when Y)
            title:{
                display:true,
                text:'Arrests and prosecutions',
                fontSize:25
            },
            legend:{},
            layout:{},
            plugins:{}
        }
    }
    const makechart1 = new Chart(chart1, chart1config) //function to generate the chart using data and config






    // //Next Chart
    
    // Chart.defaults.elements.bar.backgroundColor = [
    //              'rgba(255, 99, 132, 0.6)',
    //              'rgba(54, 162, 235, 0.6)',
    //              'rgba(255, 206, 86, 0.6)',
    //              'red',
    //              'rgba(153, 102, 255, 0.6)',
    //              'rgba(255, 159, 64, 0.6)' ,
    //         ];
    
    const chart2data = {
        labels:['Boston,', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
        datasets:
        [{
            label: 'Population',
            //inputs for the data of the charts
                data:[ 
                 70000,
                 38002,
                 55273,
                 73512,
                 78463,
                 95072
                ],
                //backgroundColor: 'green' // you can use a term like 'green' to color every bar the same color or you can use an array to change individual parts. Can also use rgba() values.
            //     backgroundColor:[
            //      'rgba(255, 99, 132, 0.6)',
            //      'rgba(54, 162, 235, 0.6)',
            //      'rgba(255, 206, 86, 0.6)',
            //      'red',
            //      'rgba(153, 102, 255, 0.6)',
            //      'rgba(255, 159, 64, 0.6)' ,
            // ],
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
        }]
    };
    
    const chart2config = //Config stores most settings which transform the graph in some way, although some must be in data
    {
        type: 'bar', //bar, pie, line, doughnut, radar, polarArea, bubble radar, scatter, area
        data: chart2data, //put the data in config
        options:{
            indexAxis: 'y', //horizontalBar (when Y) Vertical when x.
            title:{
                display:true,
                text:'Arrests and prosecutions',
                fontSize:25
            },
            legend:{},
            layout:{},
            plugins:{}
        }
    }
    const makechart2 = new Chart(chart2, chart2config) //function to generate the chart using data and config
