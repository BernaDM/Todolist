import React, { useState } from 'react';
import './Additem.css'
import Button from './Button';

const AddItem = ({handleTaskAddition}) => {
    const [inputData, setInputData] = useState('')

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    }

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData)
        setInputData('')
    }

    return (
        <div className="add-item-container">
            <input onChange={handleInputChange} value={inputData} className='add-item-input' type="text" />
            <div className="add-item-button-container">
            <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>
        
        </div>
    );
}

export default AddItem;