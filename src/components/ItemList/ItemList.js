import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'
import './ItemList.css'
import items from '../../data';

function ItemList({ filters }) {
  const [itemsList, setItemsList] = useState([]);

  const promise = new Promise((resolve) => {
    setTimeout(() => {
      filters !== undefined ?
      resolve(items.filter((item) => item.category.includes(filters))) :
      resolve(items);
    }, 2000)
  })

  useEffect(() => {
    promise.then(res => setItemsList(res));
  });

  return (
    <div className="item-list">
      {itemsList.map(item => <Item key={item.id} item={item}></Item>)}
    </div>
  )
}

export default ItemList
