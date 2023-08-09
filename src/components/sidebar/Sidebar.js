import React, { useState } from 'react';
import './Sidebar.css';
import { Link, useLocation } from 'react-router-dom';
import Image from '../../data/Logo-light.svg';
import signout from '../../data/sign-out.svg';

const sidebarNavLinks = [
    {
        title: "dashboard",
        icon: "grid_view",
    },
    {
        title: "bids",
        icon: "assignment",
    },
    {
        title: "saved",
        icon: "favorite",
    },
    {
        title: "collection",
        icon: "star",
    },
    {
        title: "profile",
        icon: "account_circle",
    },
    {
        title: "setting",
        icon: "settings",
    },
]

export default function Sidebar() {
    const [sidebar, setsidebar] = useState(false);
    const location = useLocation();
    const sidebarOpen = () => {
        setsidebar(!sidebar);
    }

    return (
        <div className={sidebar ? "aside active scale-up-hor-left" : "aside scale-down-hor-left"}>
            <aside className='asideContainer'>
                <div className='sidebarNav'>
                    <ul className={!sidebar ? 'aside-list' : "aside-list active"}>
                        <li>
                            <a href="/dashboard" className="logo-big">
                                <img src={Image} alt="Logo-light" />
                            </a>
                            <button
                                className={`bars ${sidebar ? '' : 'active'}`}
                                onClick={sidebarOpen}
                            >
                                <span className="material-symbols-sharp menubtn">
                                    {sidebar ? 'close' : 'menu'}
                                </span>
                            </button>
                            <button
                                className={`close ${sidebar ? 'active' : ''}`}
                                onClick={sidebarOpen}
                            >
                                <span className="material-symbols-sharp closebtn">
                                    {sidebar ? 'close' : 'menu'}
                                </span>
                            </button>
                        </li>
                        {sidebarNavLinks.map((sidebarNavLinks, index) => (
                            <li key={index}>
                                <Link className={location.pathname === `/${sidebarNavLinks.title}` ? 'sidebarNavLinkActive' : 'sidebarNavLink'} to={`/${sidebarNavLinks.title}`}>
                                    <span className="material-symbols-sharp sidebarIcons"> {sidebarNavLinks.icon} </span>
                                    <h3 className='bold'>{sidebarNavLinks.title.charAt(0).toUpperCase() + sidebarNavLinks.title.slice(1)}</h3>
                                </Link>
                            </li>
                        ))}
                        <li>
                            <a href="/dashboard">
                                <img src={signout} alt="sign-out" className='sidebarIcons' />
                                <h3 className='bold'>Sign out</h3>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    )
}
