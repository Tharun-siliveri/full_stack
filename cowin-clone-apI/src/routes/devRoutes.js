const devController = require("../controllers/devController");

module.exports = (app) => {
  app.delete("/developer", devController.wipe);
  app.post("/developer", devController.fill);
};
