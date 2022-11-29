// config the .env file
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 4001;

// database sync
const db = require("./models");
db.sequelize
  .sync()
  .then(() => {
    console.log("Synced database.");
  })
  .catch((err) => {
    console.log("Failed to sync database: " + err.message);
  });

// Error Handler MiddleWare
const errorHandler = require("./middlewares/error.middleware");

// swaggerUI
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// swagger Options
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: process.env.NAME || "Practice API",
      version: "1.0.0",
    },
  },
  // ['app.js', '.routes/*.js']
  apis: ["app.js", "./routes/*.js", "./middleware/*.js", "./models/*.js"],
};

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);

// Use Routes
app.use(express.json());

// Redirect to the Documentation
app.get("/", function (req, res) {
  res.redirect("/doc");
});

app.use("/api/bin", require("./routes/bin.route"));
app.use("/api/user", require("./routes/user.route"));

// Add Swagger UI to Home Page
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(swaggerOptions)));

// Middleware Error Handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
