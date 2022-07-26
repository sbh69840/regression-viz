'use strict';

import { regressionPlot } from "./main.js";
import { none, roundTo1 } from "./utils.js";
import {
    xAxisMinVal,
    xAxisMaxVal,
    yAxisMinVal,
    yAxisMaxVal,
    regressionData,
} from "./constants.js";

const chartPosition = Chart.helpers.getRelativePosition;

function validateDataPoints(datapoint, eles = []) {
    // Add more precise error handling here
    if (datapoint.x < xAxisMinVal || datapoint.x > xAxisMaxVal) return false;
    if (datapoint.y < yAxisMinVal || datapoint.y > yAxisMaxVal) return false;
    return none(eles, ele => ele.x === datapoint.x && ele.y === datapoint.y);
}

function addNewDatapoint(dataX, dataY, _nearbyElements) {
    const dataPoint = { x: roundTo1(dataX), y: roundTo1(dataY) };

    if (!validateDataPoints(dataPoint, regressionData)) {
        console.log("Not adding the data point to chart", dataPoint);
        return;
    }

    // Add to the chart dataset.
    regressionData.push(dataPoint);

    //update the chart
    regressionPlot.update();
}

export function captureOnClickCoordinates(evt, elements) {
    // Canvas coordinates are relative to the canvas element.
    const canvasPosition = chartPosition(evt, regressionPlot);

    // Data Points in the chart.
    const dataX = regressionPlot.scales.x.getValueForPixel(canvasPosition.x);
    const dataY = regressionPlot.scales.y.getValueForPixel(canvasPosition.y);
    
    addNewDatapoint(dataX, dataY, elements);
}

export function captureAddButtonCoordinates() {
    const xInput = document.getElementById("xInput");
    const yInput = document.getElementById("yInput");
    const getInputValue = (input) => {
        const val = parseFloat(input.value || 0);
        input.value = "";
        return val;
    }
    const x = getInputValue(xInput);
    const y = getInputValue(yInput);
    addNewDatapoint(x, y);
}

export function resetPlotDataPoints() {
    regressionData.length = 0;
    regressionPlot.update();
}
