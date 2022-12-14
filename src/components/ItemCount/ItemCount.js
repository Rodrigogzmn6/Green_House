import React, { useState } from 'react';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import './ItemCount.css'

function ItemCount({ itemCount, onRemove, onAdd }) {

  return(
    <div className='item-count'>
      <RemoveRoundedIcon className='item-count-button' onClick={onRemove}/>
      <p>{itemCount}</p>
      <AddRoundedIcon className='item-count-button' onClick={onAdd}/>
    </div>
  );
}

export default ItemCount;