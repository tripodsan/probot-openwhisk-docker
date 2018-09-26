
const exec = require('child_process').exec;
const fs = require('fs');

async function npmLs() {
  return new Promise((resolve, reject) => {
    exec('npm list --json --long --depth=0 --prod', {
      maxBuffer: 1024*1024*10,
    }, (error, stdout) => {
      if (error) {
        return reject(error);
      }
      return resolve(JSON.parse(stdout));
    });
  });
}
async function run() {
  const ls = await npmLs();
  let out = '### Dependencies\n<!-- the list below is automatically generated during the build -->\n\n';
  Object.keys(ls.dependencies).forEach((name) => {
    const dep = ls.dependencies[name];
    out += `### ${name}@${dep.version}\n`;
    out += `\n> ${dep.description}\n`;
    if (dep.homepage) {
      out += `> [homepage](${dep.homepage})\n`;
    }
    out += '\n\n';
  });

  let readme = fs.readFileSync('README.md', 'utf-8');
  readme = readme.replace(/(### Dependencies)([\s\S]*)/, out);
  fs.writeFileSync('README.md', readme, 'utf-8');
  return 'updated README.md';
}


run().then(console.log).catch(console.error);
