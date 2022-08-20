class NewUser {
    skills: string[] = [];

    constructor(skills: string[]) {
        this.skills = skills;
    }

    addSkill(skill: string): void;
    addSkill(skill: string[]): void;
    addSkill(skills: string | string[]): void {
        if (typeof skills == 'string') {
            this.skills.push(skills);
        } else {
            this.skills.concat(skills);
        }
    }
}
