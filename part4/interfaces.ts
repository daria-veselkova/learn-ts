interface UserInterface {
    name: string,
    age: number,
    skills: string[]

    log: (id: number) => string;
}

interface RoleInterface {
    roleId: number
}

interface UserWithRoleInterface extends UserInterface, RoleInterface {
    createdDate: Date
}

let new_user: UserWithRoleInterface = {
    name: 'user',
    age: 23,
    skills: ['dev', 'rel'],
    roleId: 2,
    createdDate: new Date(),

    log(id) {
        return 'userlog';
    }
}