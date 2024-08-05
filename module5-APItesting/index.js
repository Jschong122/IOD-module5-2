// index.js - updated version
// import the app
const app = require("./app");
const swaggerUi = require("swagger-ui-express");
swaggerDocument = require("./swagger.json");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
const port = 3005;

// start the app to listen on the right port
app.listen(port, () => {
  console.log(`Example app listening at
http://localhost:${port}`);
});
