import { Router } from "express";
import authMiddleware from "../middlewares/auth";
import UserController from "../controllers/user";
import CategogoryController from "../controllers/category";
import AuthorController from "../controllers/author";

const routes = new Router();

routes.post("/user", UserController.create);
routes.post("/login", UserController.login);
routes.post("/forgot-password", UserController.forgotPassword);
routes.post("/reset-password", UserController.resetPassword);

// ----- anauthenticated routes -----
routes.use(authMiddleware);
routes.get("/user", UserController.get);
routes.get("/category", CategogoryController.getAll);
routes.post("/author", AuthorController.create);
routes.get("/author", AuthorController.getAll);

export default routes;
