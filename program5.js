var fs = require('fs')
var path = require('path')
fs.readdir(process.argv[2], function (err, files){
    if (err){
        console.log('err?', err)
    }
    for ( var i = 0 ; i < files.length ; i++){
        if (path.extname(files[i]) === '.' + process.argv[3]){
            console.log(files[i])
        }
    }
})