import React from 'react';

export const freeShipment = () => {
    return(<div style={{
        background: 'black',
        padding: 1,
        borderTop: '1px solid white',
    }}>
        <p className='center' style={{ color: 'white',lineHeight: 3, wordSpacing: 5, letterSpacing: 5}}>Free Gifts & Free Shipment On &nbsp; <span style={{padding: 10, background: 'transparent', border: '1px solid #f0458cee', color: 'white'}}> &nbsp; &#8358; 40 &nbsp;</span></p>
    </div>)
}