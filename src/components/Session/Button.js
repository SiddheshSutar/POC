import React from 'react';

const Button = ({onClick, btnValue, className}) => {
    return ( 
        <div className = {className}>
            <button onClick = {onClick}>{btnValue}</button>
        </div>
    );
}
 
export default Button;