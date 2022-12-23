import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'
import './ItemList.css'
import ItemLoading from '../ItemLoading/ItemLoading'
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from 'firebase/firestore'

function ItemList({ filter }) {
  const [itemsList, setItemsList] = useState([])

  useEffect(() => {
    const db = getFirestore()
    const itemsCollection = collection(db, 'Items')
    if (filter !== undefined) {
      const q = query(itemsCollection, where('category', '==', filter))
      getDocs(q).then((snapshot) => {
        const items = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        setItemsList(items)
      })
    } else {
      getDocs(itemsCollection).then((snapshot) => {
        const items = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        setItemsList(items)
      })
    }
  }, [filter])

  return itemsList.length === 0 ? (
    <div className="item-list-loading">
      <ItemLoading />
    </div>
  ) : (
    <div className="item-list">
      {itemsList.map((item) => (
        <Item key={item.id} item={item}></Item>
      ))}
    </div>
  )
}

export default ItemList
