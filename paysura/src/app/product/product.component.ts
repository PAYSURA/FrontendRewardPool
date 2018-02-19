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
        new Product('Samsung 4K TV', 'lorem ipsum', 'assets/img/products/samsung-curved-tv.png', 690, 700, '100%', '235px'),
        new Product('IPhone X', 'lorem ipsum', 'assets/img/products/iPhoneX_asset.png', 990, 1000, '100%', '275px'),
        new Product('Playstation 4 Pro', 'lorem ipsum', 'assets/img/products/PlayStation_4_Trasparent.png', 390, 400, '95%', '275px'),
        new Product('Microsoft Surface', 'lorem ipsum', 'assets/img/products/588526fb6f293bbfae451a3a.png', 390, 400, '100%', '255px')
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
