declare class OldUser {
    _login: string;
    _password: string;
    createdAt?: Date | null;
    constructor(login: string, password: string, createdAt?: Date);
    set login(login: string);
    get login(): string;
    getPassword(password: string): Promise<void>;
}
declare const old_user: OldUser;
//# sourceMappingURL=get_set.d.ts.map