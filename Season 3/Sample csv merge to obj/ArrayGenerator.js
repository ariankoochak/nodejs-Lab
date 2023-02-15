// const parser = require('papaparse')
const fs = require('fs')
const syncForEach = require('./asyncForEach')
const readCSV = require('./CsvToJson')

const fileListMaker = (folderPath) => {
  return fs.readdirSync(folderPath)
}

const sourceFileMaker = (filesList) => {
  filesList = filesList.filter((fileName) => {
    return fileName.startsWith('catalog')
  })
  return filesList.map((fileName) => {
    return fileName.replace(/catalog|.csv/g, '')
  })
}

const arrayGenerator = async (folderPath) => {
  let filesList = fileListMaker(folderPath)
  filesList = sourceFileMaker(filesList)
  const data = []
  await syncForEach(filesList, async (source) => {
    data[source] = []
    data[source].catalog = await readCSV(`${folderPath}/catalog${source}.csv`)
    data[source].barcodes = await readCSV(`${folderPath}/barcodes${source}.csv`)
    data[source].suppliers = await readCSV(`${folderPath}/suppliers${source}.csv`)
  })
  return data
}

module.exports = arrayGenerator
