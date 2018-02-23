import {Injectable} from '@angular/core';
import {User} from './model/user/user.model';

@Injectable()
export class UserService {

    private users: User[] = [];

    constructor() {
    }

    public addUser(data: any) {
        this.users.push(data);
    }

    public findUser(email: string, password: string) {

    }

}
