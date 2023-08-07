import React from 'react';
import Button from './button';
import nftimage from '../data/NFT.png';
import avatarimage from '../data/sec1-avatar.png';
import onlineimage from '../data/online.svg';

export default function homesection1divright() {
    return (
        <>
            <div className="sec1-right-nft">
                <img src={nftimage} alt="" />
            </div>
            <div className="sec1-right-nft-detail">
                <div className="sec1-detail-top">
                    <img src={avatarimage} alt="sec1-avatar" />
                    <h3 className='bold'>John Abraham</h3>
                    <img src={onlineimage} alt="Online" />
                </div>
                <h2 className='bold'>Birghten LQ</h2>
                <div className="sec1-detail-middle">
                    <p>Auction time</p>
                    <p>
                        Current Bid <span style={{ color: "white" }}>:</span>
                        <span className="primary">0.05 ETH</span>
                    </p>
                </div>
                <div className="sec1-detail-bottom">
                    <p className="iris">3h 1m 50s</p>
                    <p className="iris">0.15 ETH</p>
                </div>
                <div className="buttons">
                    <Button className="button button1" name="Explore" />
                    <Button className="button button2" name="Create" />
                </div>
            </div>
        </>
    )
}
