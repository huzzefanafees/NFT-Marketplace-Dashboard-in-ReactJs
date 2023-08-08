import React from 'react';
import artwork1 from "../data/Artwork-light1.svg";
import artwork2 from "../data/Artwork-light2.svg";
import Homesec3leftdivs from './homesec3leftdivs';

const divdetail = [
    {
        image: artwork1,
        heading:"24K",
        text:"Artwork",
        classname: "artwork1",
        number: "+168.001%",
        class2: "success",
    },
    {
        image: artwork2,
        heading:"24K",
        text:"Artwork",
        classname: "artwork2",
        number: "-168.001%",
        class2: "danger",
    },
    {
        image: artwork1,
        heading:"24K",
        text:"Artwork",
        classname: "artwork1",
        number: "+168.001%",
        class2: "success",
    },
]

export default function homesec3left() {
  return (
    <>
    {divdetail.map((detail,index)=>(
        <Homesec3leftdivs key={index} heading={detail.heading} text={detail.text} classname={detail.classname} image={detail.image} number={detail.number} class2={detail.class2} />
    ))}
    </>
  )
}
