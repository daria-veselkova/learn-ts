"use strict";
class OldUser {
    constructor(login, password, createdAt) {
        this._login = login;
        this._password = password;
        this.createdAt = createdAt;
    }
    set login(login) {
        this._login = 'user-' + login;
    }
    get login() {
        return this._login;
    }
    async getPassword(password) { }
}
const old_user = new OldUser('login', 'pass');
old_user.login = 'new-login';
console.log(old_user);
console.log(old_user.login);
