import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'
import './ItemList.css'

const initialItems = [
  {
    id: 1,
    picture:
      'https://www.elmueble.com/medio/2019/03/25/monstera_f97f4746_800x800.jpg',
    name: 'planta1',
    price: '$50',
    stock: 5,
  },
  {
    id: 2,
    picture:
      'https://www.elmueble.com/medio/2019/03/25/monstera_f97f4746_800x800.jpg',
    name: 'planta2',
    price: '$60',
    stock: 10,
  },
  {
    id: 3,
    picture:
      'https://www.elmueble.com/medio/2019/03/25/monstera_f97f4746_800x800.jpg',
    name: 'planta3',
    price: '$70',
    stock: 15,
  },
  {
    id: 4,
    picture:
      'https://www.elmueble.com/medio/2019/03/25/monstera_f97f4746_800x800.jpg',
    name: 'planta4',
    price: '$80',
    stock: 20,
  },
  {
    id: 5,
    picture:
      'https://www.elmueble.com/medio/2019/03/25/monstera_f97f4746_800x800.jpg',
    name: 'planta5',
    price: '$90',
    stock: 25,
  },
  {
    id: 6,
    picture:
      'https://www.elmueble.com/medio/2019/03/25/monstera_f97f4746_800x800.jpg',
    name: 'planta6',
    price: '$100',
    stock: 30,
  },
  {
    id: 7,
    picture:
      'https://www.elmueble.com/medio/2019/03/25/monstera_f97f4746_800x800.jpg',
    name: 'planta7',
    price: '$110',
    stock: 35,
  },
  {
    id: 8,
    picture:
      'https://www.elmueble.com/medio/2019/03/25/monstera_f97f4746_800x800.jpg',
    name: 'planta8',
    price: '$120',
    stock: 40,
  },
  {
    id: 9,
    picture:
      'https://www.elmueble.com/medio/2019/03/25/monstera_f97f4746_800x800.jpg',
    name: 'planta9',
    price: '$130',
    stock: 45,
  },
  {
    id: 10,
    picture:
      'https://www.elmueble.com/medio/2019/03/25/monstera_f97f4746_800x800.jpg',
    name: 'planta10',
    price: '$140',
    stock: 50,
  },
]

function ItemList() {

  const [items, setItems] = useState([]);

  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(initialItems)
    }, 2000)
  })

  useEffect(() => {
    promise.then(res => setItems(res));
  });

  return (
    <div className="item-list">
      {items.map(item => <Item key={item.id} item={item}></Item>)}
    </div>
  )
}

export default ItemList
