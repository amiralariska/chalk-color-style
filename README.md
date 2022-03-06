# Chalk Color Style
Color Style For Chalk<br>
Chalk Color Style is a color style for chalk
## Install
```sh
npm install chalk-color-style
```
## Install Chalk 4
```sh
npm install chalk@4.1.1
```
## Usage
```javascript
var chalkcolor = require('chalk-color-style');
chalkcolor.done();
```
## Custom text `console.log`
```javascript
var chalkcolor = require('chalk-color-style');
chalkcolor.log(`
${chalkcolor.blankdone()} Creating new html file done
`);
```
or
```javascript
var chalk = require('chalk');
var chalkcolor = require('chalk-color-style');
chalkcolor.log(`
${chalkcolor.blankdone()} 
${chalk.hex('#0f0')('Creating new html file done')}
`);
```
## API
### chalkcolor.`<function>(string)`
### chalkcolor.done
Specifies the done color for color support 
### chalkcolor.failed
Specifies the failed color for color support
### chalkcolor.warning
Specifies the warning color for color support 
### chalkcolor.info
Specifies the info color for color support
### chalkcolor.blankdone
Specifies the blank done color for color support 
### chalkcolor.blankfailed
Specifies the blank failed color for color support
### chalkcolor.blankwarning
Specifies the blank warning color for color support 
### chalkcolor.blankinfo
Specifies the blank info color for color support
### chalkcolor.log
Specifies the custom console.log for the console of color support