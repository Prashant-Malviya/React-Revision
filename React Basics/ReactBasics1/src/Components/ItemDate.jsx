import React from 'react'
import './Item.css';

function ItemDate({date}) {

    // const date = date;

  return (
    <div>
      <div className="mfg-date">
        <span>{date}</span>
      </div>
    </div>
  )
}

export default ItemDate
