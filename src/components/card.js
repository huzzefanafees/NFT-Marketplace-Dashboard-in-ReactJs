import React from 'react';
import Button from './button';
import nftimage from '../data/NFT (1).png';

export default function card() {
    return (
        <div className="card">
        <img src={nftimage} alt="NFT" />
        <h2 className='bold'>Liquid Wave</h2>
        <div className="sec1-detail-middle">
          <p>Auction time</p>
          <p>Current Bid</p>
        </div>
        <p className="primary text-right">0.05 ETH</p>
        <div className="sec1-detail-bottom">
          <p className="iris">3h 1m 50s</p>
          <p className="iris">0.15 ETH</p>
        </div>
        <div className="sec2-button cards-all-button">
          <Button className="button button-card" name="Place a Bid" />
        </div>
      </div>
      
    )
}
