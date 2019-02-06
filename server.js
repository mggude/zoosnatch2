const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
const routes = require("./routes");
const session = require("express-session");
const passport = require("passport");
const logger = require("morgan");
const flash = require('connect-flash');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
app.use(flash())
app.use(express.static("public"));
app.use(session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true }
}));
app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
// app.use(routes);

// Connect to the Mongo DB
app.use(routes);

// Start the API server
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/zoosnatch2", { useNewUrlParser: true }, function(err) {
    if (err) throw err;
    console.log(`mongoose connection successful`);
    app.listen(PORT, (err)=> {
        if (err) throw err;
        console.log(`connected on port ${PORT}`)
    });
});