import React from 'react'
import './CartItem.css'
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded'

function CartItem({ item, handleRemoveItem }) {
  return (
    <div className="cart-item">
      <div className="product-image">
        <img src={item.item['picture']} alt={`${item.item['name']}`} />
      </div>
      <div className="product-info">
        <h2>{item.item['name']}</h2>
        <p>{item.item['description']}</p>
      </div>
      <p className="number-column">${item.item['price']}</p>
      <p className="number-column">{item.quantity}</p>
      <p className="number-column">{item.item['price'] * item.quantity}</p>
      <div className="delete-icon">
        <HighlightOffRoundedIcon
          onClick={() => handleRemoveItem(item.item['id'])}
        />
      </div>
    </div>
  )
}

export default CartItem
