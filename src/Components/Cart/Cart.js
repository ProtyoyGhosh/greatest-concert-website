import React from 'react';

// getting data with props
const Cart = (props) => {
    const { cart } = props;
    let total = 0;   /* setting initial total */
    let myName = '';  /* setting initial myName */

    // loop in the cart
    for (const product of cart) {
        total = total + product.ticket_price;
        myName = myName + product.name;
    }
    return (
        <div className='cart'>
            <h3>Bands added: {props.cart.length}</h3>    {/* displaying added item */}
            <ul style={{ fontWeight: '700' }}>Band name:{
                cart.map((item) => (
                    <li style={{ fontWeight: '600' }} key={item.id}>{item.name}</li>  /* displaying names */
                ))
            }
            </ul>
            <p><small style={{ marginLeft: '34px', color: 'red', fontWeight: '600' }}>Total cost: ${total}</small></p>       {/* displaying total cost */}
        </div>
    );
};

export default Cart;