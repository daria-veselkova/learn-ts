type User = {
    name: string,
    age: number,
    skills: string[]
}

type Role = {
    name: string,
    id: number
}

type UserWithRole = {
    user: User,
    role: Role
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