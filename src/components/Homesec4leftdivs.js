import React from 'react';
import image from '../data/sec1-avatar.png';

export default function Homesec4leftdivs() {
    return (
        <div className="sec4-left-divs">
            <img src={image} alt="sec1-avatar" />
            <div>
                <h3 className='justbold'>Papaya</h3>
                <p>Purchase by you for 0.05 ETH</p>
            </div>
            <p>12 mins ago</p>
        </div>

    )
}
