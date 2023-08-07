import React from 'react';
import './bids.css';
import '../combined.css';
import nft2 from "../../data/NFT (2).png";
import nft3 from "../../data/NFT (3).png";
import nft4 from "../../data/NFT (4).png";
import nft5 from "../../data/NFT (5).png";
import avatar from "../../data/avatar.png";
import artwork from "../../data/Artwork-light2.svg";
import Homesec5divs from '../../components/Homesec5divs';
import Topforpages from '../../components/topforpages';
import Bidssec2divs from '../../components/Bidssec2divs';

export default function Bids() {
    return (
        <div className="content">
            <Topforpages pagename='Bids' page='Bids' />

            <div className="bids-section2">
                <Bidssec2divs image={artwork} classname='artwork' />
                <Bidssec2divs image={artwork} classname='artwork artwork2' />
                <Bidssec2divs image={artwork} classname='artwork artwork3' />
                <Bidssec2divs image={artwork} classname='artwork artwork4' />
            </div>

            <div className="section5 bids-sec3">
                <div className="sec5-container">
                    <div class="bids-section3">
                        <h2 className='bold'>Active Bids</h2>
                        <button class="button bid-place">Place a Bid</button>
                    </div>
                    <div className="sec5-top bids-sec3-top">
                        <div className="sec5-top-div1 sec5-display">
                            <input type="checkbox" />
                            <h3 className='bold'>Item List</h3>
                        </div>
                        <div>
                            <h3 className='bold'>Open Price</h3>
                        </div>
                        <div>
                            <h3 className='bold'>Your Offer</h3>
                        </div>
                        <div>
                            <h3 className='bold'>Recent Offer</h3>
                        </div>
                        <div className="bid-sec3-top-div2">
                            <h3 className='bold'>Time left</h3>
                            <h3 className="action bold">Action</h3>
                        </div>
                    </div>
                    <Homesec5divs image1={nft2} heading='Cute Cube Cool' image2={avatar} />
                    <Homesec5divs image1={nft3} heading='Liquid Wave' image2={avatar} />
                    <Homesec5divs image1={nft2} heading='Cute Cube Cool' image2={avatar} />
                    <Homesec5divs image1={nft4} heading='Liquid Wave' image2={avatar} />
                    <Homesec5divs image1={nft5} heading='Liquid Wave' image2={avatar} />
                </div>
            </div>
        </div>
    )
}
