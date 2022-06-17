const skills: string[] = ['dev', 'devops', 'testing', 'front']

for (const skill of skills) {
    console.log(skill.toLowerCase());
}

const res = skills
    .filter(s => s !== 'dev')
    .map(s => s + '! ')
    .reduce((a, b) => a + b);

console.log(res);
