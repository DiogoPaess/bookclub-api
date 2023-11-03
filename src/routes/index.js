import { Router } from "express";
import authMiddleware from "../middlewares/auth";
import UserController from "../controllers/user";

const routes = new Router();

routes.post("/user", UserController.create);
routes.post("/login", UserController.login);

// ----- anauthenticated routes -----
routes.use(authMiddleware);
routes.get("/user", UserController.get);

export default routes;
