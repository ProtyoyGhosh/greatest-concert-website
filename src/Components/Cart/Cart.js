import React from 'react';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    let myName = '';
    for (const product of cart) {
        total = total + product.ticket_price;
        myName = myName + product.name;
        // myName = myName === '' ? myName + product.name : ',';
    }
    return (
        <div>
            <h3>Bands added: {props.cart.length}</h3>
            <div>Band name:{myName}</div>
            <p><small>Total cost: ${total}</small></p>
        </div>
    );
};

export default Cart;