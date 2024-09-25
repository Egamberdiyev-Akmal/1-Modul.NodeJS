const Events = require('events')
class Logger extends Events {
    log(a, b) {
        this.emit('calculate', a + b)
    }
}
const loger = new Logger()
loger.on('calculate', data => {
    console.log(data)
})

loger.log(10, 20)