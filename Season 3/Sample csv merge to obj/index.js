const csvTOarray = require('./ArrayGenerator')
const productsListMaker = require('./productObjMaker')

const arrayMaker = async () => {
  const data = await csvTOarray('./Datas')
  return productsListMaker(data)
}

arrayMaker().then(console.log)
