const QuickChart = require("quickchart-js");

const getChart = async (data) => {
    // Extract the "month" and "amountPaid" values into separate arrays
    const months = data.map((item) => item.month);
    const amounts = data.map((item) => item.amountPaid);

    // Create a new chart object
    const chart = new QuickChart();
    chart.setConfig({
        type: "bar",
        data: {
            labels: months,
            datasets: [
                {
                    label: "Amount Paid",
                    data: amounts,
                    backgroundColor: "green",
                },
            ],
        },
        options: {
            responsive: false,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function (value) {
                            return "$" + value;
                        },
                    },
                },
            },
        },
    });

    chart.setWidth(1000);
    chart.setHeight(600);

    // Convert the chart object to a base64-encoded PNG image
    const imageUrl = await chart.getShortUrl();

    return imageUrl;
};

module.exports = getChart;
