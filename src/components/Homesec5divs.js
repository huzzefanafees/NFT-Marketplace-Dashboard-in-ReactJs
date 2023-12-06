import React from 'react'

export default function Homesec5divs(props) {
    const handleClose = (e) => {
        const target = e.target;
        const divToRemove = target.closest('.sec5-main');
        divToRemove.remove();
    };
    return (
        <div className="sec5-main">
            <div className="sec5-main-divs sec5-display">
                <input type="checkbox" name="" id="" />
                <div className="sec5-inner-divs sec5-display">
                    <img src={props.image1} alt="NFT" />
                    <div>
                        <h3 className='bold'>{props.heading}</h3>
                        <p>{props.text}</p>
                    </div>
                </div>
            </div>
            <div className="sec5-display">
                <p>{props.bid1}</p>
            </div>
            <div className="sec5-display">
                <p>{props.bid2}</p>
            </div>
            <div className="sec5-inner-divs sec5-display">
                <img src={props.image2} alt="avatar" />
                <p>{props.bid3}</p>
            </div>
            <div className="sec5-display close-hours">
                <p>{props.time}</p>
                <button className="closee" onClick={handleClose}>
                    <span className="material-symbols-sharp">close</span>
                </button>
            </div>
        </div>
    )
}
