import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Product} from './product.model';
import {CarouselModule} from 'angular2-carousel';

@NgModule({
    imports: [
        CommonModule,
        CarouselModule
    ]
})
export class ProductModule {

}

