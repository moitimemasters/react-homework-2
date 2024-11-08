import React from 'react';
import { CardProps } from '../../types';
import { NoImagePlaceholder } from '../card';
import './style.css';

interface Props extends CardProps {
    onClose: () => void;
}

export const Modal: React.FC<Props> = ({ imageUrl, name, description, category, count, units, onClose }) => {
    return (
        <div className="card-modal-overlay" onClick={onClose}>
            <div className="card-modal-content" onClick={(e) => e.stopPropagation()}>
                <img className="card-modal-image" src={imageUrl ?? NoImagePlaceholder} alt={name} />
                <h2 className="card-modal-title">{name}</h2>
                {description && <p className="card-modal-description">{description}</p>}
                {category && <p className="card-modal-category"><strong>Category:</strong> {category}</p>}
                <p className="card-modal-count"><strong>Count:</strong> {count} {units}</p>
                <button className="close-modal-btn" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};
