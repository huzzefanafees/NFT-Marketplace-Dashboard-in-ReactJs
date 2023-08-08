import React from 'react';
import Button from './button';

export default function card(props) {
    return (
        <div className="card">
        <img src={props.nftimage} alt="NFT" />
        <h2 className='bold'>{props.heading}</h2>
        <div className="sec1-detail-middle">
          <p>{props.timeheading}</p>
          <p>{props.Bidheading}</p>
        </div>
        <p className="primary text-right">{props.bid}</p>
        <div className="sec1-detail-bottom">
          <p className="iris">{props.time}</p>
          <p className="iris">{props.bidagain}</p>
        </div>
        <div className="sec2-button cards-all-button">
          <Button className="button button-card" name="Place a Bid" />
        </div>
      </div>
      
    )
}
