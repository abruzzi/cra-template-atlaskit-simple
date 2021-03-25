const fs = require('fs');

const deps = require('./deps.json');
const template = require('./template.json');

template.package.dependencies = deps.dependencies;
    
fs.writeFile('./template.json', JSON.stringify(template, null, 2), function (err) {
  if (err) return console.log(err);
});