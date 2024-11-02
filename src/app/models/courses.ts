export interface CourseModel {
    id: number;
    name: string;
    imageUrl?: string;
    description?: string;
    language: string;
    price: number;
    discount: number;
    rating: number;
    isCertificate: boolean;
    levelName: string;
    categoryName: string;
}