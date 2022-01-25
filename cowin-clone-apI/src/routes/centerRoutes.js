const centerController = require("../controllers/centerController");

module.exports = (app) => {
  app.post("/center", centerController.create);
  app.patch("/center/:id", centerController.update); // try patch and delete w/o params controll.provideid
  app.delete("/center/:id", centerController.destroy);
  app.get("/center", centerController.query);
  app.get("/center/:id", centerController.show);
};
