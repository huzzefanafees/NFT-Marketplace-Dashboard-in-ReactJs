import React from 'react';
import Button from '../components/button';

export default function homesection1divleft() {
    return (
        <>
            <h1 className='bold'>Discover, Collect, Sell and Create your NFT</h1>
            <p>Digital marketplace for crypto collectibles and non fungable tokens</p>
            <div className="buttons">
                <Button className="button button1" name="Explore" />
                <Button className="button button2" name="Create" />
            </div>
        </>
    )
}
