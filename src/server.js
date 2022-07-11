import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRouter from './routes/authRouter.js';
import pokeRouter from './routes/pokeRouter.js';
import cartRouter from './routes/cartRouter.js';
import removeTokens from './middlewares/removeTokens.js';

dotenv.config();

const minute = 60000;
const fiveMinutes = minute * 5;

const server = express();
server.use(express.json());
server.use(cors());

server.use(authRouter);
server.use(pokeRouter);
server.use(cartRouter);

setInterval(removeTokens, fiveMinutes);

server.listen(process.env.PORT, () => console.log(
    `Server running on port ${process.env.PORT}.`
));