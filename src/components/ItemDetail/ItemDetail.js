import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import {Link} from 'react-router-dom';

function ItemDetail({ item }) {
  const [itemCount, setItemCount] = useState(0);

  function handleRemoveButton() {
    itemCount > 0 ? setItemCount(itemCount-1) : setItemCount(itemCount);
  }

  function handleAddButton() {
    itemCount < item.stock ? setItemCount(itemCount+1) : setItemCount(itemCount);
  }

  return (
    <div className="item-detail">
      <div className="img-div">
        <img src={item.picture} alt={`${item.name}`} />
      </div>
      <div className='desc-div'>
        <div className='item-info'>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <h3 className="price">{item.price}</h3>
        </div>
        <div className='add-cart-div'>
          <div className='item-count-div'>
            <ItemCount itemCount={itemCount} onRemove={handleRemoveButton} onAdd={handleAddButton}/>
          </div>
          <div className='add-button'>
            <Link to='/cart'>
              <button>Agregar al carrito</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail