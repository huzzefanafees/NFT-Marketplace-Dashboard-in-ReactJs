import React from 'react';
import image from '../data/sec1-avatar.png';
import Homesec4rightdivs from './Homesec4rightdivs';

const sec4detail = [
    {
        image: image,
        classname: "sec4-right-divs",
        heading: "Papaya",
        text: "10 Items",
    },
    {
        image: image,
        classname: "sec4-right-divs",
        heading: "Liquid",
        text: "20 Items",
    },
    {
        image: image,
        classname: "sec4-right-divs",
        heading: "Cube",
        text: "30 Items",
    },
    {
        image: image,
        classname: "sec4-right-divs",
        heading: "Papaya",
        text: "40 Items",
    },
    {
        image: image,
        classname: "sec4-right-divs display-none",
        heading: "Cube",
        text: "50 Items",
    },
    {
        image: image,
        classname: "sec4-right-divs display-none",
        heading: "Cube",
        text: "60 Items",
    },
    {
        image: image,
        classname: "sec4-right-divs display-none",
        heading: "Papaya",
        text: "70 Items",
    },
    {
        image: image,
        classname: "sec4-right-divs display-none",
        heading: "Liquid",
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
