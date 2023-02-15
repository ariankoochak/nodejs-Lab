const fs = require('fs')
const parser = require('papaparse')
const syncForEach = require('./asyncForEach')

const filesInFolder = (folderPath) => {
  return fs.readdirSync(folderPath)
}

const fileToArray = async (folderPath) => {
  const filesList = await filesInFolder(folderPath)
  const sources = arrayOfList(filesList)
  const data = []
  await syncForEach(sources, async (sourceName) => {
    data[sourceName] = []
    data[sourceName].catalog = await readCSVFile(`./Datas/catalog${sourceName}.csv`)
    data[sourceName].suppliers = await readCSVFile(
      `./Datas/suppliers${sourceName}.csv`
    )
    data[sourceName].barcodes = await readCSVFile(
      `./Datas/barcodes${sourceName}.csv`
    )
  })
  return data
}

const arrayOfList = (filesList) => {
  filesList = filesList.filter((fileName) => {
    return fileName.startsWith('catalog')
  })
  return filesList.map((fileName) => {
    return fileName.replace(/catalog|.csv/g, '')
  })
}

const readCSVFile = (FilePath) => {
  return new Promise((resolve) => {
    const csvFile = fs.readFileSync(FilePath).toString()
    parser.parse(csvFile, {
      header: true,
      complete: (result) => { resolve(result.data) }
    })
  })
}

module.exports = fileToArray
