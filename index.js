const http = require('http')
const server = http.createServer((request, respose) => {
    // request - serverga surov yuborish
    // response - jovobini olish
    console.log(request.url)
    respose.write("Salom nima gaplar 22")
    respose.end()
})

server.listen(3000, () => {
    console.log('Server has been started on port:3000')
})