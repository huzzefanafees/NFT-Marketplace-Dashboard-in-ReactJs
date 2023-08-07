import './dashboard.css';
import '../combined.css';
import React from 'react';
import Homesection1divleft from '../../components/homesection1divleft';
import Homesection1divright from '../../components/homesection1divright';
import Topforall from '../../components/topforall';
import Homesec3leftdivs from '../../components/homesec3leftdivs';
import artwork1 from "../../data/Artwork-light1.svg";
import artwork2 from "../../data/Artwork-light2.svg";
import nft2 from "../../data/NFT (2).png";
import nft3 from "../../data/NFT (3).png";
import nft4 from "../../data/NFT (4).png";
import nft5 from "../../data/NFT (5).png";
import avatar from "../../data/avatar.png";
import Chartone from '../../components/Chartone';
import Charttwo from '../../components/Charttwo';
import Homesec4leftdivs from '../../components/Homesec4leftdivs';
import Homesec4rightdivs from '../../components/Homesec4rightdivs';
import Homesec5divs from '../../components/Homesec5divs';

export default function Dashboard() {
    return (
        <div className="content dashboard">
            <div className="section1">
                <div className="sec1-left">
                    <Homesection1divleft />
                </div>
                <div className="sec1-right">
                    <Homesection1divright />
                </div>
            </div>

            <div className="section2">
                <Topforall />
            </div>

            <div className="section3">
                <div className="sec3-left">
                    <h2 className='bold'>Trending bids</h2>
                    <div className="sec3-left-content">
                        <Homesec3leftdivs classname="artwork1" image={artwork1} number="+168.001%" />
                        <Homesec3leftdivs classname="artwork2" image={artwork2} number="-168.001%" />
                        <Homesec3leftdivs classname="artwork1" image={artwork1} number="+168.001%" />
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
                        <Homesec4leftdivs />
                        <Homesec4leftdivs />
                        <Homesec4leftdivs />
                        <Homesec4leftdivs />
                    </div>
                </div>
                <div className="sec4-right">
                    <h2 className='bold'>Top Creators</h2>
                    <div className="sec4-right-inner-divs">
                        <Homesec4rightdivs classname='sec4-right-divs' />
                        <Homesec4rightdivs classname='sec4-right-divs' />
                        <Homesec4rightdivs classname='sec4-right-divs' />
                        <Homesec4rightdivs classname='sec4-right-divs' />
                        <Homesec4rightdivs classname='sec4-right-divs display-none' />
                        <Homesec4rightdivs classname='sec4-right-divs display-none' />
                        <Homesec4rightdivs classname='sec4-right-divs display-none' />
                        <Homesec4rightdivs classname='sec4-right-divs display-none' />
                    </div>
                </div>
            </div>

            <div className="section5">
                <h2 className='bold'>Active Bids</h2>
                <div className="sec5-container">
                    <div className="sec5-top">
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
                        <div className="sec5-top-div2 sec5-display">
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

