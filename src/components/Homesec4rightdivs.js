import React from 'react';
import image from '../data/sec1-avatar.png';

export default function Homesec4rightdivs(props) {
    return (
        <div className={props.classname}>
            <div className="sec4-right-pic-text">
                <img src={image} alt="sec1-avatar" />
                <div>
                    <h3 className='justbold'>Papaya</h3>
                    <p>60 Items</p>
                </div>
            </div>
            <button className="button follow">Follow</button>
        </div>
    )
}
