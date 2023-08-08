import React from 'react';
import Card from './card';
import nftimage from '../data/NFT (1).png';

const cardsdetail = [
    {
        image: nftimage,
        heading: "dashboard",
        timeheading: "Auction time",
        bidheading:"Current Bid",
        bid:"0.05 ETH",
        time:"3h 1m 50s",
        bidagain:"0.15 ETH",
    },
    {
        image: nftimage,
        heading: "dashboard",
        timeheading: "Auction time",
        bidheading:"Current Bid",
        bid:"0.05 ETH",
        time:"3h 1m 50s",
        bidagain:"0.15 ETH",
    },
    {
        image: nftimage,
        heading: "dashboard",
        timeheading: "Auction time",
        bidheading:"Current Bid",
        bid:"0.05 ETH",
        time:"3h 1m 50s",
        bidagain:"0.15 ETH",
    },
    {
        image: nftimage,
        heading: "dashboard",
        timeheading: "Auction time",
        bidheading:"Current Bid",
        bid:"0.05 ETH",
        time:"3h 1m 50s",
        bidagain:"0.15 ETH",
    },
    {
        image: nftimage,
        heading: "dashboard",
        timeheading: "Auction time",
        bidheading:"Current Bid",
        bid:"0.05 ETH",
        time:"3h 1m 50s",
        bidagain:"0.15 ETH",
    },
    {
        image: nftimage,
        heading: "dashboard",
        timeheading: "Auction time",
        bidheading:"Current Bid",
        bid:"0.05 ETH",
        time:"3h 1m 50s",
        bidagain:"0.15 ETH",
    },
    {
        image: nftimage,
        heading: "dashboard",
        timeheading: "Auction time",
        bidheading:"Current Bid",
        bid:"0.05 ETH",
        time:"3h 1m 50s",
        bidagain:"0.15 ETH",
    },
    {
        image: nftimage,
        heading: "dashboard",
        timeheading: "Auction time",
        bidheading:"Current Bid",
        bid:"0.05 ETH",
        time:"3h 1m 50s",
        bidagain:"0.15 ETH",
    },
]

export default function cardscontainer() {
    return (
        <>
        {cardsdetail.map((carddetail,index) => (
            <Card key={index} nftimage={carddetail.image} heading={carddetail.heading} timeheading={carddetail.timeheading} bidheading={carddetail.bidheading} bid={carddetail.bid} time={carddetail.time} bidagain={carddetail.bidagain} />
        ))}
        </>
    )
}
