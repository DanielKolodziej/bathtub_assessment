import React from 'react';

const bathtubStyle = {
    height: '100px',
    width: '300px',
    margin: '1em',
    border: '5px solid black',
    borderTop: '0px',
    borderRadius: '5%',
    background: 'linear-gradient(to top, #00bfff, #70dbff 12%, #fff 20%)',
}

export const BathtubView = (props) => {

    return (
        <div style={bathtubStyle}>
            bathtub view {props.waterLevel}
        </div>
    );
}