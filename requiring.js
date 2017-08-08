var path = require('path')
var myModule = require('./exporter')

var dir = process.argv[2]
var filterExtension = process.argv[3]

var callback = function (err, list) {
    if (err) console.log('err?', err)
    list.forEach(function (file) {
        console.log(file)
    })
}

myModule(dir, filterExtension, callback);