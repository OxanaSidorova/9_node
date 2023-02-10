# 1. Instruction for testing calculate Bonus function

## Instruction about installation and tests running on Jest

### Prepare he package node.js and framework Jest
1. Check if the package node.js was install. Run the command node -v
2. Initialise the project: npm init and install it with the command nom install —save-dev jest
3. Editing package.json to run it from the command line.

### Preparation and running tests
1. Create a function for testing debug .js
2. Create a file with extension test.js = debug.test.js
3. Export testing function with command: module.export = calculateBonus
4.Import tests with the function: const calculateBonus = require('../debug')
5. Create testing functions :
   - first test checks the happy path with correct results calculating bonus
   - second test -  sad path
   
6. Run the test with command npm run test 

