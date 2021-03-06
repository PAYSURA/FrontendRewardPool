import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ProductModule} from './product/product.module';
import {ProductComponent} from './product/product.component';
import {SpecialOffersComponent} from './special-offers/special-offers.component';
import {AppRoutingModule} from './/app-routing.module';
import {LoginComponent} from './login/login.component';
import {AppheaderComponent} from './appheader/appheader.component';
import {HomeComponent} from './home.component';
import {RegisterComponent} from './register/register.component';
import {ProfileDashboardComponent} from './profile-dashboard/profile-dashboard.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BusyModule} from 'angular2-busy';
import {JasperoAlertsModule} from '@jaspero/ng2-alerts/dist';


@NgModule({
    declarations: [
        AppComponent,
        ProductComponent,
        SpecialOffersComponent,
        LoginComponent,
        AppheaderComponent,
        HomeComponent,
        RegisterComponent,
        ProfileDashboardComponent,
    ],
    imports: [
        JasperoAlertsModule,
        HttpClientModule,
        BrowserModule,
        ProductModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        BusyModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}
