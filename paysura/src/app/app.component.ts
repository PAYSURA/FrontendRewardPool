import { Component } from '@angular/core';
import {Product} from '../app/product/product.model';


@Component( {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
} )
export class AppComponent{
    title = 'app';

    elemente = [
                new Product('produkt1',"lorem ipsum",'img/test.png');
    ];
}
