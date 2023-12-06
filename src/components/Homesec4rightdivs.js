import React from 'react';
import Button from './button';

export default function Homesec4rightdivs(props) {
    return (
        <div className={props.classname}>
            <div className="sec4-right-pic-text">
                <img src={props.image} alt="sec1-avatar" />
                <div>
                    <h3 className='justbold'>{props.heading}</h3>
                    <p>{props.text}</p>
                </div>
            </div>
            <Button className='button follow' name='Follow' />
        </div>
    )
}
