import React from 'react'

export default function topforpages(props) {
    return (
        <div className="bids-section1 top-for-all">
            <div>
                <h2 className='bolder'>{props.pagename}</h2>
            </div>
            <div className="welcome-bids welcome-all">
                <p>Welcome {props.pagename} page</p>
                <div className="home-bids-link home-all-link">
                    <a href="/" className="primary">Home</a>
                    <p>&gt;</p>
                    <a href="#bids" className="primary">{props.page}</a>
                </div>
            </div>
        </div>
    )
}
