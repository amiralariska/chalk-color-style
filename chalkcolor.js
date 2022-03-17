var chalk = require("chalk");
// color style
/**
 * Create A Done Color
 * @type {done} create a done color
 */
function done() {
    var completed = chalk.hex("#fff").bgHex("#0f0")("\xa0DONE\xa0");
    console.log(`${completed} Creating project done`);
}
/**
 * Create A Failed Color
 * @type {failed} create a failed color
 */
function failed() {
    var error = chalk.hex("#fff").bgHex("#f00")("\xa0FAILED\xa0");
    console.log(`${error} Failed creating project`);
}
/**
 * Create A Warning Color
 * @type {warning} create a warning color
 */
function warning() {
    var warned = chalk.hex("#fff").bgHex("#ff0")("\xa0WARNING\xa0");
    console.log(`${warned} Your project is not created`);
}
/**
 * Create A Info Color
 * @type {info} create a info color
 */
function info() {
    var info = chalk.hex("#fff").bgHex("#00f")("\xa0INFO\xa0");
    console.log(`${info} Please info if your project is done`);
}
// custom color style
/**
 * Create A Blank Done Color
 * @type {blankdone} create a blank done color
 */
function blankdone() {
    var completedgreen = chalk.hex("#fff").bgHex("#0f0")("\xa0DONE\xa0");
    return completedgreen;
}
/**
 * Create A Blank Failed Color
 * @type {blankfailed} create a blank failed color
 */
function blankfailed() {
    var errorred = chalk.hex("#fff").bgHex("#f00")("\xa0FAILED\xa0");
    return errorred;
}
/**
 * Create A Blank Warning Color
 * @type {blankwarning} create a blank warning color
 */
function blankwarning() {
    var warnedyellow = chalk.hex("#fff").bgHex("#ff0")("\xa0WARNING\xa0");
    return warnedyellow;
}
/**
 * Create A Blank Info Color
 * @type {blankinfo} create a blank info color
 */
function blankinfo() {
    var infoblue = chalk.hex("#fff").bgHex("#00f")("\xa0INFO\xa0");
    return infoblue;
}
// custom console.log
/**
 * Create A Custom console.log
 * @param {log} log - create a custom console.log
 */
const log = console.log;
// custom hex color and background hex color
/**
 * Create A Custom Hex Color
 * @param {hex} hex - create a custom hex color
 */
const hex = chalk.hex;
/**
 * Create A Custom Hex Background Color
 * @param {bghex} bghex - create a custom hex background color
 */
const bghex = chalk.bgHex;
// custom rgb color and background hex color
/**
 * Create A Custom Rgb Color
 * @param {rgb} rgb - create a custom rgb color
 */
const rgb = chalk.rgb;
/**
 * Create A Custom Rgb Background Color
 * @param {bgrgb} bgrgb - create a custom bgrgb background color
 */
const bgrgb = chalk.bgRgb;
// custom text style
/**
 * Make The Text Bold.
 * @param {bold} bold - make the text bold.
 */
const bold = chalk.bold;
/**
 * Make The Text Have Lower Opacity.
 * @param {dim} dim - make the text have lower opacity.
 */
const dim = chalk.dim;
/**
 * Put A Horizontal Line Below The Text.
 * @param {underline} underline - put a horizontal line below the text.
 */
const underline = chalk.underline;
/**
 * Invert background and foreground colors.
 * @param {inverse} inverse - invert background and foreground colors.
 */
const inverse = chalk.inverse;
// custom color pallete
/**
 * White Text Color
 * @param {white} white - white text color
 */
const white = chalk.hex("#fff");
/**
 * Black Text Color
 * @param {black} black - black text color
 */
const black = chalk.hex("#000");
/**
 * Gray Text Color
 * @param {gray} gray - gray text color
 */
const gray = chalk.hex("#808080");
/**
 * Red Text Color
 * @param {red} red - red text color
 */
const red = chalk.hex("#f00");
/**
 * Blue Text Color
 * @param {blue} blue - blue text color
 */
const blue = chalk.hex("#00f");
/**
 * Green Text Color
 * @param {green} green - green text color
 */
const green = chalk.hex("#0f0");
/**
 * Yellow Text Color
 * @param {yellow} yellow - yellow text color
 */
const yellow = chalk.hex("#ff0");
/**
 * Magenta Text Color
 * @param {magenta} magenta - magenta text color
 */
const magenta = chalk.hex("#f0f");
/**
 * Cyan Text Color
 * @param {cyan} cyan - cyan text color
 */
const cyan = chalk.hex("#0ff");
// custom bright color pallete
/**
 * Bright White Text Color
 * @param {whitebright} whitebright - bright white text color
 */
const whitebright = chalk.hex("#f2f2f2");
/**
 * Bright Black Text Color
 * @param {blackbright} blackbright - bright black text color
 */
const blackbright = chalk.hex("#767676");
/**
 * Bright Gray Text Color
 * @param {graybright} graybright - bright gray text color
 */
