import React, { useState, useEffect } from 'react';
import { BathtubView } from './BathtubView';

export const Bathtub = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [waterLevel, setWaterLevel] = useState(0);
    const [status, setStatus] = useState('');
    const full = 5;

    useEffect(() => {
        let interval;
        if (isRunning) {
          interval = setTimeout(
          () => {
            switch (status) {
                case 'The bathtub is currently being filled...':
                    if(waterLevel >= full){
                        setStatus('The bathtub is full!');
                        setIsRunning(false);
                    } else {
                        setWaterLevel(waterLevel + 1);
                    }
                    break;
                case 'The bathtub is currently draining...':
                    if(waterLevel <= 0){
                        setStatus('The bathtub is empty!');
                        setIsRunning(false);
                    } else {
                    setWaterLevel(waterLevel - 1);
                    }
                    break;
            }
          },
            2000
          );
        }
        return () => clearTimeout(interval);
      },
      [isRunning, waterLevel,]
    );

    const increaseWaterLevel = () => {
        if(status !== 'The bathtub is full!'){
            setStatus('The bathtub is currently being filled...');
            setIsRunning(true);
        }
    }
    const decreaseWaterLevel = () => {
        if(status !== 'The bathtub is empty!'){
            setStatus('The bathtub is currently draining...');
            setIsRunning(true);
        }
    }

    return (
        <div style={{margin: '0 auto', textAlign: 'center',}}>
            <p>Water level is currently at {waterLevel}</p>
            {status 
            ? <p>{status}</p>
            : null
            }
            <button 
                onClick={increaseWaterLevel} 
                style={{
                    margin: '1em', 
                    borderRadius: '10%', 
                    padding: '0.75em', 
                    border: 'none',
                    fontWeight: 'bold',
                    backgroundColor: '#00bfff',
                    color: '#fff',}}>
                Add Water
            </button>
            <button 
                onClick={decreaseWaterLevel}
                style={{
                    margin: '1em', 
                    borderRadius: '10%', 
                    padding: '0.75em', 
                    border: 'none',
                    fontWeight: 'bold',
                    backgroundColor: '#121212',
                    color: '#fff',}}>
                Drain Water
            </button>
            <BathtubView waterLevel={waterLevel}/>
        </div>
    );
}
