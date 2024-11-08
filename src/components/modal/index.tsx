import React from 'react';
import { CardProps } from '../../types';
import { NoImagePlaceholder } from '../card';
import styles from './style.module.css';

interface Props extends CardProps {
    onClose: () => void;
}

export const Modal: React.FC<Props> = ({ imageUrl, name, description, category, count, units, onClose }) => {
    return (
        <div className={styles["card-modal-overlay"]} onClick={onClose}>
            <div className={styles["card-modal-content"]} onClick={(e) => e.stopPropagation()}>
                <img className={styles["card-modal-image"]} src={imageUrl ?? NoImagePlaceholder} alt={name} />
                <h2 className={styles["card-modal-title"]}>{name}</h2>
                {description && <p className={styles["card-modal-description"]}>{description}</p>}
                {category && <p className={styles["card-modal-category"]}><strong>Category:</strong> {category}</p>}
                <p className={styles["card-modal-count"]}><strong>Count:</strong> {count} {units}</p>
                <button className={styles["close-modal-btn"]} onClick={onClose}>Close</button>
            </div>
        </div>
    );
};
