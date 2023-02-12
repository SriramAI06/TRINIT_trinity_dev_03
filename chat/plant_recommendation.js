const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Plant Recommendations</title>
      </head>
      <body>
        <h1>Plant Recommendations for Your Location</h1>
  
        <form action="/" method="post">
          <label for="location">Enter Your Location:</label>
          <input type="text" id="location" name="location">
          <input type="submit" value="Submit">
        </form>
  
        <section id="recommendations">
        </section>
      </body>
    </html>
  `);
});

app.post("/", (req, res) => {
  const location = req.body.location;
  const recommendedPlants = getRecommendedPlants(location);
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Plant Recommendations</title>
      </head>
      <body>
        <h1>Plant Recommendations for Your Location</h1>
  
        <form action="/" method="post">
          <label for="location">Enter Your Location:</label>
          <input type="text" id="location" name="location">
          <input type="submit" value="Submit">
        </form>
  
        <section id="recommendations">
          ${recommendedPlants}
        </section>
      </body>
    </html>
  `);
});

function getRecommendedPlants(location) {
  if (location === "Seattle") {
    return "Salal, Sword Fern, Western Red Cedar";
  } else if (location === "Miami") {
    return "Cocoplum, Sea Grape, Thatch Palm";
  } else {
    return "Sorry, we don't have recommendations for your location.";
  }
}

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
