// semgrep bait — patterns à forte détection
const { exec } = require('child_process');

module.exports = (userInput) => {
  eval(userInput);            // eval-detected (p/javascript) — quasi garanti
  exec('ls ' + userInput);    // child_process / command injection
};
