import React from 'react';
import Card from './card';
import nftimage from '../data/NFT (1).png';

const cardsdetail = [
    {
        image: nftimage,
        heading: "Liquid Wave",
        timeheading: "Auction time",
        bidheading:"Current Bid",
        bid:"0.06 ETH",
        time:"2h 3m 20s",
        bidagain:"0.25 ETH",
    },
    {
        image: nftimage,
        heading: "Solid Wave",
        timeheading: "Auction time",
        bidheading:"Current Bid",
        bid:"0.10 ETH",
        time:"1h 4m 10s",
        bidagain:"0.15 ETH",
    },
    {
        image: nftimage,
        heading: "Cute Cube Cool",
        timeheading: "Auction time",
        bidheading:"Current Bid",
        bid:"0.05 ETH",
        time:"3h 1m 50s",
        bidagain:"0.15 ETH",
    },
    {
        image: nftimage,
        heading: "PixelPulse Warlock",
        timeheading: "Auction time",
        bidheading:"Current Bid",
        bid:"0.25 ETH",
        time:"3h 1m 50s",
        bidagain:"0.65 ETH",
    },
    {
        image: nftimage,
        heading: "MetaMage Arcanist",
        timeheading: "Auction time",
        bidheading:"Current Bid",
        bid:"0.05 ETH",
        time:"1h 29m 19s",
        bidagain:"0.25 ETH",
    },
    {
        image: nftimage,
        heading: "ByteBattles Conjurer",
        timeheading: "Auction time",
        bidheading:"Current Bid",
        bid:"0.35 ETH",
        time:"4h 1m 50s",
        bidagain:"0.75 ETH",
    },
    {
        image: nftimage,
        heading: "CryptoChronicle Sorceress",
        timeheading: "Auction time",
        bidheading:"Current Bid",
        bid:"0.05 ETH",
        time:"7h 1m 50s",
        bidagain:"0.15 ETH",
    },
    {
        image: nftimage,
        heading: "NebulaNomad Mystic",
        timeheading: "Auction time",
        bidheading:"Current Bid",
        bid:"0.05 ETH",
        time:"6h 1m 50s",
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
