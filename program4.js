var fs = require('fs')
fs.readFile(process.argv[2], 'utf-8', function (err, data) {
    if (err) { console.log('err?', err) }
    else {
        var inStringArr = data.split('\n')
    }
    console.log(inStringArr.length - 1)
})

