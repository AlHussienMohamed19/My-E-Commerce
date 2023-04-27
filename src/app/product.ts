export interface Product {
    _id: string;
    imageCover: string;
    category: Category;
    title: string;
    price: string;
    ratingsAverage: string;
}

export interface Category {
    _id: string;
    name: string;
    slug: string;
    image: string;
}
