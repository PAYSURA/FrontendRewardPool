export class User {

    public email: string;
    public username: string;
    public firstname: string;
    public lastname: string;
    public password: string;

    constructor() {
        this.email = '';
        this.password = '';
        this.firstname = '';
        this.lastname = '';
        this.username = '';
    }

    public isEmpty() {
        return !(this.email.length > 0 && this.username.length > 0 &&
            this.firstname.length > 0 && this.lastname.length > 0 && this.password.length > 0);
    }
}
