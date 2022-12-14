import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';

function ItemDetail({ item }) {
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
            <ItemCount stock={item.stock}/>
          </div>
          <div className='add-button'>
            <button>Agregar al carrito</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail