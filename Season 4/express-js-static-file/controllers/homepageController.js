const homepageController = (req, res) => {
  res.send(`
    <div>
    <img src="http://localhost:3000/image/nodeImage.png">
    </div>
  `);
}

module.exports = homepageController
