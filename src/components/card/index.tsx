import { CardProps } from "../../types";
import styles from "./style.module.css"


export const NoImagePlaceholder = 'https://placehold.jp/3d4070/ffffff/150x150.png';

interface Props extends CardProps {
    onClick: () => void;
}

export const Card: React.FC<Props> = ({ name, description, category, count, units, imageUrl, onClick }) => {
    return (
        <div className={styles["card"]} onClick={onClick}>
            <div className={styles["card-image-wrapper"]}>
                <img alt="card-image" src={imageUrl ?? NoImagePlaceholder} className={styles["card-image"]} />
            </div>
            <div className={styles["card-content"]}>
                <h3 className={styles["card-name"]}>{name}</h3>
                {description && <p className={styles["card-description"]}>{description}</p>}
                <div className={styles["card-bottom"]}>
                    {category && <span className={styles["card-category"]}>{category}</span>}
                    <div className={styles["card-count-block"]}>
                        <span className={styles["card-count"]}>{count}</span>
                        <span className={styles["card-units"]}>{units}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
