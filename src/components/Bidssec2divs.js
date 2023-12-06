import React from 'react'

export default function Bidssec2divs(props) {
    return (
        <div className="bids-section2-divs">
            <div className={props.classname}>
                <img src={props.image} alt="Artwork" />
            </div>
            <div>
                <h1 className='bold'>{props.heading}</h1>
                <p>{props.text}</p>
            </div>
        </div>
    )
}
