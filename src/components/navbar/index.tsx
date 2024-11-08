import React from 'react';
import styles from './style.module.css';

interface NavigationBarProps {
    toggleSidebar: () => void;
}

export const NavBar: React.FC<NavigationBarProps> = ({ toggleSidebar }) => {
    return (
        <nav className={styles["navigation-bar"]}>
            <button onClick={toggleSidebar} className={styles["toggle-sidebar-btn"]}>
                Меню
            </button>
            <ul className={styles["nav-list"]}>
                <li className={styles["nav-item"]}>Товары</li>
                <li className={styles["nav-item"]}>Склады</li>
                <li className={styles["nav-item"]}>О системе</li>
                <li className={styles["nav-item"]}>Личная страница</li>
            </ul>
        </nav>
    );
};


