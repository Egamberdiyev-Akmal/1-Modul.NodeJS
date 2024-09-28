const fs = require('fs')
const path = require('path')


fs.writeFile(path.join(__dirname, 'nodes', 'december.txt'), 'Create new coure NodeJS', err => {
    if (err) throw new Error()
    console.log('File was creade successfully')

    fs.appendFile(path.join(__dirname, 'nodes', 'december.txt'), ' and project', err => {
        if (err) throw new Error()
        console.log('successe fully')

        fs.readFile(path.join(__dirname, 'nodes', 'december.txt'), "utf-8", (err, data) => {
            if (err) throw new Error()
            console.log(data)
        })
    })
})
