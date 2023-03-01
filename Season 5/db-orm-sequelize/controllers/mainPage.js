const mainPage = (req, res) => {
  res.render('Page', {
    pageTitle: 'HomePage',
    pageText: 'lorem'
  })
}

module.exports = mainPage
