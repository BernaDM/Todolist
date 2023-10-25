import React from 'react';
import Button from './Button';
import { useNavigate, useParams } from 'react-router-dom';
import './Detalis.css'

const Detalis = () => {
    const params = useParams()
    const navigate = useNavigate()

    const handleVoltarButton = () => {
        navigate(-1)
    }
    
    return (
        <>
            <div className="button-voltar">
                <Button onClick={handleVoltarButton}>Voltar</Button>
            </div>
            <div className="detalis-container">
                <h2>{params.taskTittle}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ipsa quidem repudiandae tempore, esse temporibus repellendus.</p>
            </div>
        </>
    );
}

export default Detalis;