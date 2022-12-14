import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './ItemList.css';
import items from '../../data';
import ItemLoading from '../ItemLoading/ItemLoading';

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
    itemsList.length === 0 ?
    <div className='item-list-loading'>
      <ItemLoading /> 
    </div>:
    <div className="item-list">
      {itemsList.map(item => <Item key={item.id} item={item}></Item>)}
    </div>
  )
}

export default ItemList
