import React, { useContext } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Badge from '@mui/material/Badge'
import { CartContext } from '../../contexts/CartContext'
import { Link } from 'react-router-dom'

function CartWidget() {
  const { getTotalQuantity } = useContext(CartContext)

  return (
    <div className="cart-widget">
      <Link to="/cart">
        <Badge
          badgeContent={getTotalQuantity()}
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
