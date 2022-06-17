var skills = ['dev', 'devops', 'testing', 'front'];
for (var _i = 0, skills_1 = skills; _i < skills_1.length; _i++) {
    var skill = skills_1[_i];
    console.log(skill.toLowerCase());
}
var res = skills
    .filter(function (s) { return s !== 'dev'; })
    .map(function (s) { return s + '! '; })
    .reduce(function (a, b) { return a + b; });
console.log(res);
