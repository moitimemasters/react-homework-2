import { CardGrid, Modal, NavBar, Sidebar } from "../components"
import cardData from '../data/cards.json'
import { useState } from "react";
import { CardProps } from "../types";




export const HomePage: React.FC = () => {

    const [selectedCard, setSelectedCard] = useState<CardProps | null>(null);

    const handleCardClick = (card: CardProps) => {
        setSelectedCard(card);
    };

    const handleCloseModal = () => {
        setSelectedCard(null);
    };

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };


    return (
        <>
            <NavBar toggleSidebar={toggleSidebar} />
            <Sidebar isOpen={isSidebarOpen} />
            <div
                style={{
                    marginLeft: isSidebarOpen ? '350px' : '0',
                    transition: 'margin-left 0.3s ease-in-out',
                    padding: '20px',
                }}

            >
                <CardGrid data={cardData} onClick={handleCardClick} />
                {selectedCard && (
                    <Modal {...selectedCard} onClose={handleCloseModal} />
                )}
            </div>
        </>
    )
}
