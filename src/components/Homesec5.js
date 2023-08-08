import React from 'react';
import nft2 from "../data/NFT (2).png";
import nft3 from "../data/NFT (3).png";
import nft4 from "../data/NFT (4).png";
import nft5 from "../data/NFT (5).png";
import avatar from "../data/avatar.png";
import Homesec5divs from './Homesec5divs';

const sec5detail = [
    {
        image: nft2,
        heading: "Cute Cube Cool",
        text: "John Abraham",
        bid1: "0.0025 ETH",
        bid2: "0.0025 ETH",
        bid3: "0.0025 ETH",
        image2: avatar,
        time: "2 hours 1 min 30s",
    },
    {
        image: nft3,
        heading: "Liquid Wave",
        text: "John Abraham",
        bid1: "0.0025 ETH",
        bid2: "0.0025 ETH",
        bid3: "0.0025 ETH",
        image2: avatar,
        time: "2 hours 1 min 30s",
    },
    {
        image: nft2,
        heading: "Cute Cube Cool",
        text: "John Abraham",
        bid1: "0.0025 ETH",
        bid2: "0.0025 ETH",
        bid3: "0.0025 ETH",
        image2: avatar,
        time: "2 hours 1 min 30s",
    },
    {
        image: nft4,
        heading: "Liquid Wave",
        text: "John Abraham",
        bid1: "0.0025 ETH",
        bid2: "0.0025 ETH",
        bid3: "0.0025 ETH",
        image2: avatar,
        time: "2 hours 1 min 30s",
    },
    {
        image: nft5,
        heading: "Liquid Wave",
        text: "John Abraham",
        bid1: "0.0025 ETH",
        bid2: "0.0025 ETH",
        bid3: "0.0025 ETH",
        image2: avatar,
        time: "2 hours 1 min 30s",
    },
]

export default function Homesec5() {
  return (
    <>
    {sec5detail.map((detail,index)=>(
        <Homesec5divs key={index} image1={detail.image} heading={detail.heading} image2={detail.image2} text={detail.text} bid1={detail.bid1} bid2={detail.bid2} bid3={detail.bid3} time={detail.time} />
    ))}
    </>
  )
}
