var fs = require('fs')
var inString = fs.readFileSync(process.argv[2],'utf-8').toString()
var inStringArr = inString.split('\n')
console.log(inStringArr.length - 1)

