const fs = require('fs');

const deps = require('./deps.json');
const template = require('./template.json');

template.package.dependencies = deps.dependencies;
    
console.log('updating template.json');

fs.writeFileSync('./template.json', JSON.stringify(template, null, 2));

console.log('updated template.json');