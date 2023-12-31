import React from 'react';

export default function homesec3leftdivs(props) {
    return (
        <div className="sec3-left-divs">
            <div className="sec3-left-inner-divs">
                <div className={props.classname}>
                    <img src={props.image} alt="Artwork" />
                </div>
                <div>
                    <h1 className='bold'>{props.heading}</h1>
                    <p>{props.text}</p>
                </div>
            </div>
            <p className={props.class2}>{props.number}</p>
        </div>

    )
}
