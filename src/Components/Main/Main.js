import React, { useEffect, useState } from 'react';
import Band from '../Band/Band';
import Cart from '../Cart/Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import './Main.css';

const Main = () => {
    const [bands, setBands] = useState([]);  /* useStae for bands */
    const [cart, setCart] = useState([]);    /* useState for cart */

    useEffect(() => {                  /* Loading data */
        fetch('./bands.JSON')
            .then(res => res.json())
            .then(data => setBands(data))
    }, [])

    const handleAddToCart = product => {
        // set cart to item cart 
        let item_cart = [...cart];

        // removing duplicates item
        item_cart = item_cart.filter((item) => item.id !== product.id);

        // push to top of the cart array
        item_cart.unshift(product);
        setCart(item_cart);
    }

    // fav icon in buy button
    const element = <FontAwesomeIcon icon={faShoppingBag} />

    return (
        <div className='main_container'>
            <div className="bands_container">    {/* maping band container */}
                {
                    bands.map(band =>
                        <Band
                            key={band.id}
                            handleAddToCart={handleAddToCart}
                            band={band}
                        >
                        </Band>)
                }
            </div>
            <div className="cart_container">     {/* cart components */}
                <Cart cart={cart}></Cart>
                <button className='cart_btn'>{element} Buy Now</button>
            </div>
        </div>
    );
};

export default Main;