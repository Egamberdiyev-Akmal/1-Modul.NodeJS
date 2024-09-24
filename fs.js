const fs = require('fs')
const path = require('path')

// fs.mkdir(path.join(__dirname, 'teplate'), err => {
//     if (err) throw new Error()
//     console.log('Folder was create successfully')
// })

// fs.mkdir(path.join(__dirname, 'nodes'), err => {
//     if (err) throw new Error()
//     console.log(err)
//     console.log('create new fail')
// })

fs.writeFile(path.join(__dirname, 'nodes', 'december.txt'), 'Create new coure NodeJS', err => {
    if (err) throw new Error()
    console.log('File was creade successfully')

    fs.appendFile(path.join(__dirname, 'nodes', 'december.txt'), 'and project', err => {
        if (err) throw new Error()

        console.log('successe fully')
    })
})