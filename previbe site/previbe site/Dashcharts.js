




let myChart = document.getElementById('attorney-actions-chart').getContext('2d');

        //Golbal Options
        Chart.defaults.font.family = 'Lato';
        Chart.defaults.font.size = '18';
        Chart.defaults.color = '#777';
        
        const data = // I don't know what determines whether things should be in data or config, google it I guess??
        {
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
                    backgroundColor:[
                     'rgba(255, 99, 132, 0.6)',
                     'rgba(54, 162, 235, 0.6)',
                     'rgba(255, 206, 86, 0.6)',
                     'red',
                     'rgba(153, 102, 255, 0.6)',
                     'rgba(255, 159, 64, 0.6)' ,

                ],
                borderWidth: 1,
                borderColor: '#777',
                hoverBorderWidth:3,
                hoverBorderColor:'#000'
            }]
        };
        
        const config = //Config stores most settings which transform the graph in some way, although some must be in data
        {
            type: 'doughnut', //bar, pie, line, doughnut, radar, polarArea, bubble radar, scatter, area
            data: data, //put the data in config
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
        const massPopChart = new Chart(myChart, config) //function to generate the chart using data and config


        //Next Chart
