import React from 'react';
import { CardComponent } from '../card/CardComponent'
import './CardListStyles.css'

export const CardListComponent = (props) => {
  return (
    <div className="card-list">
    {props.humanz.map(hooman => (
      <CardComponent key={hooman.id} hyuman={hooman} /> 
    ))}
    </div>
  );
};
