import '../combined.css';
import './profile.css';
import React from 'react';
import Topforpages from '../../components/topforpages';
import Profilesec2left from '../../components/profilesec2left';
import Profilesec2right from '../../components/profilesec2right';
import Profilecardall from '../../components/profilecardsall';


export default function Profile() {
    return (
        <div className="content">
            <Topforpages pagename='Profile' page='Profile' pageref='profile' />

            <div className="profile-section2">
                <div className="profile-sec2-left">
                    <Profilesec2left />
                </div>
                <div className="profile-sec2-right">
                    <h2 className='bold'>Following</h2>
                    <div className="profile-following">
                        <Profilesec2right />
                    </div>
                </div>
            </div>

            <div className="profile-section3">
                <h2 className='bold'>My Bought</h2>
                <div className="profile-bought cards-all">
                    <Profilecardall />
                </div>
            </div>

            <div className="profile-section4">
                <h2 className='bold'>My Collections</h2>
                <div className="profile-bought cards-all">
                    <Profilecardall />
                </div>
            </div>
        </div>
    )
}
