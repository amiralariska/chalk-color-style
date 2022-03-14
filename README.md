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
or this
```javascript
var chalkcolor = require('chalk-color-style');
chalkcolor.log(`
${chalkcolor.blankdone()} 
${chalkcolor.hex('#0f0')('Creating new html file done')}
`);
```
or this to install chalk
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
Example: `chalkcolor.blue('Hello world!');`
## API Done, Failed, Warning And Info
### chalkcolor.done
Specifies the done color for color support 
### chalkcolor.failed
Specifies the failed color for color support
### chalkcolor.warning
Specifies the warning color for color support 
### chalkcolor.info
Specifies the info color for color support
## API Done Blank, Failed Blank, Warning Blank And Info Blank
### chalkcolor.blankdone
Specifies the blank done color for color support 
### chalkcolor.blankfailed
Specifies the blank failed color for color support
### chalkcolor.blankwarning
Specifies the blank warning color for color support 
### chalkcolor.blankinfo
Specifies the blank info color for color support
## API Log
### chalkcolor.log
Specifies the custom console.log for the console of color support
## Text Colors And Format Styles
### Text Format
- `bold` - Make the text bold.
- `dim` - Make the text have lower opacity.
- `underline` - Put a horizontal line below the text.
- `inverse`- Invert background and foreground colors.
### Text Colors
- `white`
- `black`
- `gray`
- `red`
- `blue`
- `green`
- `yellow`
- `magenta`
- `cyan`
- `whitebright`
- `blackbright` (alias: `gray`, `grey`)
- `graybright`
- `redbright`
- `greenbright`
- `bluebright`
- `yellowbright`
- `magentabright`
- `cyanbright`
### Text Background colors
- `bgwhite`
- `bgblack`
- `bggray`
- `bgred`
- `bgblue`
- `bggreen`
- `bgyellow`
- `bgmagenta`
- `bgcyan`
- `bgwhitebright`
- `bgblackbright` (alias: `bggray`, `bggrey`)
- `bggraybright`
- `bgredbright`
- `bgbluebright`
- `bggreenbright`
- `bgyellowbright`
- `bgmagentabright`
- `bgcyanbright`
## Hex And Rgb Colors
Chalk Color Style supports hex and rgb colors<br>
Examples:
- `chalkcolor.hex('#0000a5').bold('Hello world!')`
- `chalkcolor.rgb(0, 0, 165).underline('Hello world!')`

Background versions of these models are prefixed with `bg` and the first level of the module capitalized (e.g. `hex` for foreground colors and `bghex` for background colors).

- `chalkcolor.bghex('#0000a5').bold('Hello world!')`
- `chalkcolor.bgrgb(0, 0, 165).underline('Hello world!')`

The following color models can be used:

- [`rgb`](https://en.wikipedia.org/wiki/RGB_color_model)<br>
Example: `chalkcolor.rgb(0, 0, 165).underline('Hello world!')`
- [`hex`](https://en.wikipedia.org/wiki/Web_colors#Hex_triplet)<br>
Example: `chalkcolor.hex('#0000a5').bold('Hello world!')`