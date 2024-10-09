import express, { Express } from "express";
import errorHandler from "./middlewares/error";
import middlewares from "./middlewares";
import router from "./routes/index.route";
import { testDbConnection } from "db";

const app: Express = express();

testDbConnection();
// middlewares
middlewares(app);

// routes
app.use("/", router);
app.use(errorHandler);

app.listen(5000, () => {
  console.log(`server started`);
});
