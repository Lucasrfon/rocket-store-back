import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRouter from './routes/authRouter.js';
import pokeRouter from './routes/pokeRouter.js';
import cartRouter from './routes/cartRouter.js';
import checkoutRouter from './routes/checkoutRouter.js';

dotenv.config();

const server = express();
server.use(express.json());
server.use(cors());

server.use(authRouter);
server.use(pokeRouter);
server.use(cartRouter);
server.use(checkoutRouter);

server.listen(process.env.PORT, () => console.log(
    `Server running on port ${process.env.PORT}.`
));