const cityController = require("../controllers/cityController");

module.exports = (app) => {
  app.get("/states", cityController.show);
  app.get("/states/:state", cityController.query);
};
