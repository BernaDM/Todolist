import React from 'react';
import "./item.css";
import { CgClose, CgInfo } from 'react-icons/cg';

import { useNavigate } from "react-router-dom";

const Item = ({ item, handleTaskId, handleTaskDelition }) => {
    // return <div className='item-container'>{item.tittle}</div> ;
    const navigate = useNavigate()

    const handleTaskClickDetali = () => {
        navigate(`${item.tittle}`)
    }

    return (
        <div className="item-container"
            style={item.completed ? { borderLeft: '6px solid chartreuse' } : {}}>

            <div className="item-tittle" onClick={() => handleTaskId(item.id)}>
                {item.tittle}
            </div>

            <div className="buttons-countainer">
                <button className="remove-item" onClick={() => handleTaskDelition(item.id)}>
                    <CgClose />
                </button>
                <button className="see-item"  onClick={handleTaskClickDetali}>
                    <CgInfo />
                </button>
            </div>
        </div>
    )
}

export default Item;