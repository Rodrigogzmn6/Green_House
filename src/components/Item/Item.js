import React from 'react'
import './Item.css'

function Item({ item }) {
  return (
    <div className="item" onClick={() => console.log(`${item.name} clicked`)}>
      <div className="img-div">
        <img src={item.picture} alt={`${item.name}`} />
      </div>
      <div>
        <h2>{item.name}</h2>
        {item.stock > 0 ? (
          <h3 className="stock-price">{item.price}</h3>
        ) : (
          <h3 className="no-stock">Sin Stock</h3>
        )}
      </div>
    </div>
  )
}

export default Item
