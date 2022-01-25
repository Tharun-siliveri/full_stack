const appointmentController = require("../controllers/appointmentController");

module.exports = (app) => {
  app.post("/appointment", appointmentController.create);
  app.get("/appointment/:id", appointmentController.show);
  app.get("/appointment", appointmentController.query);
  app.delete("/appointment/:id", appointmentController.destroy); //delete without id try
  app.post("/appointment/:id", appointmentController.complete);
};
