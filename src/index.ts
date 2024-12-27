import express, { Express } from "express";
import * as dotenv from 'dotenv';
dotenv.config({ path: './src/config/config.env' });
import useMiddlewares from "./middlewares";
import { port } from "./config";
import { taskService } from "./services";

const app: Express = express();
useMiddlewares(app);


taskService.connect();

process.on('SIGINT', async () => {
  console.log('Closing RabbitMQ Connection...');
  await taskService.close();
  process.exit(0);
});

// app.get("/send-msg", (req, res) => {
//     res.send("Hello world")
// });

app.listen(port, () => console.log("Server running at port " + port));