'use strict';

import {
    regressionData,
    xAxisMaxVal,
    xAxisMinVal,
    yAxisMaxVal,
    yAxisMinVal,
} from "./constants.js";
import {
    captureOnClickCoordinates,
    captureAddButtonCoordinates,
    resetPlotDataPoints
} from "./Tracker.js";

const ctx = document.getElementById("regressionPlot").getContext("2d");

export const regressionPlot = new Chart(ctx, {
    type: "scatter",
    data: {
        datasets: [
            {
                label: "X-Y Regression",
                data: regressionData,
                borderColor: "#3A3839",
                backgroundColor: "#ECECEC",
                pointStyle: "rectRot",
                radius: 4,
                borderWidth: 3,
            },
        ],
    },
    options: {
        responsive: true,
        scales: {
            x: {
                max: xAxisMaxVal,
                min: xAxisMinVal,
            },
            y: {
                max: yAxisMaxVal,
                min: yAxisMinVal,
            },
        },
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Regression Plot",
                position: "bottom",
            },
        },
        onClick: captureOnClickCoordinates,
    },
});

const addButton = document.getElementById("addButton");
addButton.addEventListener("click", captureAddButtonCoordinates);

const resetButton = document.getElementById("resetState");
resetButton.addEventListener("click", resetPlotDataPoints);