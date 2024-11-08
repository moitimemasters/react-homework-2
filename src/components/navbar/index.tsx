import React from 'react';
import './style.css';

interface NavigationBarProps {
    toggleSidebar: () => void;
}

export const NavBar: React.FC<NavigationBarProps> = ({ toggleSidebar }) => {
    return (
        <nav className="navigation-bar">
            <button onClick={toggleSidebar} className="toggle-sidebar-btn">
                Меню
            </button>
            <ul className="nav-list">
                <li className="nav-item">Товары</li>
                <li className="nav-item">Склады</li>
                <li className="nav-item">О системе</li>
                <li className="nav-item">Личная страница</li>
            </ul>
        </nav>
    );
};


