// src/components/PredictionTable.js
import React from 'react';
import Visualization from './Visualization'; // Import the Visualization component

const PredictionTable = ({ predictions }) => {
    return (
        <div>
            <h2>Predicted Enrollment for 2024</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Course Code</th>
                        <th>Predicted Enrollment</th>
                        <th>Predicted Sections</th>
                    </tr>
                </thead>
                <tbody>
                    {predictions.map((p, index) => (
                        <tr key={index}>
                            <td>{p.courseCode}</td>
                            <td>{p.students}</td> {/* Use students directly from predictions */}
                            <td>{p.predictedSections}</td> {/* Display predicted sections */}
                        </tr>
                    ))}
                </tbody>
            </table>
            <Visualization predictions={predictions} /> {/* Pass predictions to Visualization */}
        </div>
    );
};

export default PredictionTable;
