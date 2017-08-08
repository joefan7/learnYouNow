var outTotal = 0
for (var i = 2; i < process.argv.length; i++) {
    outTotal = outTotal + Number(process.argv[i])
}
console.log(outTotal)