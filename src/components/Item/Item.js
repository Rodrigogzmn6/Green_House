import React from 'react'
import './Item.css'
import { NavLink } from 'react-router-dom'

function Item({ item }) {
  return (
    <NavLink to={`/item/${item.id}`} className="item">
      <div className="img-div">
        <img src={item.picture} alt={`${item.name}`} />
      </div>
      <div className="prod-info-div">
        <h2>{item.name}</h2>
        {item.stock > 0 ? (
          <h3 className="stock-price">${item.price}</h3>
        ) : (
          <h3 className="no-stock">Sin Stock</h3>
        )}
      </div>
    </NavLink>
  )
}

export default Item
