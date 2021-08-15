const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cookieParser());

// Update Express project to serve static files.
app.use(express.static("public"));

app.set("view engine", "pug");

const mainRoutes = require("./routes");
const getDataRoutes = require("./routes/getData");
const myNameRoutes = require("./routes/myName");
const trackNameRoutes = require("./routes/trackName");
app.use(mainRoutes);
app.use("/getData", getDataRoutes);
app.use("/myName", myNameRoutes);
app.use("/trackName", trackNameRoutes);

app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render("error");
});

app.listen(3000, () => {
  console.log("The application is running on localhost: 3000.");
});
