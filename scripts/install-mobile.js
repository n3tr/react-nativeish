var {execSync} = require('child_process')
var reactVersion = execSync('yarn list react -s') + ''
var {green} = require('chalk')
if (!reactVersion.match('alpha')) {
  console.log('')
  console.log(green('------------- restoring mobile dependencies -------------'))
  console.log('')
  execSync('yarn add react@16.0.0-alpha.12 react-dom@16.0.0-alpha.12 react-test-renderer@16.0.0-alpha.12 --silent', {stdio: [0, 1, 2]})
}
