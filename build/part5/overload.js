"use strict";
class NewUser {
    constructor(skills) {
        this.skills = [];
        this.skills = skills;
    }
    addSkill(skills) {
        if (typeof skills == 'string') {
            this.skills.push(skills);
        }
        else {
            this.skills.concat(skills);
        }
    }
}
