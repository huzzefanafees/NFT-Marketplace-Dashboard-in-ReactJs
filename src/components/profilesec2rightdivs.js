import React from 'react';
import Button from './button';
import image from '../data/sec1-avatar.png';

export default function profilesec2rightdivs() {
    return (
        <div class="sec4-right-divs">
            <div class="sec4-right-pic-text">
                <img src={image} alt="sec1-avatar" />
                <div>
                    <h3 className='justbold'>Papaya</h3>
                    <p>60 Items</p>
                </div>
            </div>
            <Button className='button unfollow' name='Unfollow' />
        </div>
    )
}
