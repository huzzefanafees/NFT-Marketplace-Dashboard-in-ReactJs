import React, { useState } from 'react';
import Cardscontainer from './cardscontainer';

export default function topforall() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
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
        <>
            <div className='sec2-top'>
                <h2 className="trending">Trending Bids</h2>
                <div className="sec2-a">
                    {buttons.map((button, index) => (
                        <button
                            key={index}
                            onClick={() => handleClick(index)}
                            className={activeButton === index ? "bids-btn active" : "bids-btn"}
                            style={{
                                color: activeButton === index ? "white" : "var(--color-black)",
                            }}
                        >
                            {button.text}
                        </button>
                    ))}
                </div>
            </div>

            <div className='sec2-main bids-content cards-all fade-in' style={{ display: activeButton === 0 ? "grid" : "none" }}>
                {buttons[0].content}
            </div>
            <div className='sec2-main bids-content cards-all fade-in' style={{ display: activeButton === 1 ? "grid" : "none" }}>
                {buttons[1].content}
            </div>
            <div className='sec2-main bids-content cards-all fade-in' style={{ display: activeButton === 2 ? "grid" : "none" }}>
                {buttons[2].content}
            </div>

        </>
    )
}
