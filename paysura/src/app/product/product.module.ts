import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Product} from './product.model';

@NgModule({
    imports: [
        CommonModule
    ]
})
export class ProductModule {
    carouselElements = [
        new Product('product 1', 'lorem ipsum', ''),
        new Product('product 2', 'lorem ipsum', ''),
        new Product('product 3', 'lorem ipsum', ''),
        new Product('product 4', 'lorem ipsum', ''),
        new Product('product 5', 'lorem ipsum', '')
    ];
}

