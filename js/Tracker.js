
import { regressionPlot } from "./main.js";
import { roundTo1 } from "./utils.js";

export function captureOnClickCoordinates(evt) {
    // Canvas coordinates are relative to the canvas element.
    const canvasPosition = Chart.helpers.getRelativePosition(evt, regressionPlot);

    // Data Points in the chart.
    const dataX = roundTo1(regressionPlot.scales.x.getValueForPixel(canvasPosition.x));
    const dataY = roundTo1(regressionPlot.scales.y.getValueForPixel(canvasPosition.y));
    console.log("dataX: ", dataX, "dataY: ", dataY);

    // Add to the chart dataset.
    regressionPlot.data.datasets[0].data.push({ x: dataX, y: dataY });

    // Replace 'a' and 'b' with parameters calculated using regression calculator
    const a = 1 + Math.floor(Math.random() * 50);
    const b = Math.random();

    // A value of 'x' more than the max boundary of x to draw a line that doesn't break
    // in the middle of the chart
    const large_x = 100;

    regressionPlot.data.datasets[1].data[0]['y'] = a;
    regressionPlot.data.datasets[1].data[1]['x'] = large_x;
    regressionPlot.data.datasets[1].data[1]['y'] = b * large_x + a;

    //update the chart
    regressionPlot.update();
}

