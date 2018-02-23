import {Component, OnInit} from '@angular/core';
import {User} from '../model/user/user.model';
import {UserService} from '../user.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
    providers: [UserService]
})
export class RegisterComponent implements OnInit {

    registerUser: User;
    loader: boolean;


    constructor(private userService: UserService) {
        this.registerUser = new User();
        this.hideLoader();
    }

    private showLoader() {
        this.loader = true;
    }

    private hideLoader() {
        this.loader = false;
    }

    public onRegister() {
        if (!this.registerUser.isEmpty()) {
            this.showLoader();
            this.userService.addUser(this.registerUser);
            setTimeout(function () {
                window.location.href = '/';
            }, 1000);
        }
    }

    ngOnInit() {

    }

}
