import React, { useState } from 'react';

export const Bathtub = () => {
    const [waterLevel, setWaterLevel] = useState(0);
    const [message, setMessage] = useState('');
    const full = 5;

    return (
        <div>
            <p>Water level is currently at {waterLevel}</p>
            <button onClick={() => console.log('increaseWaterLevel')}>
                Add Water
            </button>
            <button onClick={() => console.log('decreaseWaterLevel')}>
                Drain Water
            </button>
        </div>
    );
}
