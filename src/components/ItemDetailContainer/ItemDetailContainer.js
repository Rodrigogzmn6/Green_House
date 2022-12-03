import React, { useEffect, useState } from 'react'
import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'

const selectedItem = {
  id: 1,
  picture:
    'https://www.elmueble.com/medio/2021/09/01/ficus-litata-etsy_21b59c87_794x794.jpg',
  name: 'Ficus',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  price: '$50',
  stock: 5,
};

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