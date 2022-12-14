import React, { useEffect, useState } from 'react'
import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import items from '../../data';
import { useParams } from 'react-router-dom';
import ItemLoading from '../ItemLoading/ItemLoading';

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState({});

  const itemPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(items.filter(item => item.id === parseInt(id)));
    }, 2000);
  });

  useEffect(() => {
    itemPromise.then(res => setItem(res[0]))
    // 
  });

  return (
    Object.keys(item).length === 0 ?
    <div className='item-list-loading'>
      <ItemLoading /> 
    </div> :
    <div className="item-detail-container">
      <h1>Aquí tenés toda la info que necesitas</h1>
      <ItemDetail item={item}/>
    </div>
  )
}

export default ItemDetailContainer
