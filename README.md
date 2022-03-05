# Chalk Color Style
Color Style For Chalk<br>
Chalk Color Style is a color style for chalk
# Install
`npm install chalk-color-style`
## Install Chalk 4
`npm install chalk@4.1.1`
# Usage
```javascript
var chalkcolor = require('chalk-color-style');
chalkcolor.done();
```
## Custom text `console.log`
```javascript
var chalkcolor = require('chalk-color-style');
chalkcolor.log(`${chalkcolor.blankdone()} Creating new html file done`);
```
or
```javascript
var chalk = require('chalk');
var chalkcolor = require('chalk-color-style');
chalkcolor.log(`${chalkcolor.blankdone()} ${chalk.hex('#0f0')('Creating new html file done')}`);
```
# API
**chalkcolor.`<function>(string)`**<br>
**chalkcolor.done**<br>
Specifies the done color for color support<br> 
**chalkcolor.failed**<br>
Specifies the failed color for color support<br>
**chalkcolor.warning**<br>
Specifies the warning color for color support<br> 
**chalkcolor.info**<br>
Specifies the info color for color support<br>
**chalkcolor.blankdone**<br>
Specifies the blank done color for color support<br> 
**chalkcolor.blankfailed**<br>
Specifies the blank failed color for color support<br>
**chalkcolor.blankwarning**<br>
Specifies the blank warning color for color support<br> 
**chalkcolor.blankinfo**<br>
Specifies the blank info color for color support<br>
**chalkcolor.log**<br>
Specifies the custom console.log for the console of color support<br>