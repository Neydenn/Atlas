import express, {Express} from 'express';
import cors from 'cors';
import {AuthRouter} from "./modules/auth/auth-router";

export const app: Express = express();

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  })
)
app.use(express.json());


app.use('/auth', AuthRouter);