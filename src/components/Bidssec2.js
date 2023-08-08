import React from 'react';
import artwork from "../data/Artwork-light2.svg";
import Bidssec2divs from './Bidssec2divs';

const bidsdetail = [
    {
        image: artwork,
        heading: "24k",
        text: "Artwork",
        classname: "artwork",
    },
    {
        image: artwork,
        heading: "24k",
        text: "Artwork",
        classname: "artwork artwork2",
    },
    {
        image: artwork,
        heading: "24k",
        text: "Artwork",
        classname: "artwork artwork3",
    },
    {
        image: artwork,
        heading: "24k",
        text: "Artwork",
        classname: "artwork artwork4",
    },
]

export default function Bidssec2() {
    return (
        <>
            {bidsdetail.map((detail, index) => (
                <Bidssec2divs key={index} image={detail.image} heading={detail.heading} text={detail.text} classname={detail.classname} />
            ))}
        </>
    )
}
