var chalk = require("chalk");
// color style
function done() {
    var completed = chalk.hex('#fff').bgHex('#0f0')('\xa0DONE\xa0');
    console.log(`${completed} Creating project done`);
}
function failed(){
    var error = chalk.hex('#fff').bgHex('#f00')('\xa0FAILED\xa0');
    console.log(`${error} Failed creating project`);
}
function warning(){
    var warned = chalk.hex('#fff').bgHex('#ff0')('\xa0WARNING\xa0');
    console.log(`${warned} Your project is not created`);
}
function info(){
    var info = chalk.hex('#fff').bgHex('#00f')('\xa0INFO\xa0');
    console.log(`${info} Please info if your project is done`);
}
// custom color style
function blankdone() {
    var completedgreen = chalk.hex('#fff').bgHex('#0f0')('\xa0DONE\xa0');
    return completedgreen;
}
function blankfailed(){
    var errorred = chalk.hex('#fff').bgHex('#f00')('\xa0FAILED\xa0');
    return errorred;
}
function blankwarning(){
    var warnedyellow = chalk.hex('#fff').bgHex('#ff0')('\xa0WARNING\xa0');
    return warnedyellow;
}
function blankinfo(){
    var infoblue = chalk.hex('#fff').bgHex('#00f')('\xa0INFO\xa0');
    return infoblue;
}
// custom console.log
const log = console.log;
// export function
module.exports = {
    done,
    failed,
    warning,
    info,
    blankdone,
    blankfailed,
    blankwarning,
    blankinfo,
    log
}