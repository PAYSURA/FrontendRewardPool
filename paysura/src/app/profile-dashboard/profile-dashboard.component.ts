import {Component, OnInit} from '@angular/core';
import {Order} from '../model/order/order.model';
import {Product} from '../product/product.model';
import {UserService} from '../user.service';

@Component({
    selector: 'app-profile-dashboard',
    templateUrl: './profile-dashboard.component.html',
    styleUrls: ['./profile-dashboard.component.css'],
    providers: [UserService]
})
export class ProfileDashboardComponent implements OnInit {

    orders: Order[] = [];

    constructor(private userService: UserService) {
        const o1 = new Order();
        o1.product = new Product('Samsung 4K TV', 'lorem ipsum', 'assets/img/products/samsung-curved-tv.png',
            690, 700, '100%', '235px');
        o1.size = 3;
        o1.finalPrice = o1.size * o1.product.price;
        o1.date = new Date();
        const o2 = new Order();
        o2.product = new Product('IPhone X', 'lorem ipsum', 'assets/img/products/iPhoneX_asset.png',
            990, 1000, '100%', '275px');
        o2.size = 1;
        o2.finalPrice = o2.size * o2.product.price;
        o2.date = new Date();
        const o3 = new Order();
        o3.product = new Product('Final Fantasy 15', 'lorem ipsum', 'assets/img/products/iPhoneX_asset.png',
            40, 45, '100%', '275px');
        o3.size = 1;
        o3.finalPrice = o3.size * o3.product.price;
        o3.date = new Date();

        const o4 = new Order();
        o4.product = new Product('Simon Becket - Book', 'lorem ipsum', 'assets/img/products/iPhoneX_asset.png',
            15, 16, '100%', '275px');
        o4.size = 2;
        o4.finalPrice = o4.size * o4.product.price;
        o4.date = new Date();

        this.orders.push(o1);
        this.orders.push(o2);
        this.orders.push(o3);
        this.orders.push(o4);
    }

    ngOnInit() {
        const logged = this.userService.isLogged();
        if (!logged) {
            window.location.href = '/';
        }
    }

}
