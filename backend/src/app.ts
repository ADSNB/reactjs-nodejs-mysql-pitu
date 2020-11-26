import express from 'express';
import linksRouter from './routes/links';
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors()); // permite que o front consiga se comunicar com o backend (Cross-Platform)
app.use(linksRouter);

export default app;