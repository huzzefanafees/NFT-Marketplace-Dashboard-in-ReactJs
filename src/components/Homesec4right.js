import React from 'react';
import image from '../data/sec1-avatar.png';
import Homesec4rightdivs from './Homesec4rightdivs';

const sec4detail = [
    {
        image: image,
        classname: "sec4-right-divs",
        heading: "Papaya",
        text: "60 Items",
    },
    {
        image: image,
        classname: "sec4-right-divs",
        heading: "Papaya",
        text: "60 Items",
    },
    {
        image: image,
        classname: "sec4-right-divs",
        heading: "Papaya",
        text: "60 Items",
    },
    {
        image: image,
        classname: "sec4-right-divs",
        heading: "Papaya",
        text: "60 Items",
    },
    {
        image: image,
        classname: "sec4-right-divs display-none",
        heading: "Papaya",
        text: "60 Items",
    },
    {
        image: image,
        classname: "sec4-right-divs display-none",
        heading: "Papaya",
        text: "60 Items",
    },
    {
        image: image,
        classname: "sec4-right-divs display-none",
        heading: "Papaya",
        text: "60 Items",
    },
    {
        image: image,
        classname: "sec4-right-divs display-none",
        heading: "Papaya",
        text: "60 Items",
    },
]

export default function Homesec4right() {
    return (
        <>
            {sec4detail.map((detail, index) => (
                <Homesec4rightdivs image={detail.image} classname={detail.classname} heading={detail.heading} text={detail.text} />
            ))}
        </>
    )
}
