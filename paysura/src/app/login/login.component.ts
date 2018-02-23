import {Component, OnInit} from '@angular/core';
import {User} from '../model/user/user.model';
import {UserService} from '../user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [UserService]
})
export class LoginComponent implements OnInit {

    loginUser: User = new User();
    loader: boolean;

    constructor(private userService: UserService) {
    }

    private showLoader() {
        this.loader = true;
    }

    private hideLoader() {
        this.loader = false;
    }

    public login() {
        if (this.loginUser.password.length > 0 && this.loginUser.email.length > 0) {
            this.showLoader();
            const result = this.userService.findUser(this.loginUser.email, this.loginUser.password);
            if (result == null) {
                alert('Invalid login');
                this.hideLoader();
            } else {
                const func = this;
                setTimeout(function () {
                    window.sessionStorage.setItem('logged', '1');
                    window.sessionStorage.setItem('firstname', result.firstname);
                    window.sessionStorage.setItem('lastname', result.lastname);
                    window.sessionStorage.setItem('username', result.username);
                    window.sessionStorage.setItem('email', result.email);
                    func.hideLoader();
                    alert(1);
                }, 1000);

            }
        } else {
            this.hideLoader();
        }
    }

    ngOnInit() {
    }

}
