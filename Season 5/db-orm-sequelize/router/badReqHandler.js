const badReq = (req, res) => {
  res.status(400).send('this is bad request')
}

module.exports = badReq
