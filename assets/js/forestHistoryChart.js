var lineChartsDatas = {
    labels: ['Jan 2022', 'Feb 2022', 'Mar 2022', 'Apr 2022', 'May 2022'],
    datasets: [{
        data: [0, 110, 110, 120, 100, 120,],
        backgroundColor: (context) => {
            const chart = context.chart;
            const { ctx, chartArea, scales } = chart;
            if (!chartArea) {
                return null;
            }
            return bgGradient(ctx, chartArea, scales);
        },
        borderColor: [
            '#ffffff',
        ],
        borderWidth: 3,
        tension: 0.5,
        fill: true,
        pointBorderColor: 'white',
        pointBackgroundColor: 'white',
    }]
};

// config 
const contributionsConfig = {
    type: 'line',
    data: lineChartsDatas,
    options: {
        plugins: {
            legend: {
                display: false,
            },
        },
    }
};

// render init block
const contributorsLineChart = new Chart(
    document.getElementById('forestImpact'),
    contributionsConfig
);


function bgGradient(ctx, chartArea, scales) {
    const { left, right, top, bottom, width, height } = chartArea;
    const { x, y } = scales;
    const gradientBackground = ctx.createLinearGradient(0, top, 0, bottom);
    gradientBackground.addColorStop(0.25, '#405d69');
    gradientBackground.addColorStop(0.9, '#08171d');
    return gradientBackground;
}