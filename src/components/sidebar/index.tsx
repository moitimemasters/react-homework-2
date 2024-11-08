import React, { useState } from 'react';
import styles from './style.module.css';

interface SidebarProps {
    isOpen: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
    return (
        <aside className={styles[`sidebar`] + ` ${isOpen ? styles['open'] : styles['collapsed']}`}>
            <form className={styles["filter-form"]}>
                <div className={styles["label-input-group"]}>
                    <label htmlFor="search">Поиск:</label>
                    <input type="text" id="search" name="search" className={styles["input-field"]} />
                </div>

                <label htmlFor="nonZeroStock" className={styles["checkbox-label"]}>
                    <input type="checkbox" id="nonZeroStock" name="nonZeroStock" />
                    Только товары в наличии
                </label>

                <div className={styles["label-input-group"]}>
                    <label htmlFor="category">Категория:</label>
                    <select id="category" name="category" className={styles["dropdown"]}>
                        <option value="">Все</option>
                        <option value="clothes">Одежда</option>
                        <option value="electronics">Электроника</option>
                        {/* Другие категории */}
                    </select>
                </div>
            </form>
        </aside>
    );

};