const graybright = chalk.hex("#9f9f9f");
/**
 * Bright Red Text Color
 * @param {redbright} redbright - bright red text color
 */
const redbright = chalk.hex("#e74856");
/**
 * Bright Green Text Color
 * @param {greenbright} greenbright - bright green text color
 */
const greenbright = chalk.hex("#16c60c");
/**
 * Bright Blue Text Color
 * @param {bluebright} bluebright - bright blue text color
 */
const bluebright = chalk.hex("#3a76fb");
/**
 * Bright Yellow Text Color
 * @param {yellowbright} yellowbright - bright yellow text color
 */
const yellowbright = chalk.hex("#f5eda2");
/**
 * Bright Magenta Text Color
 * @param {magentabright} magentabright - bright magenta text color
 */
const magentabright = chalk.hex("#b1009c");
/**
 * Bright Cyan Text Color
 * @param {cyanbright} cyanbright - Bright Cyan Text Color
 */
const cyanbright = chalk.hex("#5fd2d2");
// custom background color pallete
/**
 * White Text Background Color
 * @param {bgwhite} whitebright - white text background color
 */
const bgwhite = chalk.bgHex("#fff");
/**
 * Black Text Background Color
 * @param {bgblack} bgblack - black text background color
 */
const bgblack = chalk.bgHex("#000");
/**
 * Gray Text Background Color
 * @param {bggray} bggray - gray text background color
 */
const bggray = chalk.bgHex("#808080");
/**
 * Red Text Background Color
 * @param {bgred} bgred - red text background color
 */
const bgred = chalk.bgHex("#f00");
/**
 * Green Text Background Color
 * @param {bggreen} bggreen - green text background color
 */
const bggreen = chalk.bgHex("#0f0");
/**
 * Blue Text Background Color
 * @param {bgblue} bgblue - blue text background color
 */
const bgblue = chalk.bgHex("#00f");
/**
 * Yellow Text Background Color
 * @param {bgyellow} bgyellow - Yellow Text Background Color
 */
const bgyellow = chalk.bgHex("#ff0");
/**
 * Magenta Text Background Color
 * @param {bgmagenta} bgmagenta - magenta text background color
 */
const bgmagenta = chalk.bgHex("#f0f");
/**
 * Cyan Text Background Color
 * @param {bgcyan} bgcyan - cyan text background color
 */
const bgcyan = chalk.bgHex("#0ff");
// custom bright background color pallete
/**
 * Bright White Text Background Color
 * @param {bgwhitebright} bgwhitebright - bright white text background color
 */
const bgwhitebright = chalk.bgHex("#f2f2f2");
/**
 * Bright Black Text Background Color
 * @param {bgblackbright} bgblackbright - bright black text background color
 */
const bgblackbright = chalk.bgHex("#767676");
/**
 * Bright Gray Text Background Color
 * @param {bggraybright} bggraybright - bright black text background color
 */
const bggraybright = chalk.bgHex("#9f9f9f");
/**
 * Bright Red Text Background Color
 * @param {bgredbright} bgredbright - bright red text background color
 */
const bgredbright = chalk.bgHex("#e74856");
/**
 * Bright Green Text Background Color
 * @param {bggreenbright} bggreenbright - bright green text background color
 */
const bggreenbright = chalk.bgHex("#16c60c");
/**
 * Bright Blue Text Background Color
 * @param {bgbluebright} bgbluebright - bright blue text background color
 */
const bgbluebright = chalk.bgHex("#3a76fb");
/**
 * Bright Yellow Text Background Color
 * @param {bggreenbright} bggreenbright - bright yellow text background color
 */
const bgyellowbright = chalk.bgHex("#f5eda2");
/**
 * Bright Magenta Text Background Color
 * @param {bgmagentabright} bgmagentabright - bright magenta text background color
 */
const bgmagentabright = chalk.bgHex("#b1009c");
/**
 * Bright Cyan Text Background Color
 * @param {bgcyanbright} bgcyanbright - bright cyan text background color
 */
const bgcyanbright = chalk.bgHex("#5fd2d2");
// export function and const
module.exports = {
    done, failed, warning, info,
    blankdone, blankfailed, blankwarning, blankinfo,
    // hex and rgb
    hex, bghex, rgb, bgrgb,
    // text style
    bold, dim, underline, inverse,
    // text color
    white, black, gray, red, green,
    blue, yellow, magenta, cyan, /* text bright color */ whitebright, 
    blackbright, graybright, redbright, greenbright, bluebright,
    yellowbright, magentabright, cyanbright,
    // text background color
    bgwhite, bgblack, bggray, bgred, bggreen,
    bgblue, bgyellow, bgmagenta, bgcyan, /* text bright color */ bgwhitebright,
    bgblackbright, bggraybright, bgredbright, bgbluebright, bggreenbright,
    bgyellowbright, bgmagentabright, bgcyanbright,
    // console.log
    log
};