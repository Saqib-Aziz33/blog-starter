import express, { Express } from "express";
import errorHandler from "./middlewares/error";
import middlewares from "./middlewares";
import router from "./routes/index.route";
import sequelize, { testDbConnection } from "db";

const app: Express = express();

sequelize.sync({ force: false });
// middlewares
middlewares(app);

// routes
app.use("/", router);
app.use(errorHandler);

app.listen(5000, () => {
  console.log(`server started`);
});
