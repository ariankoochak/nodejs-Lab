const homepageController = (req, res) => {
  res.render("index", {
    title: "hamchenan Blyat",
    message:
      "Labore in id eu occaecat. Est veniam non ad laborum do id nulla minim labore culpa nisi cillum non commodo. Quis duis officia elit dolor. Minim elit irure ullamco proident minim ut in consectetur.",
    imgSrc: "http://localhost:3000/image/nodeImage.png",
  });
}

module.exports = homepageController
