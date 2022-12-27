import React, { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { useNavigate } from 'react-router-dom'
import './BuyerForm.css'
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from 'firebase/firestore'

function BuyerForm({ total }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
  })
  const navigate = useNavigate()
  const { cartItems, clear } = useContext(CartContext)
  const [buttonDisabled, setButtonDisabled] = useState(false)

  function onChangeHandler(ev) {
    const { name, value } = ev.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  function onSubmitHandler(ev) {
    ev.preventDefault()
    setButtonDisabled(true)
    let orderObject = createOrderObject()
    const db = getFirestore()
    const ordersCollection = collection(db, 'Orders')

    addDoc(ordersCollection, orderObject).then((snapshot) => {
      setForm({
        name: '',
        email: '',
        addres: '',
        phone: '',
      })
      navigate(`/confirmation/${snapshot.id}`)
      clear()
    })
  }

  function createOrderObject() {
    return {
      buyer: form,
      items: cartItems,
      total: total,
      date: serverTimestamp(),
    }
  }

  return (
    <div className="buyer-form">
      <form onSubmit={onSubmitHandler}>
        <div className="form-field">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            onChange={onChangeHandler}
          />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={onChangeHandler}
          />
        </div>
        <div className="form-field">
          <label htmlFor="address">Direccion</label>
          <input
            type="text"
            id="address"
            name="address"
            required
            onChange={onChangeHandler}
          />
        </div>
        <div className="form-field">
          <label htmlFor="phone">Telefono</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            onChange={onChangeHandler}
          />
        </div>
        <div className="form-submit">
          <button disabled={buttonDisabled}>Finalizar Compra</button>
        </div>
      </form>
    </div>
  )
}

export default BuyerForm
