export const roundTo1 = (value) => round(value, 1);
export const none = (arr, callback) => !arr.some(callback)

function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}
