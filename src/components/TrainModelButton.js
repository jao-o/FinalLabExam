// src/components/TrainModelButton.js
import React from 'react';
import * as tf from '@tensorflow/tfjs';

const TrainModelButton = ({ data, onModelTrained }) => {
    const trainModel = async () => {
        const xs = tf.tensor(data.map(d => d.year)); // Extract year values
        const ys = tf.tensor(data.map(d => d.students)); // Extract students values

        const model = tf.sequential(); // Initialize sequential model
        model.add(tf.layers.dense({ units: 1, inputShape: [1] })); // Add dense layer

        model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' }); // Compile model

        await model.fit(xs, ys, { epochs: 100 }); // Train model for epochs
        onModelTrained(model); // Notify model trained
    };

    return <button onClick={trainModel}>Train Model</button>; // Button to trigger
};

export default TrainModelButton;
