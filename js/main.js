const ctx = document.getElementById('regressionPlot').getContext('2d');

const regressionPlot = new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [{
            label: "Test",
            data: [{
                x: 0,
                y: 5
            }, {
                x: 5,
                y: 10
            }, {
                x: 8,
                y: 5
            }, {
                x: 15,
                y: 0
            }],
        }]
    },
    options: {
        responsive: true
    }
});