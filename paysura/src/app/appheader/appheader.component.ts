import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';

@Component({
    selector: 'app-appheader',
    templateUrl: './appheader.component.html',
    styleUrls: ['./appheader.component.css'],
    providers: [UserService]
})
export class AppheaderComponent implements OnInit {

    isLogged = false;

    constructor(private userService: UserService) {
        this.isLogged = userService.isLogged();
    }

    public logout() {
        this.userService.logout();
        window.location.href = '/';
    }

    ngOnInit() {
    }

}
