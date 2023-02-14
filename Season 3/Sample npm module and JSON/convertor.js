const papa = require('papaparse')
const fs = require('fs')

const csvToJson = (FilePath) => {
    return new Promise((resolve) => {
        const csvFile = fs.readFileSync(FilePath).toString()
        papa.parse(csvFile, {
            header: true,
            complete: (result) => {
                resolve(result.data)
            },
        })
    })
}

module.exports = csvToJson
