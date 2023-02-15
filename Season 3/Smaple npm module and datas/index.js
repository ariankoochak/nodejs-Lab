const FilesToArray = require('./FileHandler')

const runApp = async () => {
  return await FilesToArray('./Datas')
}

runApp().then(console.log)
