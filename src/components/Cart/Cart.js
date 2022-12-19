import { Link } from 'react-router-dom'
import React, { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import CartItem from '../CartItem/CartItem'
import './Cart.css'

function Cart() {
  const { cartItems, removeItem } = useContext(CartContext)

  let total = 0
  cartItems.forEach((element) => {
    total += element.item['price'] * element.quantity
  })

  function handleRemoveItem(itemId) {
    removeItem(itemId)
  }

  return cartItems.length > 0 ? (
    <div className="cart">
      <div className="cart-list-div">
        <div className="headers-div">
          <h2>Tus Productos</h2>
          <h4>Precio</h4>
          <h4>Cantidad</h4>
          <h4>Subtotal</h4>
        </div>
        {cartItems &&
          cartItems.map((item) => (
            <CartItem
              key={item.item['id']}
              item={item}
              handleRemoveItem={handleRemoveItem}
            />
          ))}
      </div>
      <div className="total-div">
        <div>
          <h2 className="total">TOTAL</h2>
          <h2>$ {total}</h2>
        </div>
        <Link to="/" className="boton-finalizar-compra">
          <button>Finalizar Compra</button>
        </Link>
      </div>
    </div>
  ) : (
    <div className="empty-cart">
      <h2>Tu carrito está vacío</h2>
      <Link to="/">
        <button onClick={() => console.log('clic')}>Volver a la tienda</button>
      </Link>
    </div>
  )
}

export default Cart
