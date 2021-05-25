import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';


const BoxList = () => {
    const [boxes, setBoxes] = useState([]);

    const addBox = newBoxFormData => setBoxes(boxes => [...boxes, newBoxFormData]);
    
    const removeBox = boxId => setBoxes(boxes => boxes.filter(box => box.id !== boxId));

    return (
        <div>
            <header>
                <NewBoxForm addBox={addBox} />
            </header>
            <hr></hr>
            <main>
                <h3>Boxes</h3>
                <ul>
                    { boxes.map(({ width, height, bgColor, id }) => 
                        <li>
                            <Box
                            id={id} 
                            key={id}
                            width={width}
                            height={height}
                            removeBox={removeBox}
                            bgColor={bgColor}
                            />
                        </li>) 
                    }
                </ul>
            </main>
        </div>
    );
};

export default BoxList;