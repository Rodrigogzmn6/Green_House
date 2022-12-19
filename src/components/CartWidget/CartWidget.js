import React, { useContext } from 'react'
import './CartWidget.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Badge from '@mui/material/Badge'
import { CartContext } from '../../contexts/CartContext'
import { Link } from 'react-router-dom'

function CartWidget() {
  const { cartItems } = useContext(CartContext)

  function cartQuantity() {
    let quantity = 0
    cartItems.forEach((element) => {
      quantity += element.quantity
    })
    return quantity
  }
  return (
    <div className="cart-widget">
      <Link to="/cart">
        <Badge
          badgeContent={cartQuantity()}
          sx={{
            '& .MuiBadge-badge': {
              color: '#4E6C50',
              backgroundColor: '#F0EBCE',
            },
          }}
        >
          <ShoppingCartIcon />{' '}
        </Badge>
      </Link>
    </div>
  )
}

export default CartWidget
