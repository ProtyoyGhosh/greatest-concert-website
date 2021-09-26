import React from 'react';
import './Band.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Band = (props) => {
    const { name, img, lead_singer, country, budget, ticket_price, members } = props.band;
    const regular_icon = <FontAwesomeIcon icon={faShoppingCart} />
    return (


        <div className='bands_detail'>
            <div className='inside_band'>
                <img style={{ width: '200px', height: '150px' }} src={img} alt="" />
                <h2 style={{ color: 'blue', lineHeight: '22px' }}>Name:{name}</h2>
                <h5>Band Members: {members}</h5>
                <h5>Lead Singer:{lead_singer}</h5>
                <h5>Country:{country}</h5>
                <h5>Budget: {budget} USD</h5>
                <p style={{ color: 'red' }}>Ticket Price: ${ticket_price}</p>
                <button onClick={() => props.handleAddToCart(props.band)} className='regular_btn'>{regular_icon} Add to cart</button>
            </div>
        </div>


    );
};

export default Band;