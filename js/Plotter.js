// Part C - Shivaraj
'use strict';
import {
    xAxisMaxVal, xAxisMinVal,
} from "./constants.js";
import { regressionPlot } from "./main.js";
export function drawLine(){
    // Replace 'a' and 'b' with parameters calculated using regression calculator
    const a = regressionPlot.data.regressionPrarams.a;
    const b = regressionPlot.data.regressionPrarams.b;

    // Calculate the y-intercept w.r.t min x-axis value
    // Don't have to set the x co-ordinate for data[0]
    // because it is by default xAxisMinVal
    regressionPlot.data.datasets[1].data[0]['y'] = a + b * xAxisMinVal;
    regressionPlot.data.datasets[1].data[1]['x'] = xAxisMaxVal;
    // Calculate the y-intercept w.r.t max x-axis value
    regressionPlot.data.datasets[1].data[1]['y'] = b * xAxisMaxVal + a;
}