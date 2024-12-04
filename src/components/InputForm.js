// src/components/InputForm.js
import React, { useState } from 'react';
import Papa from 'papaparse';

const InputForm = ({ onAddData }) => {
    const [file, setFile] = useState(null); // Track selected file

    const handleFileChange = (e) => {
        setFile(e.target.files[0]); // Update file state
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default submit
        if (file) {
            Papa.parse(file, {
                header: true, // Parse as CSV
                skipEmptyLines: true, // Skip empty lines
                complete: (results) => {
                    results.data.forEach((data) => {
                        if (data.courseCode && data.students) {
                            onAddData({
                                courseCode: data.courseCode, // Add course code
                                students: parseInt(data.students, 10), // Convert students to integer
                            });
                        }
                    });
                },
                error: (error) => {
                    console.error("Error parsing CSV:", error); // Log parsing errors
                },
            });
        }
        setFile(null); // Reset file state
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <input
                type="file"
                accept=".csv"
                onChange={handleFileChange}
                required
            />
            <button type="submit">Upload CSV</button> {/* Upload button */}
        </form>
    );
};

export default InputForm;
