class OldUser {
    _login: string;
    _password: string;
    createdAt?: Date | null;

    constructor(
        login: string,
        password: string,
        createdAt?: Date
    ) {
        this._login = login;
        this._password = password;
        this.createdAt = createdAt;
    }

    set login(login: string) {
        this._login = 'user-' + login;
    }

    get login() {
        return this._login;
    }

    async getPassword(password: string) {}
}


const old_user = new OldUser('login', 'pass');
old_user.login = 'new-login';
console.log(old_user);
console.log(old_user.login);
