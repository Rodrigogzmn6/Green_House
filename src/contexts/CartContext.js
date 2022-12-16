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
      cartItems.forEach((element) => {
        if (element.id === item.id) {
          shouldAdd = false
        }
      })
    }
    shouldAdd &&
      setCartItems([
        ...cartItems,
        { id: item.id, name: item.name, price: item.price, quantity: quantity },
      ])
  }

  function removeItem(itemId) {}

  function clear() {}

  function isInCart(id) {}

  return (
    <CartContext.Provider
      value={{ cartItems, addItem, removeItem, clear, isInCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartContextProvider }
