// src/components/Visualization.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the components needed for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Visualization = ({ predictions }) => {
    const chartData = {
        labels: predictions.map(pred => pred.courseCode), // X-axis labels (course codes)
        datasets: [
            {
                label: 'Predicted Enrollment', // Legend label for predicted enrollment
                data: predictions.map(pred => pred.students), // Y-axis data (predicted enrollment)
                backgroundColor: 'rgba(75, 192, 192, 0.6)', // Bar color for predicted enrollment
            },
            {
                label: 'Predicted Sections', // Legend label for predicted sections
                data: predictions.map(pred => pred.predictedSections), // Y-axis data (predicted sections)
                backgroundColor: 'rgba(255, 99, 132, 0.6)', // Bar color for predicted sections
            },
        ],
    };

    const options = {
        responsive: true, // Make chart responsive
        plugins: {
            legend: {
                position: 'top', // Position of the legend
            },
            title: {
                display: true, // Display chart title
                text: 'Predicted Enrollment and Sections per Course', // Chart title
            },
        },
    };

    return (
        <div>
            <Bar data={chartData} options={options} /> {/* Render chart */}
        </div>
    );
};

export default Visualization;
