const csvTOarray = require('./ArrayGenerator')
const productsListMaker = require('./productObjMaker')
const jsonTOcsv = require('./jsonTOcsv')

const arrayMaker = async () => {
  const data = await csvTOarray('./Datas')
  return jsonTOcsv(productsListMaker(data))
}

arrayMaker().then(console.log)
