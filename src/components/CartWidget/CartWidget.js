import React from 'react'
import './CartWidget.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Badge from '@mui/material/Badge'

function CartWidget() {
  return (
    <div className="cart-widget">
      <Badge
        badgeContent={2}
        sx={{
          '& .MuiBadge-badge': {
            color: '#4E6C50',
            backgroundColor: '#F0EBCE',
          },
        }}
      >
        <ShoppingCartIcon />{' '}
      </Badge>
    </div>
  )
}

export default CartWidget
