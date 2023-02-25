const homepageController = (req, res) => {
  res.render("index", {
    title: "Hey",
    imageSource: "http://localhost:3000/image/nodeImage.png",
  });
}

module.exports = homepageController
