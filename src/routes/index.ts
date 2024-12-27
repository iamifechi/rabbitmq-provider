import { Router } from "express";
import { taskRouter } from "./task.routes";

export const baseRouter = Router();
const baseRoute = '/api/v1'


baseRouter.get("/", (req, res) => {
  res.status(200).json({message: "Hello world"})
});
baseRouter.get(baseRoute, (req, res) => {
    res.status(200).json({message: "Hello world"})
});


export default (app: { use: (arg0: string, arg1: any) => void }) => {
  app.use(`${baseRoute}/`, baseRouter);
  app.use(`${baseRoute}/task`, taskRouter);
};
