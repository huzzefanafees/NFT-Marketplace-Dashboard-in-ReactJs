import './dashboard.css';
import '../combined.css';
import React from 'react';
import Homesection1divleft from '../../components/homesection1divleft';
import Homesection1divright from '../../components/homesection1divright';
import Topforall from '../../components/topforall';
import Homesec3left from '../../components/homesec3left';
import Chartone from '../../components/Chartone';
import Charttwo from '../../components/Charttwo';
import Homesec4left from '../../components/Homesec4left';
import Homesec4right from '../../components/Homesec4right';
import Homesec5top from '../../components/Homesec5top';
import Homesec5 from '../../components/Homesec5';

export default function Dashboard() {
    return (
        <div className="content dashboard">
            <div className="section1">
                <div className="sec1-left">
                    <Homesection1divleft heading='Discover, Collect, Sell and Create your NFT' text='Digital marketplace for crypto collectibles and non fungable tokens' />
                </div>
                <div className="sec1-right">
                    <Homesection1divright fheading='John Abraham' sheading='Birghten LQ' para1='Auction time' currentbid='Current Bid' bid='0.05 ETH' time='3h 1m 50s' bidagain='0.15 ETH' />
                </div>
            </div>

            <div className="section2">
                <Topforall />
            </div>

            <div className="section3">
                <div className="sec3-left">
                    <h2 className='bold'>Trending bids</h2>
                    <div className="sec3-left-content">
                        <Homesec3left />
                    </div>
                </div>
                <div className="sec3-middle">
                    <h2 className='bold'>ETH Price</h2>
                    <Chartone />
                </div>
                <div className="sec3-right">
                    <h2 className='bold'>Statistics</h2>
                    <div className="sec3-right-content">
                        <Charttwo />
                        <div className="label-container">
                            <div className="label">
                                <div className="pointer1" />
                                <p>Artwork Sold</p>
                            </div>
                            <div className="label">
                                <div className="pointer2" />
                                <p>Artwork CanCel</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section4">
                <div className="sec4-left">
                    <div className="sec4-left-top">
                        <h2 className="black bold">Recent Activity</h2>
                        <p className="primary">See more</p>
                    </div>
                    <div className="sec4-left-inner-divs">
                        <Homesec4left />
                    </div>
                </div>
                <div className="sec4-right">
                    <h2 className='bold'>Top Creators</h2>
                    <div className="sec4-right-inner-divs">
                        <Homesec4right />
                    </div>
                </div>
            </div>

            <div className="section5">
                <h2 className='bold'>Active Bids</h2>
                <div className="sec5-container">
                    <div className="sec5-top">
                        <Homesec5top classname="sec5-top-div2 sec5-display" />
                    </div>
                    <Homesec5 />
                </div>
            </div>
        </div>
    )
}

