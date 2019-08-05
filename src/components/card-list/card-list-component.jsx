import React from 'react'
import { Card } from '../card-component/card-component'
import './card-list.css'

export const CardList = props => (
  <div className="card-list">
    {props.monsterz.map(monster => (
      <Card key={monster.id} monzter={monster} />
    ))}
  </div>
)
