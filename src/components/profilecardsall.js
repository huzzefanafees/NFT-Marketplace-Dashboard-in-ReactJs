import React from 'react';
import nft from '../data/NFT (1).png';
import avatar from '../data/sec1-avatar.png';
import Profilecard from './profilecard';

const detail = [
    {
        image1: nft,
        image2: avatar,
        heading: "Liquid Wave",
    },
    {
        image1: nft,
        image2: avatar,
        heading: "Liquid Wave",
    },
    {
        image1: nft,
        image2: avatar,
        heading: "Liquid Wave",
    },
    {
        image1: nft,
        image2: avatar,
        heading: "Liquid Wave",
    },
]

export default function profilecardsall() {
    return (
        <>
            {detail.map((detail, index) => (
                <Profilecard image1={detail.image1} heading={detail.heading} image2={detail.image2} />
            ))}
        </>
    )
}
