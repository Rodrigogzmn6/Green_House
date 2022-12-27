import React from 'react'
import { useParams } from 'react-router-dom'
import './BuyConfirmation.css'

function BuyConfirmation() {
  const { id } = useParams()
  return (
    <div className="buy-confirmation">
      <h1>Tu pedido ha sido confirmado</h1>
      <h2>ID de pedido: {id}</h2>
    </div>
  )
}

export default BuyConfirmation
