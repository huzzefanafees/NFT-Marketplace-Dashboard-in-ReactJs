import React from 'react';
import './topbar.css';
import logolight from '../../data/Logo-light.svg';
import avatar from '../../data/id-avatar.png';
import Themetoggler from '../themetoggler';

export default function Topbar() {
    return (
        <div className="top-container">
            <div className="top">
                <div className="logo-small">
                    <img src={logolight} alt="logo" className="logo" />
                </div>
                <div className="search">
                    <span className="material-symbols-sharp search-icon">search</span>
                    <input type="search" placeholder="Search Here" className="top-input" />
                </div>
                <div className="profile">
                    <Themetoggler />
                    <a href="/">
                        <span className="material-symbols-sharp">notifications</span>
                    </a>
                    <a href="/">
                        <img
                            src={avatar}
                            alt="id-avatar"
                            className="top-profile-avatar"
                        />
                    </a>
                </div>
            </div>
        </div>

    )
}
