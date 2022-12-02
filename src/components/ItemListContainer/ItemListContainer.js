import React from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'

function ItemListContainer({ greeting }) {
  return (
    <div className="item-list-container" style={{ padding: '2rem 4rem' }}>
      <h1>{greeting}</h1>
      <ItemList />
    </div>
  )
}

export default ItemListContainer
