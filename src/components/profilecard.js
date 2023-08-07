import React from 'react'
import nft from '../data/NFT (1).png';
import avatar from '../data/sec1-avatar.png';

export default function profilecard() {
    return (
        <div className="card">
            <div>
                <img src={nft} alt="NFT" />
            </div>
            <div className="profile-bought-bottom">
                <h2 className='bold'>Liquid Wave</h2>
                <img src={avatar} alt="Avatar" />
            </div>
        </div>
    )
}
