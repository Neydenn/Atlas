import {Router} from "express";
import {authProxy} from "./auth-proxy";

export const AuthRouter = Router();

AuthRouter.post("/login", authProxy)
AuthRouter.post("/register", authProxy)