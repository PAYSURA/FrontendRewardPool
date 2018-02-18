import {Component, OnInit} from '@angular/core';
import {Product} from './product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

    ipc_logo = 'assets/img/rsz_coin_logo.png';
    public carouselElements = [
        new Product('Samsung 4K TV', 'lorem ipsum', '', 690, 700),
        new Product('IPhone X', 'lorem ipsum', '', 990, 1000),
        new Product('Women - Sweater', 'lorem ipsum', '', 70, 80),
        new Product('Playstation 4 Pro', 'lorem ipsum', '', 390, 400)
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
