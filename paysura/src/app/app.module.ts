import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ProductModule} from './product/product.module';
import {ProductComponent} from './product/product.component';
import { SpecialOffersComponent } from './special-offers/special-offers.component';


@NgModule({
    declarations: [
        AppComponent,
        ProductComponent,
        SpecialOffersComponent,
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        ProductModule,
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}
