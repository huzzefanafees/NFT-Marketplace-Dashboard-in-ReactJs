import React from 'react'

export default function Homesec5top(props) {
    return (
        <>
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
            <div className={props.classname}>
                <h3 className='bold'>Time left</h3>
                <h3 className="action bold">Action</h3>
            </div>
        </>
    )
}
