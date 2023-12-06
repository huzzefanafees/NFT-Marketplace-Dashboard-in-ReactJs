import React from 'react';
import Button from '../components/button';

export default function homesection1divleft(props) {
    return (
        <>
            <h1 className='bold'>{props.heading}</h1>
            <p>{props.text}</p>
            <div className="buttons">
                <Button className="button button1" name="Explore" />
                <Button className="button button2" name="Create" />
            </div>
        </>
    )
}
