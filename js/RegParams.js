// Part B - Sanya
import { regressionPlot } from "./main.js";

export function calculateRegressionParams () {

    // calculating the regressionParams
    var sumX =0, sumY =0, numerator =0, denominator =0;

    const numberOfPointsOnCanvas = regressionPlot.data.datasets[0].data.length;

    regressionPlot.data.datasets[0].data.forEach(ele => {
        sumX += ele.x
        sumY += ele.y
    });
    
    const meanOfX = sumX/numberOfPointsOnCanvas;
    const meanOfY = sumY/numberOfPointsOnCanvas;

    regressionPlot.data.datasets[0].data.forEach(ele => {
        numerator += ele.x * (ele.y - meanOfY); // change it to a more meaningful variable name
        denominator += ele.x * (ele.x - meanOfX); // change it to a more meaningful variable name
    });

    const weight = numerator/denominator;
    const bias = meanOfY - (weight*meanOfX);

    regressionPlot.data.regressionPrarams.a = bias;
    regressionPlot.data.regressionPrarams.b = weight;

    console.log (regressionPlot.data.regressionPrarams);

}

