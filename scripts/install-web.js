var {execSync} = require('child_process')
var reactVersion = execSync('yarn list react -s') + ''
var {green} = require('chalk')
if (reactVersion.match('alpha')) {
  console.log('')
  console.log(green('------------- restoring web dependencies -------------'))
  console.log('')
  execSync('yarn add react@15.6 react-dom@15.6 react-test-renderer@15.6 --silent', {stdio: [0, 1, 2]})
}
