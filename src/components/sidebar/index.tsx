import React, { useState } from 'react';
import './style.css';

interface SidebarProps {
    isOpen: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
    return (
        <aside className={`sidebar ${isOpen ? 'open' : 'collapsed'}`}>
            <form className="filter-form">
                <div className="label-input-group">
                    <label htmlFor="search">Поиск:</label>
                    <input type="text" id="search" name="search" className="input-field" />
                </div>

                <label htmlFor="nonZeroStock" className="checkbox-label">
                    <input type="checkbox" id="nonZeroStock" name="nonZeroStock" />
                    Только товары в наличии
                </label>

                <div className="label-input-group">
                    <label htmlFor="category">Категория:</label>
                    <select id="category" name="category" className="dropdown">
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
