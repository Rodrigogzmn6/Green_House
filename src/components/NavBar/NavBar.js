import React, { useContext } from 'react'
import './NavBar.css'
import '../CartWidget/CartWidget'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'

function NavBar() {
  const { cartItems } = useContext(CartContext)
  return (
    <div className="navbar">
      <header>
        <div className="navbar-logo">
          <Link to={'/'}>
            <h1>GREEN HOUSE</h1>
          </Link>
        </div>
        <div className="navbar-menu">
          <ul>
            <li>
              <Link to={'/'}>Tienda</Link>
            </li>
            <li>
              <Link to={`/category/${'planta'}`}>Plantas</Link>
            </li>
            <li>
              <Link to={`/category/${'maceta'}`}>Macetas</Link>
            </li>
            <li>
              <Link to={`/category/${'herramienta'}`}>Herramientas</Link>
            </li>
          </ul>
        </div>
        <div className="cart-icon">
          {cartItems.length > 0 && <CartWidget />}
        </div>
      </header>
    </div>
  )
}

export default NavBar
