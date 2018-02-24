import {Product} from '../../product/product.model';

export class Order {

    public product: Product;
    public size: number;
    public date: Date;
    public finalPrice: number;

    constructor() {
        this.product = null;
        this.size = 0;
        this.date = new Date();
        this.finalPrice = 0;
    }
}
