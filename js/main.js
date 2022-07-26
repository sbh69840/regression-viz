import { captureOnClickCoordinates } from "./Tracker.js";

const ctx = document.getElementById('regressionPlot').getContext('2d');

export const regressionPlot = new Chart(ctx, {
    type: 'scatter',
    data: {
        regressionPrarams: {
            a: 0, // weight parameter
            b: 0 // bias parameter
        },
        datasets: [{
            label: "X-Y Regression",
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
            borderColor: "#3A3839",
            backgroundColor: "#ECECEC",
            pointStyle: 'rectRot',
            radius: 4,
            borderWidth: 3,
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Regression Plot',
                position: 'bottom'
            }
        },
        onClick: captureOnClickCoordinates
    }
});

