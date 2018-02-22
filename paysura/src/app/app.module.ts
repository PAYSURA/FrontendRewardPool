import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ProductModule} from './product/product.module';
import {ProductComponent} from './product/product.component';
import { SpecialOffersComponent } from './special-offers/special-offers.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { AppheaderComponent } from './appheader/appheader.component';


@NgModule({
    declarations: [
        AppComponent,
        ProductComponent,
        SpecialOffersComponent,
        LoginComponent,
        AppheaderComponent,
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        ProductModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}
