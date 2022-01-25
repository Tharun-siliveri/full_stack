const userController = require("../controllers/userController");

module.exports = (app) => {
  app.post("/user/generate", userController.generate);
  app.post("/user/validate", userController.validate);
  app.post("/user", userController.set);
  app.delete("/user/:mobile", userController.destroy); // should remove all appointments too
};
