import React from 'react';
import './NavBar.css';
import '../CartWidget/CartWidget';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
    return(
        <div className='navbar'>
            <header>
                <div className='navbar-logo logo'>
                    <h1>GREEN HOUSE</h1>
                </div>
                <div className='navbar-menu'>
                    <ul>
                        <li><a href='https://www.coderhouse.com' target='_blank' rel='noreferrer'>Inicio</a></li>
                        <li><a href='https://www.coderhouse.com' target='_blank' rel='noreferrer'>Productos</a></li>
                        <li><a href='https://www.coderhouse.com' target='_blank' rel='noreferrer'>Tips y Cuidados</a></li>
                        <li><a href='https://www.coderhouse.com' target='_blank' rel='noreferrer'>Envíos</a></li>
                        <li><a href='https://www.coderhouse.com' target='_blank' rel='noreferrer'>Quiénes Somos</a></li>
                        <li><a href='https://www.coderhouse.com' target='_blank' rel='noreferrer'>Contactanos</a></li>
                    </ul>
                </div>
                <div className='cart-icon'>
                    <CartWidget />
                </div>
            </header>
        </div>
    );
}

export default NavBar;