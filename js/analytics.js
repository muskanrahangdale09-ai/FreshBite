// =====================================
// FRESHBITE FOOD ANALYTICS
// =====================================


// Sample food-order data
const foodOrders = {

    Pizza: 420,
    Burger: 520,
    Pasta: 310,
    Biryani: 450,
    Sandwich: 260,
    Salad: 180

};


// Monthly sales
const monthlySales = {

    January: 42000,
    February: 48000,
    March: 53000,
    April: 61000,
    May: 67000,
    June: 72000

};


// Customer ordering pattern
const customerOrders = {

    New: 320,
    Returning: 680

};


// Revenue and profit
const revenueData = {

    revenue: [42000, 48000, 53000, 61000, 67000, 72000],

    profit: [12000, 15000, 17000, 21000, 24000, 28000]

};


// Peak ordering times
const peakTimes = {

    "8 AM": 80,
    "11 AM": 160,
    "1 PM": 240,
    "4 PM": 130,
    "7 PM": 360,
    "9 PM": 420,
    "11 PM": 180

};


// Food categories
const categories = {

    "Fast Food": 650,
    "Indian": 520,
    "Chinese": 350,
    "Italian": 310,
    "Healthy": 180

};


// Food ratings
const ratings = {

    Pizza: 4.6,
    Burger: 4.8,
    Biryani: 4.7,
    Pasta: 4.4,
    Salad: 4.2

};


// =====================================
// SUMMARY CALCULATIONS
// =====================================

const totalOrders =
    Object.values(foodOrders)
    .reduce((sum, value) => sum + value, 0);


const totalRevenue =
    monthlySales.January +
    monthlySales.February +
    monthlySales.March +
    monthlySales.April +
    monthlySales.May +
    monthlySales.June;


const totalCustomers =
    customerOrders.New +
    customerOrders.Returning;


const averageRating =
    Object.values(ratings)
    .reduce((sum, value) => sum + value, 0)
    / Object.values(ratings).length;


// Display summary

document.getElementById("totalOrders").textContent =
    totalOrders;

document.getElementById("totalRevenue").textContent =
    "₹" + totalRevenue.toLocaleString();

document.getElementById("totalCustomers").textContent =
    totalCustomers;

document.getElementById("averageRating").textContent =
    averageRating.toFixed(1);


// =====================================
// MOST ORDERED FOOD CHART
// =====================================

new Chart(
    document.getElementById("foodChart"),
    {
        type: "bar",

        data: {
            labels: Object.keys(foodOrders),

            datasets: [{
                label: "Number of Orders",

                data: Object.values(foodOrders)
            }]
        },

        options: {
            responsive: true,

            plugins: {
                legend: {
                    display: false
                }
            }
        }
    }
);


// =====================================
// MONTHLY SALES CHART
// =====================================

new Chart(
    document.getElementById("salesChart"),
    {
        type: "line",

        data: {
            labels: Object.keys(monthlySales),

            datasets: [{
                label: "Monthly Sales (₹)",

                data: Object.values(monthlySales),

                tension: 0.3
            }]
        },

        options: {
            responsive: true
        }
    }
);


// =====================================
// CUSTOMER PATTERN
// =====================================

new Chart(
    document.getElementById("customerChart"),
    {
        type: "doughnut",

        data: {
            labels: Object.keys(customerOrders),

            datasets: [{
                data: Object.values(customerOrders)
            }]
        },

        options: {
            responsive: true
        }
    }
);


// =====================================
// REVENUE & PROFIT
// =====================================

new Chart(
    document.getElementById("profitChart"),
    {
        type: "line",

        data: {

            labels: Object.keys(monthlySales),

            datasets: [

                {
                    label: "Revenue",

                    data: revenueData.revenue,

                    tension: 0.3
                },

                {
                    label: "Profit",

                    data: revenueData.profit,

                    tension: 0.3
                }

            ]
        },

        options: {
            responsive: true
        }
    }
);


// =====================================
// PEAK ORDERING TIME
// =====================================

new Chart(
    document.getElementById("timeChart"),
    {
        type: "bar",

        data: {

            labels: Object.keys(peakTimes),

            datasets: [{

                label: "Orders",

                data: Object.values(peakTimes)

            }]
        },

        options: {
            responsive: true
        }
    }
);


// =====================================
// FOOD CATEGORY
// =====================================

new Chart(
    document.getElementById("categoryChart"),
    {
        type: "pie",

        data: {

            labels: Object.keys(categories),

            datasets: [{

                data: Object.values(categories)

            }]
        },

        options: {
            responsive: true
        }
    }
);


// =====================================
// FOOD RATINGS
// =====================================

new Chart(
    document.getElementById("ratingChart"),
    {
        type: "bar",

        data: {

            labels: Object.keys(ratings),

            datasets: [{

                label: "Rating",

                data: Object.values(ratings)

            }]
        },

        options: {

            responsive: true,

            scales: {

                y: {

                    min: 0,

                    max: 5

                }

            }

        }
    }
);