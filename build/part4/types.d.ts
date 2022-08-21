declare type UserType = {
    name: string;
    age: number;
    skills: string[];
};
declare type RoleType = {
    name: string;
    id: number;
};
declare type UserWithRole = {
    user: UserType;
    role: RoleType;
};
declare let user: UserWithRole;
//# sourceMappingURL=types.d.ts.map