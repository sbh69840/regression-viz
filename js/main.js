import { captureOnClickCoordinates } from "./Tracker.js";

const ctx = document.getElementById('regressionPlot').getContext('2d');

export const regressionPlot = new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [{
            label: "X-Y Regression",
            data: [{
                x: 20,
                y: 50
            }, {
                x: 50,
                y: 10
            }, {
                x: 8,
                y: 50
            }, {
                x: 15,
                y: 30
            }],
            borderColor: "#3A3839",
            backgroundColor: "#ECECEC",
            pointStyle: 'rectRot',
            radius: 4,
            borderWidth: 3,
        },
        {
            type: 'line',
            label: "y = a + bx",
            data: [{
                x: 0,
                y: 55.5
            }, {
                x: 100,
                y: -32.6
            }
            ],
            borderColor: "rgba(153, 102, 255, 1)",
            fill: false
        }
        ]
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
        onClick: captureOnClickCoordinates,
        scales: {
            x: {
                min: 0,
                max: 100
            },
            y: {
                min: 0,
                max: 100
            }
        }
    }
});

