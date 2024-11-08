import React from 'react';
import { Card } from '../card';
import { CardProps } from '../../types';
import './style.css';



interface Props {
    data: CardProps[];
    onClick: (_: CardProps) => void;
}


export const CardGrid: React.FC<Props> = ({ data, onClick }) => {
    return (
        <div className="card-grid">
            {data.map((props, index) => (
                <Card key={index} {...props} onClick={() => onClick(props)} />
            ))}
        </div>
    );
};
