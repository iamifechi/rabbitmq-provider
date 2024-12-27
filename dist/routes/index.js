"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseRouter = void 0;
const express_1 = require("express");
const task_routes_1 = require("./task.routes");
exports.baseRouter = (0, express_1.Router)();
const baseRoute = '/api/v1';
exports.baseRouter.get("/", (req, res) => {
    res.status(200).json({ message: "Hello world" });
});
exports.baseRouter.get(baseRoute, (req, res) => {
    res.status(200).json({ message: "Hello world" });
});
exports.default = (app) => {
    app.use(`${baseRoute}/`, exports.baseRouter);
    app.use(`${baseRoute}/task`, task_routes_1.taskRouter);
};
