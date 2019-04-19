// #Author: Solid Snake
// My first ever commit, simply printing hello World in a variety of styles
// Color and design styles can be found on voidcanvas.com. 
// I do not own any rights to linked site and just used it for demonstration purposes. All credits go to them.
//
// The colors implementation came to me as a painpoint while going through live logs looking for a particular line among many. Highlighting the background made it easier!!!
// Have fun!!!


//Basic Hello World
console.log('Hello World');  

//Hello World with color
//\x1b[0m resets the terminal to normal after using the color. Start with %s
console.log('\x1b[31m%s\x1b[0m' ,'Hello World');    //Red color

//Hello world with color
console.log('\x1b[36m%s\x1b[0m', 'Hello World');    //Cyan color

//Hello World with background color
console.log('\x1b[41m%s\x1b[0m', 'Hello World');     //Red Background

//Using color module
var colors = require('colors');
console.log('The blues'.blue);
console.log('Feeling gray'.gray);
console.log('Red back'.bgRed);
console.log('Green with style'.bgYellow.italic.green);
console.log('Skittles'.rainbow);
console.log('Childish Gambino'.america);
console.log('BOOM'.bold.magenta);
console.log('CARTOON NETWORK'.zebra);
console.log('Inverse man!!!'.inverse);