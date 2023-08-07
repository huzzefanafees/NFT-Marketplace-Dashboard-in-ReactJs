import React from 'react'

export default function Homesec5divs(props) {
    return (
        <div className="sec5-main">
            <div className="sec5-main-divs sec5-display">
                <input type="checkbox" name="" id="" />
                <div className="sec5-inner-divs sec5-display">
                    <img src={props.image1} alt="NFT" />
                    <div>
                        <h3 className='bold'>{props.heading}</h3>
                        <p>John Abraham</p>
                    </div>
                </div>
            </div>
            <div className="sec5-display">
                <p>0.0025 ETH</p>
            </div>
            <div className="sec5-display">
                <p>0.0025 ETH</p>
            </div>
            <div className="sec5-inner-divs sec5-display">
                <img src={props.image2} alt="avatar" />
                <p>0.0025 ETH</p>
            </div>
            <div className="sec5-display close-hours">
                <p>2 hours 1 min 30s</p>
                <button className="closee">
                    <span className="material-symbols-sharp">close</span>
                </button>
            </div>
        </div>
    )
}
