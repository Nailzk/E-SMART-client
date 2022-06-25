//Script help you to migrate from tslint to eslint
//script works only if cli generating library in kebab-case and app project includes tslint.json
//Keep in mind that node child process load you processor !!!!!
const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');

// const excludedProjects = ["base-components", 'follows', 'market-chart', 'notifier', 'set-stop-loss', 'top-movers']

fs.readdir(path.resolve(__dirname, 'projects'), (err, files) => {
  files.forEach((file) => {
    // if (!excludedProjects.includes(file)) {
    const pathJoin = path.join(__dirname, 'projects', file, '.eslintrc.json');
    const res = fs.existsSync(pathJoin);
    if (!res) {
      execSync(
        `ng g @angular-eslint/schematics:add-eslint-to-project ${file}`,
        (err, out, stdErr) => {}
      );
    }
    // }
  });
});
