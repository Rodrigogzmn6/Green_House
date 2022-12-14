import React, { useState } from 'react';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import './ItemCount.css'

function ItemCount({ stock }) {
  const [itemCount, setItemCount] = useState(0);

  function handleRemoveButton() {
    itemCount > 0 ? setItemCount(itemCount-1) : setItemCount(itemCount);
  }

  function handleAddButton() {
    itemCount < stock ? setItemCount(itemCount+1) : setItemCount(itemCount);
  }

  return(
    <div className='item-count'>
      <RemoveRoundedIcon className='item-count-button' onClick={() => handleRemoveButton()}/>
      <p>{itemCount}</p>
      <AddRoundedIcon className='item-count-button' onClick={() => handleAddButton()}/>
    </div>
  );
}

export default ItemCount;