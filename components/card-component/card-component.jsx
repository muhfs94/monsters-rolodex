import React from 'react';
import './card-component-style.css'

export const CardComponent = (props) => (
    <div className='card-container'>
    <h1>{props.monster.name}</h1>
    </div>
)