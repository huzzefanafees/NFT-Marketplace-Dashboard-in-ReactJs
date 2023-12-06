import '../combined.css';
import './setting.css';
import React, { useState } from 'react';
import Topforpages from '../../components/topforpages';
import Settingtabscontent from '../../components/settingtabscontent';

export default function Setting() {
    const [activeButton, setActiveButton] = useState(0);

    const handleClick = (buttonIndex) => {
        setActiveButton(buttonIndex);
    };

    const buttons = [
        {
            text: "Profile",
            content: <Settingtabscontent />,
        },
        {
            text: "Application",
            content: <Settingtabscontent />,
        },
        {
            text: "Security",
            content: <Settingtabscontent />,
        },
        {
            text: "Activity",
            content: <Settingtabscontent />,
        },
        {
            text: "Payment Method",
            content: <Settingtabscontent />,
        },
        {
            text: "API",
            content: <Settingtabscontent />,
        },
    ];
    return (
        <div className="content">
            <Topforpages pagename='Setting' page='Setting' pageref='setting' />
            <div className="setting-section2">
                <div className="setting-links">
                    {buttons.map((button, index) => (
                        <button
                            key={index}
                            onClick={() => handleClick(index)}
                            className={activeButton === index ? "setting-btn active" : "setting-btn"}
                        >
                            {button.text}
                        </button>
                    ))}
                </div>
            </div>

            <div className='setting-content fade-in' style={{ display: activeButton === 0 ? "grid" : "none" }}>
                {buttons[0].content}
            </div>
            <div className='setting-content fade-in' style={{ display: activeButton === 1 ? "grid" : "none" }}>
                {buttons[1].content}
            </div>
            <div className='setting-content fade-in' style={{ display: activeButton === 2 ? "grid" : "none" }}>
                {buttons[2].content}
            </div>
            <div className='setting-content fade-in' style={{ display: activeButton === 3 ? "grid" : "none" }}>
                {buttons[3].content}
            </div>
            <div className='setting-content fade-in' style={{ display: activeButton === 4 ? "grid" : "none" }}>
                {buttons[4].content}
            </div>
            <div className='setting-content fade-in' style={{ display: activeButton === 5 ? "grid" : "none" }}>
                {buttons[5].content}
            </div>
        </div>
    )
}
