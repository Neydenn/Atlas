"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authProxy = void 0;
const http_proxy_middleware_1 = require("http-proxy-middleware");
exports.authProxy = (0, http_proxy_middleware_1.createProxyMiddleware)({
    target: 'http://localhost:3001',
    changeOrigin: true,
    pathRewrite: (path) => `/auth${path}`,
    on: {
        proxyReq: http_proxy_middleware_1.fixRequestBody,
    },
});
