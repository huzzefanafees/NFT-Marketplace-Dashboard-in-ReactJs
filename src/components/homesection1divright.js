import React from 'react';
import Button from './button';
import nftimage from '../data/NFT.png';
import avatarimage from '../data/sec1-avatar.png';
import onlineimage from '../data/online.svg';

export default function homesection1divright(props) {
    return (
        <>
            <div className="sec1-right-nft">
                <img src={nftimage} alt="" />
            </div>
            <div className="sec1-right-nft-detail">
                <div className="sec1-detail-top">
                    <img src={avatarimage} alt="sec1-avatar" />
                    <h3 className='bold'>{props.fheading}</h3>
                    <img src={onlineimage} alt="Online" />
                </div>
                <h2 className='bold'>{props.sheading}</h2>
                <div className="sec1-detail-middle">
                    <p>{props.para1}</p>
                    <p>
                        {props.currentbid} <span style={{ color: "white" }}>:</span>
                        <span className="primary">{props.bid}</span>
                    </p>
                </div>
                <div className="sec1-detail-bottom">
                    <p className="iris">{props.time}</p>
                    <p className="iris">{props.bidagain}</p>
                </div>
                <div className="buttons">
                    <Button className="button button1" name="Explore" />
                    <Button className="button button2" name="Create" />
                </div>
            </div>
        </>
    )
}
