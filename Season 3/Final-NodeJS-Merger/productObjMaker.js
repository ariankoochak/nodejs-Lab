const products = []
const checker = (obj) => {
  for (const product of products) {
    if (obj.sku === product.sku) { return false }
  }
  return true
}

const ObjGenerator = (Array) => {
  for (const sourceName in Array) {
    for (const i of Array[sourceName].barcodes) {
      const obj = {}
      obj.Barcode = i.Barcode
      obj.sku = i.SKU
      obj.SupplierID = i.SupplierID
      for (const j of Array[sourceName].suppliers) {
        if (obj.SupplierID === j.ID) {
          obj.supplierName = j.Name
          break
        }
      }
      for (const k of Array[sourceName].catalog) {
        if (obj.sku === k.SKU) {
          obj.Description = k.Description
          break
        }
      }
      if (checker(obj)) { products.push(obj) }
    }
  }
  return products
}

module.exports = ObjGenerator
