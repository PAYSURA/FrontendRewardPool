import {Component, OnInit} from '@angular/core';
import {Product} from './product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

    public carouselElements = [
        new Product('product 1', 'lorem ipsum', ''),
        new Product('product 2', 'lorem ipsum', ''),
        new Product('product 3', 'lorem ipsum', ''),
        new Product('product 4', 'lorem ipsum', ''),
        new Product('product 5', 'lorem ipsum', '')
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
