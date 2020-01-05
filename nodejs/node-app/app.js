const chalk = require('chalk')
const getNotes = require('./notes.js')

const msg = getNotes()

console.log(msg)

console.log(chalk.green('Success'))

const msgRed = chalk.red.inverse.italic('Sneha')
console.log(msgRed)

//const add = require('./utils.js')

//const sum = add(-4, 6)

//console.log(sum)