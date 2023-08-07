import React from 'react';
import Labelinputforsetting from './labelinputforsetting';
import Button from './button';

export default function settingtabscontent() {
    return (
        <>
            <div className="setting-section3">
                <div className="setting-sec3-divs">
                    <h2 className='bold'>User Profile</h2>
                    <div className="setting-sec3-inner-divs">
                        <div className="full-name-input setting-label-input">
                            <Labelinputforsetting type='text' forid='fullname' text='Full Name' />
                        </div>
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
                        <div className="email-input setting-label-input">
                            <Labelinputforsetting type='email' forid='email' text='Email' />
                        </div>
                        <div className="password-input setting-label-input">
                            <Labelinputforsetting type='password' forid='password' text='Password' />
                        </div>
                        <Button className='button save' name='Save' />
                    </div>
                </div>
            </div>

            <div className="setting-section4">
                <h2 className='bold'>Personal Information</h2>
                <div className="setting-sec4-divs">
                    <div className="info-input setting-label-input">
                        <Labelinputforsetting type='text' forid='info' text='Info' />
                    </div>
                    <div className="info-input setting-label-input">
                        <Labelinputforsetting type='text' forid='info' text='Info' />
                    </div>
                    <div className="info-input setting-label-input">
                        <Labelinputforsetting type='text' forid='info' text='Info' />
                    </div>
                    <div className="info-input setting-label-input">
                        <Labelinputforsetting type='text' forid='info' text='Info' />
                    </div>
                    <div className="info-input setting-label-input">
                        <Labelinputforsetting type='text' forid='info' text='Info' />
                    </div>
                    <div className="info-input setting-label-input">
                        <Labelinputforsetting type='text' forid='info' text='Info' />
                    </div>
                    <Button className='button save' name='Save' />
                </div>
            </div>
        </>
    )
}
