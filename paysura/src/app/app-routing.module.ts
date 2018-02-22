import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AppComponent} from './app.component';
import {HomeComponent} from './home.component';
import {RegisterComponent} from './register/register.component';
import {ProfileDashboardComponent} from './profile-dashboard/profile-dashboard.component';

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: '', component: HomeComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'profile/dashboard', component: ProfileDashboardComponent},
];


@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forRoot(routes)
    ]
})
export class AppRoutingModule {


}
