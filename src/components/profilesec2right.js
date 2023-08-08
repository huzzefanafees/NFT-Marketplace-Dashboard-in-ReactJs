import React from 'react';
import image from '../data/sec1-avatar.png';
import Profilesec2rightdivs from './profilesec2rightdivs';

const profiledetail = [
    {
        image: image,
        heading: "Papaya",
        text: "60 Items",
    },
    {
        image: image,
        heading: "Cute",
        text: "20 Items",
    },
    {
        image: image,
        heading: "Liquid",
        text: "83 Items",
    },
    {
        image: image,
        heading: "Papaya",
        text: "22 Items",
    },
]

export default function profilesec2right() {
    return (
        <>
            {profiledetail.map((detail, index) => (
                <Profilesec2rightdivs image={detail.image} heading={detail.heading} text={detail.text} />
            ))}
        </>
    )
}
