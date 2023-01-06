import React from 'react'
import { useState } from 'react'

const CartContext = React.createContext([])

function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  function addItem(item, quantity) {
    let shouldAdd = true
    if (quantity <= 0) {
      shouldAdd = false
      alert('Debes agregar uno o más ítems')
    } else {
      isInCart(item.id) && alert('El elemento ya se encuentra en tu carrito')
      shouldAdd = !isInCart(item.id)
    }
    shouldAdd &&
      setCartItems([...cartItems, { item: item, quantity: quantity }])
  }

  function removeItem(itemId) {
    isInCart(itemId) &&
      setCartItems(cartItems.filter((element) => element.item['id'] !== itemId))
  }

  function clear() {
    setCartItems([])
  }

  function isInCart(id) {
    let inCart = false
    cartItems.forEach((element) => {
      if (element.item['id'] === id) {
        inCart = true
      }
    })
    return inCart
  }

  function getTotalAmount() {
    let totalAmount = 0
    cartItems.forEach((item) => {
      totalAmount += item.item.price * item.quantity
    })
    return totalAmount
  }

  function getTotalQuantity() {
    let totalQuantity = 0
    cartItems.forEach((item) => {
      totalQuantity += item.quantity
    })
    return totalQuantity
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        removeItem,
        clear,
        isInCart,
        getTotalAmount,
        getTotalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartContextProvider }
