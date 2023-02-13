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
# 2. Code coverage 
   **Code coverage**  is a software testing metric that determines the number of lines of code that is successfully validated under a test procedure, which in turn, helps in analyzing how comprehensively a software is verified.

   Two common forms of test coverage are statement (or line) coverage and branch (or edge) coverage. Line coverage reports on the execution footprint of testing in terms of which lines of code were executed to complete the test.

 *Function Coverage* – The functions in the source code that are called and executed at least once.

 *Statement Coverage* – The number of statements that have been successfully validated in the source code.

 *Path Coverage* – The flows containing a sequence of controls and conditions that have worked well at least once.

 *Branch or Decision Coverage* – The decision control structures (loops, for example) that have executed fine.

 *Condition Coverage* – The Boolean expressions that are validated and that executes both TRUE and FALSE as per the test runs.
 ## Coverage of the code  debug.js
 - >find `babel-plugin-istanbul`

 - >install it with  the command  `npm install --save-dev babel-plugin-istanbul`

 - >with tw commant `npx jest --coverage` run the plagin and get the results.

 ### Results
 1. The code was covered on 100% wiyj lines, brunches, statements and function
 2. Was over testing and as a result only 2 tests was left.

