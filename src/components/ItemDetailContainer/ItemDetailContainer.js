import React, { useEffect, useState } from 'react'
import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import items from '../../data';

const selectedItem = items[3];

function ItemDetailContainer() {
  const [item, setItem] = useState({});

  const itemPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(selectedItem);
    }, 2000);
  });

  useEffect(() => {
    itemPromise.then(res => setItem(res))
  });

  return (
    <div className="item-detail-container">
      <h1>Aquí tenés toda la info que necesitas</h1>
      <ItemDetail item={item}/>
    </div>
  )
}

export default ItemDetailContainer
