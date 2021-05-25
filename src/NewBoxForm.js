import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const NewBoxForm = ({ addBox }) => {

    const INITIAL_STATE = {
        width: '',
        height: '',
        bgColor: '',
    };

    const [newBoxFormData, setNewBoxFormData] = useState(INITIAL_STATE);

    const handleChange = evt => {
        const { name, value } = evt.target;

        setNewBoxFormData(newBoxFormData => ({
            ...newBoxFormData,
            [name]: value
        }));
    };

    const handleSubmit = evt => {
        evt.preventDefault();

        addBox({...newBoxFormData, id: uuid()});

        setNewBoxFormData(INITIAL_STATE);
    };

    return (
        <form onSubmit={ handleSubmit }>
            <label htmlFor="width">Width: </label>
            <input id="width" type="text" name="width" value={ newBoxFormData.width } onChange={ handleChange } placeholder="in pixels"></input>

            <label htmlFor="height">Height: </label>
            <input id="height" type="text" name="height" value={ newBoxFormData.height } onChange={ handleChange } placeholder="in pixels"></input>

            <label htmlFor="bgColor">Background Color: </label>
            <input id="bgColor" type="text" name="bgColor" value={ newBoxFormData.bgColor } onChange={ handleChange }></input>

            <button>Create New Box</button>
        </form>
    );
};

export default NewBoxForm;