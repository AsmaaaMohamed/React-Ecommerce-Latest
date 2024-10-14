export type TProduct = {
    id:number;
    name: string;
    weight?:string;
    price:number;
    discount?:number;
    img?:string;
    quantity?: number;
    inStock?: number;
    isLiked?:boolean;
    isAuthenticated?:boolean
}