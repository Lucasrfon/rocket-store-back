import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRouter from './routes/authRoute.js';

dotenv.config();

const server = express();
server.use(express.json());
server.use(cors());

server.use(authRouter);

server.listen(process.env.PORT, () => console.log(
    `Server running on port ${process.env.PORT}.`
));