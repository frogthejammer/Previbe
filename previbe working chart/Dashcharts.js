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
                label: title,
                data: data,
                ...defaultDatasetStyles,
                ...datasetStyles,
            }],
        },
        options: {
            indexAxis: 'x',
            title: {
                display: true,
                text: title,
                fontSize: 25,
            },
            legend: {},
            layout: {},
            plugins: {},
        },
    });

}

const chartConfigs = [
    {
        elementId: 'arrests-and-prosecutions-chart',
        type: 'bar',
        title: 'Arrests and prosecutions',
        labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
        data: [617594, 181045, 153060, 106519, 105162, 95072], 
        datasetStyles: {}, //optional style override, leave empty or delete for defaults.
    },
    {
        elementId: 'attorney-actions-chart',
        type: 'bar',
        title: 'Attorney Actions',
        labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
        data: [70000, 38002, 55273, 73512, 78463, 95072],
        datasetStyles: {}, //optional style override, leave empty or delete for defaults.
    },
    {
        elementId: 'victim-services-chart',
        type: 'bar',
        title: 'Victim Services',
        labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
        data: [70000, 38002, 55273, 73512, 78463, 95072],
        datasetStyles: {}, //optional style override, leave empty or delete for defaults.
    },
    {
        elementId: 'special-crimes-unit-chart',
        type: 'bar',
        title: 'Special crimes unit',
        labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
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
    makeChart(chartConfigs[i]);
}