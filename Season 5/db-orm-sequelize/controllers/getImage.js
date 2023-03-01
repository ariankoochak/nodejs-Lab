const getImage = (req, res) => {
  res.send(`
    <div>
        <img src='http://localhost:3000/images/nodeImage.png'>
    </div>
    `)
}

module.exports = getImage
