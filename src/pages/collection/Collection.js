import '../combined.css';
import './collection.css';
import React, { useState } from 'react';
import Topforpages from '../../components/topforpages';
import Cardscontainer from '../../components/cardscontainer';

export default function Collection() {
    const [activeButton, setActiveButton] = useState(0);

    const handleClick = (buttonIndex) => {
        setActiveButton(buttonIndex);
    };

    const buttons = [
        {
            text: "All",
            content: <Cardscontainer />,
        },
        {
            text: "Artwork",
            content: <Cardscontainer />,
        },
        {
            text: "Book",
            content: <Cardscontainer />,
        },
    ];
    return (
        <div className="content">
            <Topforpages pagename='Collections' page='Collection' />

            <div className="collection-section2">
                <div className="sec2-a">
                    {buttons.map((button, index) => (
                        <button
                            key={index}
                            onClick={() => handleClick(index)}
                            className={activeButton === index ? "collection-btn active" : "collection-btn"}
                            style={{
                                color: activeButton === index ? "white" : "var(--color-black)",
                            }}
                        >
                            {button.text}
                        </button>
                    ))}
                </div>
                <div className='collection-section3 collection-content cards-all fade-in' style={{ display: activeButton === 0 ? "grid" : "none" }}>
                    {buttons[0].content}
                </div>
                <div className='collection-section3 collection-content cards-all fade-in' style={{ display: activeButton === 1 ? "grid" : "none" }}>
                    {buttons[1].content}
                </div>
                <div className='collection-section3 collection-content cards-all fade-in' style={{ display: activeButton === 2 ? "grid" : "none" }}>
                    {buttons[2].content}
                </div>
            </div>
        </div>
    )
}
