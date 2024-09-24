const path = require('path')

console.log(path.parse, __filename)
console.log(path.join(__dirname, 'teplates', 'index.html'))
console.log(path.resolve(__dirname, 'teplates', 'index.html'))