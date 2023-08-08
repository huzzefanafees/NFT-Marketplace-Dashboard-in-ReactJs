import React from 'react'

export default function profilecard(props) {
    return (
        <div className="card">
            <div>
                <img src={props.image1} alt="NFT" />
            </div>
            <div className="profile-bought-bottom">
                <h2 className='bold'>{props.heading}</h2>
                <img src={props.image2} alt="Avatar" />
            </div>
        </div>
    )
}
