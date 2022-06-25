type UserType = {
    name: string,
    age: number,
    skills: string[]
}

type RoleType = {
    name: string,
    id: number
}

type UserWithRole = {
    user: UserType,
    role: RoleType
}

let user: UserWithRole = {
    user: {
        name: 'user',
        age: 33,
        skills: ['dev', 'ops']
    },
    role: {
        name: 'devops',
        id: 1
    }
}