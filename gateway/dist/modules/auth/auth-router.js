"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRouter = void 0;
const express_1 = require("express");
const auth_proxy_1 = require("./auth-proxy");
exports.AuthRouter = (0, express_1.Router)();
exports.AuthRouter.post("/login", auth_proxy_1.authProxy);
exports.AuthRouter.post("/register", auth_proxy_1.authProxy);
exports.AuthRouter.post("/refresh", auth_proxy_1.authProxy);
