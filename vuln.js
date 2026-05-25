// semgrep bait — command injection
const { exec } = require('child_process');
module.exports = (userInput) => exec('ls ' + userInput);
