import React, { useState } from 'react';
import { BathtubView } from './BathtubView';

export const Bathtub = () => {
    const [waterLevel, setWaterLevel] = useState(0);
    const [message, setMessage] = useState('');
    const full = 5;

    const increaseWaterLevel = () => {
        if(waterLevel >= full){
            setMessage('The bathtub is already full!')
        } else {
            console.log(`increasing water level to ${waterLevel + 1}`)
            setMessage('');
            setWaterLevel(waterLevel + 1);
        }
    }
    const decreaseWaterLevel = () => {
        if(waterLevel <= 0){
            setMessage('The bathtub is already empty!')
        } else {
            console.log(`decreasing water level to ${waterLevel - 1}`)
            setMessage('');
            setWaterLevel(waterLevel - 1)
        }
    }

    return (
        <div>
            <p>Water level is currently at {waterLevel}</p>
            {message 
            ? <p>{message}</p>
            : null
            }
            <button onClick={increaseWaterLevel}>
                Add Water
            </button>
            <button onClick={decreaseWaterLevel}>
                Drain Water
            </button>
            <BathtubView waterLevel={waterLevel}/>
        </div>
    );
}
