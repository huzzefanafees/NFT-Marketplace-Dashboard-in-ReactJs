import React from 'react';
import Labelinputforsetting from './labelinputforsetting';
import Button from './button';

const settingdetail = [
    {
        classname: "info-input setting-label-input",
        forid: "info",
        text: "ID",
        type: "text",
    },
    {
        classname: "info-input setting-label-input",
        forid: "info",
        text: "Country",
        type: "text",
    },
    {
        classname: "info-input setting-label-input",
        forid: "info",
        text: "Profession",
        type: "text",
    },
    {
        classname: "info-input setting-label-input",
        forid: "info",
        text: "Expert",
        type: "text",
    },
    {
        classname: "info-input setting-label-input",
        forid: "info",
        text: "Info",
        type: "text",
    },
    {
        classname: "info-input setting-label-input",
        forid: "info",
        text: "Pin",
        type: "text",
    },
]

export default function settingtabscontent() {
    return (
        <>
            <div className="setting-section3">
                <div className="setting-sec3-divs">
                    <h2 className='bold'>User Profile</h2>
                    <div className="setting-sec3-inner-divs">
                        <Labelinputforsetting type='text' forid='fullname' text='Full Name' classname='full-name-input setting-label-input' />
                        <div className="setting-profile">
                            <div>
                                <span className="material-symbols-sharp"> person </span>
                            </div>
                            <div>
                                <h3 className='bold'>John Smith</h3>
                                <p>Welcome Setting Page</p>
                            </div>
                        </div>
                        <Button className='button save' name='Save' />
                    </div>
                </div>
                <div className="setting-sec3-divs">
                    <h2 className='bold'>User Profile</h2>
                    <div className="setting-sec3-inner-divs">
                        <Labelinputforsetting type='email' forid='email' text='Email' classname='email-input setting-label-input' />
                        <Labelinputforsetting type='password' forid='password' text='Password' classname='password-input setting-label-input' />
                        <Button className='button save' name='Save' />
                    </div>
                </div>
            </div>

            <div className="setting-section4">
                <h2 className='bold'>Personal Information</h2>
                <div className="setting-sec4-divs">
                    {settingdetail.map((detail, index) => (
                        <Labelinputforsetting key={index} type={detail.type} classname={detail.classname} text={detail.text} forid={detail.forid} />
                    ))}
                    <Button className='button save' name='Save' />
                </div>
            </div>
        </>
    )
}
