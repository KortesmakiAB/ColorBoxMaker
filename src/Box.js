import React from 'react';

const Box = ({ width, height, bgColor, removeBox, id }) => {
    const handleRemove = () => removeBox(id);

    return (
        <div>
            <div data-testid={`${width}-${height}-${bgColor}`} style={ { width: `${width}px`, height: `${height}px`, backgroundColor: bgColor } }></div>
            <button onClick={handleRemove}>X</button>
        </div>
    );
};

export default Box;