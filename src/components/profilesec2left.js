import React from 'react';
import image from '../data/sec1-avatar.png';

export default function profilesec2left() {
    return (
        <>
            <div>
                <img src={image} alt="sec1-avatar" />
            </div>
            <h2 className='bold'>Welcome, John Smith</h2>
            <p>
                Looks like you are not verified yet. Verify yourself to use
                the full potential of Xtrader.
            </p>
            <div
                class="profile-sec2-inner-divs profile-sec2-inner-divs1 profile-border-bottom"
            >
                <span class="material-symbols-sharp bg-success">done</span>
                <a href="/"><p class="primary">Verify Account</p></a>
            </div>
            <div class="profile-sec2-inner-divs profile-sec2-inner-divs2">
                <span class="material-symbols-sharp bg-primary">lock</span>
                <a href="/">
                    <p class="primary">Two-factor Authentication ( 2FA )</p>
                </a>
            </div>
        </>
    )
}
