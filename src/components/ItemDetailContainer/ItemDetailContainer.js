import React, { useEffect, useState } from 'react'
import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import ItemLoading from '../ItemLoading/ItemLoading'
import { getFirestore, doc, getDoc } from 'firebase/firestore'

function ItemDetailContainer() {
  const { id } = useParams()
  const [item, setItem] = useState({})

  useEffect(() => {
    const db = getFirestore()
    const itemRef = doc(db, 'Items', id)
    getDoc(itemRef).then((snapshot) => {
      setItem({ id: snapshot.id, ...snapshot.data() })
    })
  }, [id])

  return Object.keys(item).length === 0 ? (
    <div className="item-list-loading">
      <ItemLoading />
    </div>
  ) : (
    <div className="item-detail-container">
      <h1>Aquí tenés toda la info que necesitas</h1>
      <ItemDetail item={item} />
    </div>
  )
}

export default ItemDetailContainer
