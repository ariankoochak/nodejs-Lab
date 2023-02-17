const Parser = require('papaparse')
const fs = require('fs')

const jsonToCsv = async (data) => {
  const csv = await Parser.unparse({
    fields: ['Sku', 'Description'],
    data: data.map((product) => {
      console.log(product)
      return {
        Sku: product.sku,
        Description: product.Description
      }
    })
  })
  await fs.writeFileSync('./datas/Result/exp.csv', csv)
}

module.exports = jsonToCsv
