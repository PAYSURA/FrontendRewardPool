import {Injectable} from '@angular/core';
import {User} from './model/user/user.model';

@Injectable()
export class UserService {

    constructor() {
    }

    public addUser(data: any) {
        let arr = this.getLocalData();
        if (arr == null) {
            arr = new Array();
        }
        arr.push(data);
        localStorage.setItem('users', JSON.stringify(arr));
    }

    private getLocalData() {
        const _data = localStorage.getItem('users');
        return JSON.parse(_data);
    }

    public findUser(email: string, password: string) {
        let result: User = null;
        const users = this.getLocalData();
        for (let i = 0; i < users.length; i++) {
            if (users[i].email === email && users[i].password === password) {
                result = users[i];
            }
        }
        return result;
    }

    public isLogged() {
        return ((window.sessionStorage.getItem('logged') === null ||
            typeof window.sessionStorage.getItem('logged') === 'undefined') ? false : true);
    }

    public logout() {
        window.sessionStorage.clear();
    }

}
