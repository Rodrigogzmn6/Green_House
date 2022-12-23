import React from 'react'
import { Link } from 'react-router-dom'
import './BuyerForm.css'

function BuyerForm() {
  return (
    <div className="buyer-form">
      <form>
        <div className="form-field">
          <label for="name">Full Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-field">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-field">
          <label for="direccion">Direccion</label>
          <input type="text" id="direccion" name="direccion" required />
        </div>
        <div className="form-field">
          <label for="phone">Telefono</label>
          <input type="tel" id="phone" name="phone" required />
        </div>
        <div className="form-submit">
          <Link to="/" className="boton-finalizar-compra">
            <input type="submit" value="Finalizar Compra" />
          </Link>
        </div>
      </form>
    </div>
  )
}

export default BuyerForm
