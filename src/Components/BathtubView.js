import React from 'react';

const bathtubStyle = {
    height: '100px',
    width: '300px',
    margin: '0 auto',
    marginTop: '2em',
    border: '5px solid #121212',
    borderTop: '0px',
    borderRadius: '5%',
    position: 'relative',
}

export const BathtubView = (props) => {
    const water = []
    for (let i = 1; i <= props.waterLevel; i++){
        water.push(<div key={i} style={{height: '20px', width: '100%', backgroundColor: '#00bfff', position: 'absolute', bottom: `calc(20px * ${i} - 20px)`,}}></div>)
    }

    return (
        <div style={bathtubStyle}>
            {
                water.length > 0
                ? water
                : null
            }
        </div>
    );
}