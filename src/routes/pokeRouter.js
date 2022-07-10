import { Router } from "express";
import {getPokemon, postPokemon} from "../controllers/pokeController.js"
import validateRegister from "../middlewares/pokeMiddleware.js";
import { validateToken } from '../middlewares/validateAuths.js';

const router = Router();

router.get('/home', validateToken, getPokemon);
router.post('/home', validateToken, validateRegister, postPokemon);


export default router;