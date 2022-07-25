
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
    regressionPlot.data.datasets[0].data.push({x: dataX, y: dataY});

    //update the chart
    regressionPlot.update();
}

