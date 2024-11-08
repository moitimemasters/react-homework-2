import { CardProps } from "../../types";
import "./style.css"


export const NoImagePlaceholder = 'https://placehold.jp/3d4070/ffffff/150x150.png';

interface Props extends CardProps {
    onClick: () => void;
}

export const Card: React.FC<Props> = ({ name, description, category, count, units, imageUrl, onClick }) => {
    return (
        <div className="card" onClick={onClick}>
            <div className="card-image-wrapper">
                <img alt="card-image" src={imageUrl ?? NoImagePlaceholder} className="card-image" />
            </div>
            <div className="card-content">
                <h3 className="card-name">{name}</h3>
                {description && <p className="card-description">{description}</p>}
                <div className="card-bottom">
                    {category && <span className="card-category">{category}</span>}
                    <div className="card-count-block">
                        <span className="card-count">{count}</span>
                        <span className="card-units">{units}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
