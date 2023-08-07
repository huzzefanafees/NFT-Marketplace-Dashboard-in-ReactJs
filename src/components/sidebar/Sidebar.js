import React from 'react';
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
    const location = useLocation();
    return (
        <aside className='asideContainer'>
            <div className='sidebarNav'>
                <ul className='aside-list'>
                    <li>
                        <a href="/dashboard" className="logo-big">
                            <img src={Image} alt="Logo-light" />
                        </a>
                    </li>
                    {sidebarNavLinks.map((sidebarNavLinks, index) => (
                        <li key={index}>
                            <Link className={location.pathname === `/${sidebarNavLinks.title}` ? 'sidebarNavLinkActive' : 'sidebarNavLink'} to={`/${sidebarNavLinks.title}`}>
                                <span class="material-symbols-sharp sidebarIcons"> {sidebarNavLinks.icon} </span>
                                <h3 className='bold'>{sidebarNavLinks.title.charAt(0).toUpperCase() + sidebarNavLinks.title.slice(1)}</h3>
                            </Link>
                        </li>
                    ))}
                    <li>
                        <a href="/">
                            <img src={signout} alt="sign-out" className='sidebarIcons' />
                            <h3 className='bold'>Sign out</h3>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    )
}
