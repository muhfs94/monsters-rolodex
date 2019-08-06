import React from 'react';
import './CardStyles.css'

export const CardComponent = (props) => (
  <div className="card-container">
    <img
      alt="hooman"
      src={`https://robohash.org/${props.hyuman.id}?set=set3&size=180x180`}
    />
    <h2>{props.hyuman.name}</h2>
    <p>{props.hyuman.email}</p>
  </div>
);
