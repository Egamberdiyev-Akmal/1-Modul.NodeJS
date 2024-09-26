const http = require('http')
const server = http.createServer((request, response) => {
    if (request.method === "GET")
        response.writeHead(200, { 'Content-type': 'text/html' })
    response.end(`
    <h1>Send email</h1>
    <form method="post" action="/">
     <input name="email" type="email">
     <button type="submit">Send email</button>
    </form>
    `)
})

server.listen(3000, () => {
    console.log('Server has been started on port:3000')
})