/**
 * Set Chart Data
 * @param {Array} label 
 * @param {Array} data 
 * @param {String} borderColor 
 * @param {Function} whiteGradientBg 
 * @returns dataSet
 */
function lineDataSet(label, data, borderColor, whiteGradientBg) {
    var dataSet = {
        labels: label,
        datasets: [{
            data: data,
            backgroundColor: (context) => {
                return whiteGradientBg(context);
            },
            borderColor: [
                borderColor,
            ],
            borderWidth: 1,
            tension: 0.5,
            fill: true,
            pointRadius: 0,
            pointHoverRadius: 0,
        }]
    };
    return dataSet
}

/**
 * To Data Configuration
 * @param {} lineDataSet 
 * @returns configData
 */
function config(lineDataSet) {
    const configData = {
        type: 'line',
        data: lineDataSet,
        options: {
            plugins: {
                legend: {
                    display: false,
                },
            },
            scales: {
                x: {
                    beginAtZero: true,
                    ticks: {
                        display: false,
                    },
                    grid: {
                        display: false,
                        drawTicks: false,
                        drawOnChartArea: false,
                        drawBorder: false,
                    }
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        display: false,
                    },
                    grid: {
                        display: false,
                        drawTicks: false,
                        drawOnChartArea: false,
                        drawBorder: false,
                    }
                }
            }
        }
    };

    return configData;
}

// Change Label & Data Set Here
var labels = ['Jan 2022', 'Feb 2022', 'Mar 2022', 'Apr 2022', 'May 2022'];
var data1 = [250, 200, 170, 180, 120];
var data2 = [140, 180, 170, 200, 250];

// carbonFootPrint1
const lineSet = lineDataSet(labels, data1, 'white', whiteGradientBg);
const lineSet2 = lineDataSet(labels, data2, 'white', whiteGradientBg);
const lineSetRed = lineDataSet(labels, data2, 'red', whiteGradientRed);
const carbonFootPrint1 = new Chart(
    document.getElementById('carbonFootPrint1'),
    config(lineSet)
);

const carbonFootPrint2 = new Chart(
    document.getElementById('carbonFootPrint2'),
    config(lineSetRed)
);
const carbonFootPrint3 = new Chart(
    document.getElementById('carbonFootPrint3'),
    config(lineSet2)
);
const carbonFootPrint4 = new Chart(
    document.getElementById('carbonFootPrint4'),
    config(lineSet2)
);
const carbonFootPrint5 = new Chart(
    document.getElementById('carbonFootPrint5'),
    config(lineSet2)
);
const carbonFootPrint6 = new Chart(
    document.getElementById('carbonFootPrint6'),
    config(lineSetRed)
);
const carbonFootPrint7 = new Chart(
    document.getElementById('carbonFootPrint7'),
    config(lineSetRed)
);
const carbonFootPrint8 = new Chart(
    document.getElementById('carbonFootPrint8'),
    config(lineSet2)
);
const carbonFootPrint9 = new Chart(
    document.getElementById('carbonFootPrint9'),
    config(lineSet2)
);
const carbonFootPrint10 = new Chart(
    document.getElementById('carbonFootPrint10'),
    config(lineSetRed)
);
const carbonFootPrint11 = new Chart(
    document.getElementById('carbonFootPrint11'),
    config(lineSet)
);
const carbonFootPrint12 = new Chart(
    document.getElementById('carbonFootPrint12'),
    config(lineSet)
);

/**
 * To set red white BG
 * @param {argument} context 
 * @returns whiteGradientRed
 */
function whiteGradientBg(context) {
    console.log('context', context)
    const chart = context.chart;
    const { ctx, chartArea, scales } = chart;
    if (!chartArea) {
        return null;
    }
    const { left, right, top, bottom, width, height } = chartArea;
    const { x, y } = scales;
    const gradientBackground = ctx.createLinearGradient(0, top, 0, bottom);
    gradientBackground.addColorStop(0.25, '#405d69');
    gradientBackground.addColorStop(0.9, '#08171d');
    return gradientBackground;
}

/**
 * To set red gradient BG
 * @param {argument} context 
 * @returns whiteGradientRed
 */
function whiteGradientRed(context) {
    console.log('context', context)
    const chart = context.chart;
    const { ctx, chartArea, scales } = chart;
    if (!chartArea) {
        return null;
    }
    const { left, right, top, bottom, width, height } = chartArea;
    const { x, y } = scales;
    const gradientBackground = ctx.createLinearGradient(0, top, 0, bottom);
    gradientBackground.addColorStop(0.25, '#72193B');
    gradientBackground.addColorStop(0.9, '#08171d');
    return gradientBackground;
}