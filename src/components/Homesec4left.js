import React from 'react';
import image from '../data/sec1-avatar.png';
import Homesec4leftdivs from './Homesec4leftdivs';

const sec4detail = [
    {
        image: image,
        heading: "Papaya",
        text: "Purchase by you for 0.05 ETH",
        time: "15 mins ago",
    },
    {
        image: image,
        heading: "Liquid",
        text: "Purchase by you for 0.15 ETH",
        time: "14 mins ago",
    },
    {
        image: image,
        heading: "Papaya",
        text: "Purchase by you for 0.25 ETH",
        time: "12 mins ago",
    },
    {
        image: image,
        heading: "Cube",
        text: "Purchase by you for 0.35 ETH",
        time: "10 mins ago",
    },
]

export default function Homesec4left() {
    return (
        <>
            {sec4detail.map((detail, index) => (
                <Homesec4leftdivs key={index} image={detail.image} heading={detail.heading} text={detail.text} time={detail.time} />
            ))}
        </>
    )
}
