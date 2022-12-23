import React from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

function ItemListContainer({ greeting }) {
  const { id } = useParams()
  return (
    <div className="item-list-container" style={{ padding: '2rem 4rem' }}>
      <h1>{greeting}</h1>
      <ItemList filter={id} />
    </div>
  )
}

export default ItemListContainer
