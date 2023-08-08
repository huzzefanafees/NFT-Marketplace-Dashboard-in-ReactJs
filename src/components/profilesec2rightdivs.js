import React from 'react';
import Button from './button';

export default function profilesec2rightdivs(props) {
    return (
        <div class="sec4-right-divs">
            <div class="sec4-right-pic-text">
                <img src={props.image} alt="sec1-avatar" />
                <div>
                    <h3 className='justbold'>{props.heading}</h3>
                    <p>{props.text}</p>
                </div>
            </div>
            <Button className='button unfollow' name='Unfollow' />
        </div>
    )
}
