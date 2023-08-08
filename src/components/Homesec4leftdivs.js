import React from 'react';

export default function Homesec4leftdivs(props) {
    return (
        <div className="sec4-left-divs">
            <img src={props.image} alt="sec1-avatar" />
            <div>
                <h3 className='justbold'>{props.heading}</h3>
                <p>{props.text}</p>
            </div>
            <p>{props.time}</p>
        </div>
    )
}
