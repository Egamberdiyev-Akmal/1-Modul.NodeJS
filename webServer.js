const http = require('http')
const server = http.createServer((request, response) => {
    if (request.method === "GET") {
        response.writeHead(200, { 'Content-type': 'text/html' })
        response.end(`
            <h1>Send email name</h1>
            <form method="post" action="/">
            <input name="name" type="name" placeholder="Enter your email">
            <button type="submit">Send email</button>
            </form>
            `)
    } else if (request.method === "POST") {
        const body = []
        request.on('data', data => {
            body.push(Buffer.from(data))
        })
        request.on('end', () => {
            const messages = body.toString().split('=')[1]
            response.end(`Email successfully added: ${messages}`)
        })
    }
})

server.listen(3000, () => {
    console.log('Server has been started on port:3000')
})