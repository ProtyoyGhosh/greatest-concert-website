import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            {/* header ui */}
            <div className='heading'>
                <h1>Join The <span className='span'>Greatest</span> Concert On <span className='span'>Earth !!</span></h1>
                <h2>Budget of this concert is 200 Million</h2>
                <h3>Total 12 performing bands</h3>
                <h5 style={{ color: 'red' }}>Book your seat soon</h5>
            </div>
        </header>
    );
};

export default Header;