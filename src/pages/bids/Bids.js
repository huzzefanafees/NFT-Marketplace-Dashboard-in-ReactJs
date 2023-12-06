import React from 'react';
import './bids.css';
import '../combined.css';
import Topforpages from '../../components/topforpages';
import Bidssec2 from '../../components/Bidssec2';
import Homesec5top from '../../components/Homesec5top';
import Homesec5 from '../../components/Homesec5';

export default function Bids() {
    return (
        <div className="content">
            <Topforpages pagename='Bids' page='Bids' pageref='bids' />

            <div className="bids-section2">
                <Bidssec2 />
            </div>

            <div className="section5 bids-sec3">
                <div className="sec5-container">
                    <div class="bids-section3">
                        <h2 className='bold'>Active Bids</h2>
                        <button class="button bid-place">Place a Bid</button>
                    </div>
                    <div className="sec5-top bids-sec3-top">
                        <Homesec5top classname="bid-sec3-top-div2" />
                    </div>
                    <Homesec5 />
                </div>
            </div>
        </div>
    )
}
