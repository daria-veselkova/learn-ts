interface UserInterface {
    name: string;
    age: number;
    skills: string[];
    log: (id: number) => string;
}
interface RoleInterface {
    roleId: number;
}
interface UserWithRoleInterface extends UserInterface, RoleInterface {
    createdDate: Date;
}
declare let new_user: UserWithRoleInterface;
//# sourceMappingURL=interfaces.d.ts.map