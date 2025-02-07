export interface CardProps {
    name: string;
    description?: string;
    category?: string;
    count: number;
    units: string;
    imageUrl?: string;
}

export interface Category {
    id: number;
    name: string;
    description?: string;
}
