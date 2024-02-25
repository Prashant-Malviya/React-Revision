import React from 'react'
import './Item.css'

function Item(props) {
  return (
    <div>
      {props.name} 
      <span> {props.children}</span>
    </div>
  )
}

export default Item
