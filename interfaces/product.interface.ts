import { Rating } from './../components/Rating/Rating';
export interface ProductCharacteristic {
    name: string;
    value: string;
}

export interface Blog {
    text: string;
    _id: string;
    bigImage: string;
}

export interface ReviewModel {
    _id: string;
    name: string;
    title: string;
    description: string;
    rating: number;
    createdAd: Date;
}

export interface ProductModel {
    _id: string;
    length: number;
    categories: string[];
    tags: string[];
    title: string;
    image: string;
    description: string;
    link: string;
    price: number;
    credit: number;
    oldPrice: number;
    characteristics: ProductCharacteristic[];
    advantages: string;
    initialRating: number;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
    html: string;
    blog: Blog;
    companyId: string;
    clicks: number;
    reviews: ReviewModel[];
    reviewCount: number;
    reviewAvg?: number;
}

