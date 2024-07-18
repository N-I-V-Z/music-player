const musicRouter = require("./musicRouter");
const initRouters = (app) => {
  
  app.use("/api/v1/music", musicRouter);

  app.get("/", (req, res) => {
    res.send("Server on");
  });

  return app;
};

module.exports = initRouters;
