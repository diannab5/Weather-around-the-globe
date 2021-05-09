const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();
const port = process.env.PORT || 3000; //Getting port number from heroku, sets port = 3000 if not assigned by heroku

//Defines path for express config
const publicDir = path.join(__dirname, "../public");
const viewPaths = path.join(__dirname, "../templates/views");
const partialPaths = path.join(__dirname, "../templates/partials");

//geocode and forecast
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

//Setup handle bar engine and views location
app.set("view engine", "hbs");
app.set("views", viewPaths);
hbs.registerPartials(partialPaths);

//setup public dir
app.use(express.static(publicDir));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather Around the World",
    name: "Diana",
  });
});
app.get("/about", (req, res) => {
  res.render("about", {
    title: "Weather Around the World",
    name: "Diana",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({ error: "No addres sended" });
  }

  geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return res.send({ error });
    }
    forecast(latitude, longitude, (error, data2) => {
      if (error) {
        return res.send({ error });
      }
      res.send({
        forecast: data2,
        location: location,
        address: req.query.address,
      });
    });
  });
});

app.get("/help/*", (req, res) => {
  res.render("noexists");
});
app.get("*", (req, res) => {
  res.render("404");
});

app.listen(port, () => {
  console.log("Listening on!");
});
