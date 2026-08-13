import {
  createProxyMiddleware,
  fixRequestBody,
} from 'http-proxy-middleware';

export const authProxy = createProxyMiddleware({
  target: 'http://auth:3001',
  changeOrigin: true,
  pathRewrite: (path) => `/auth${path}`,
  on: {
    proxyReq: fixRequestBody,
  },
});

