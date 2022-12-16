import React from 'react'
import { useState } from 'react'

const CartContext = React.createContext([])

function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  function addItem(item, quantity) {
    let shouldAdd = true
    if (quantity <= 0) {
      shouldAdd = false
    } else {
      shouldAdd = !isInCart(item.id)
    }
    shouldAdd &&
      setCartItems([
        ...cartItems,
        { id: item.id, name: item.name, price: item.price, quantity: quantity },
      ])
  }

  function removeItem(itemId) {
    isInCart(itemId) &&
      setCartItems(cartItems.filter((element) => element.id !== itemId))
  }

  function clear() {
    setCartItems([])
  }

  function isInCart(id) {
    let inCart = false
    cartItems.forEach((element) => {
      if (element.id === id) {
        inCart = true
      }
    })
    return inCart
  }

  return (
    <CartContext.Provider
      value={{ cartItems, addItem, removeItem, clear, isInCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartContextProvider }
