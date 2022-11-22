import React from 'react';
import './ItemListContainer.css';

function ItemListContainer(props) {
    return (
        <div className="item-list-container" style={{padding: '2rem 4rem'}}>
            <h1>{props.greeting}</h1>
        </div>
    );
}

export default ItemListContainer;