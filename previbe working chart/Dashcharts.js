//Golbal defaults
Chart.defaults.font.family = 'Lato';
Chart.defaults.font.size = '18';
Chart.defaults.color = '#777'; //default chart color if one isn't assigned
Chart.defaults.borderWidth = 0;

// Default dataset style values
const defaultDatasetStyles = {
    borderColor: '#777',
    hoverBorderWidth: 2,
    hoverBorderColor: '#000',
    backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'red',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
    ],
    
};


//reusable function for chart creation
function makeChart({elementId, type, title, labels, data, datasetStyles = {} }){
    const getId = document.getElementById(elementId).getContext('2d');
    new Chart(getId, {
        type: type,
        data: {
            labels: labels, 
            datasets: [{
                //label: 'Something',
                data: data,
                ...defaultDatasetStyles,
                ...datasetStyles,
            }],
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: title,
                    font: {
                        size: 25,
                    },
                },
                legend: {
                    display: true,
                    
                    position: 'right', // or 'bottom', 'left', 'right'
                    labels:{
                    },
                },
            },
            layout: {
                padding: 20,
            },
            indexAxis: 'x', // horizontal vs vertical bars
        },
    });

}

const chartConfigs = [
    {
        elementId: 'arrests-and-prosecutions-chart',
        type: 'bar',
        title: ' Arrests and prosecutions',
        labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
        data: [617594, 181045, 153060, 106519, 105162, 95072], 
        datasetStyles: {label: ['Boston', 'Lowell'],}, //optional style override, leave empty or delete for defaults.
    },
    {
        elementId: 'attorney-actions-chart',
        type: 'bar',
        title: 'Attorney Actions',
        labels: ['Boston2', 'Worcester2', 'Springfield2', 'Lowell2', 'Cambridge2', 'New Bedford2'],
        data: [70000, 38002, 55273, 73512, 78463, 95072],
        datasetStyles: {}, //optional style override, leave empty or delete for defaults.
    },
    {
        elementId: 'victim-services-chart',
        type: 'bar',
        title: 'Victim Services',
        labels: ['Boston3', 'Worcester3', 'Springfield3', 'Lowell3', 'Cambridge3', 'New Bedford3'],
        data: [70000, 38002, 55273, 73512, 78463, 95072],
        datasetStyles: {}, //optional style override, leave empty or delete for defaults.
    },
    {
        elementId: 'special-crimes-unit-chart',
        type: 'bar',
        title: 'Special crimes unit',
        labels: ['Boston4', 'Worcester4', 'Springfield4', 'Lowell4', 'Cambridge4', 'New Bedford4'],
        data: [70000, 38002, 55273, 73512, 78463, 95072],
        datasetStyles: {}, //optional style override, leave empty or delete for defaults.
    },
    {
        elementId: 'narcotics-chart',
        type: 'bar',
        title: 'Narcotics',
        labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
        data: [70000, 38002, 55273, 73512, 78463, 95072],
        datasetStyles: {}, //optional style override, leave empty or delete for defaults.
    },

    // Add more charts here by adding new objects to the array. You can just copy/paste the previous examples
];

// Loop over the configs and create each chart
for (let i = 0; i < chartConfigs.length; i++) {
    if (i==2 || i==3){ //make the 3rd and 4th charts using the regular makeChart()
         makeChart(chartConfigs[i]);
    }
}



function makeStackedChart({elementId, type = 'bar', title, labels, datasets}) {
    const ctx = document.getElementById(elementId).getContext('2d');
    new Chart(ctx, {
        type: type,
        data: {
            labels: labels,
            datasets: datasets.map((dataset, index) => ({
                ...defaultDatasetStyles,
                ...dataset,
                backgroundColor: dataset.backgroundColor || defaultDatasetStyles.backgroundColor[index % defaultDatasetStyles.backgroundColor.length],
            })),
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: title,
                    font: {
                        size: 25,
                    },
                },
                legend: {
                    display: true,
                    position: 'right',
                },
            },
            layout: {
                padding: 20,
            },
            responsive: true,
            indexAxis: 'x',
            scales: {
                x: {
                    stacked: true,
                },
                y: {
                    stacked: true,
                },
            },
        },

    });
}


makeStackedChart({
    elementId: 'narcotics-chart',
    title: 'Stacked Example',
    labels: ['Boston', 'Worcester', 'Springfield'],
    datasets: [
        {
            label: '2022',
            data: [30000, 20000, 15000],
        },
        {
            label: '2023',
            data: [35000, 25000, 20000],
        },
        {
            label: '2024',
            data: [40000, 30000, 25000],
        },
        {
            label: '2025',
            data: [50000, 40000, 29000],
        },
    ],
});