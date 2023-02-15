const parser = require('papaparse')
const fs = require('fs')

const csvTojson = (filePath) => {
  return new Promise((resolve) => {
    const csvFile = fs.readFileSync(filePath).toString()
    parser.parse(csvFile, {
      header: true,
      complete: (result) => { resolve(result.data) }
    })
  })
}

module.exports = csvTojson
