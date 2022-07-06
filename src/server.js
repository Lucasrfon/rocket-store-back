import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import pokeRouter from './routes/pokeRouter.js';

dotenv.config();

const server = express();
server.use(express.json());
server.use(cors());

server.use(pokeRouter);


server.listen(process.env.PORT, () => console.log(
    `Server running on port ${process.env.PORT}.`
));