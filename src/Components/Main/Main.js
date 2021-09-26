import React, { useEffect, useState } from 'react';
import Band from '../Band/Band';
import Cart from '../Cart/Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import './Main.css';

const Main = () => {
    const [bands, setBands] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./bands.JSON')
            .then(res => res.json())
            .then(data => setBands(data))
    }, [])

    const handleAddToCart = product => {
        /*  const newCart = [...cart, product];
         setCart(newCart); */
        if (cart.length === 0) {
            const newCart = [product];
            setCart(newCart);
        } else {
            for (const obj of cart) {
                if (obj.name !== product.name) {
                    const newCart = [...cart, product];
                    setCart(newCart);
                } else {
                    return;
                }
            }
        }
    }
    const element = <FontAwesomeIcon icon={faShoppingBag} />


    return (
        <div className='main_container'>
            <div className="bands_container">
                {
                    bands.map(band =>
                        <Band
                            handleAddToCart={handleAddToCart}
                            band={band}
                        >
                        </Band>)
                }
            </div>
            <div className="cart_container">
                <Cart cart={cart}></Cart>
                <button className='cart_btn'>{element} Buy Now</button>
            </div>
        </div>
    );
};

export default Main;