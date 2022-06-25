const skill: any[] = [1, 'dev'];
const skill2: [number, string] = [2, 'ops'];


const id = skill2[0];
const skillName = skill2[1];

const arr: [number, string, ...boolean[]] = [1, 'dep', true, false];

const skill3: readonly [number, string] = [3, 'front'];
const skill4: ReadonlyArray<string> = ['end', 'back'];
