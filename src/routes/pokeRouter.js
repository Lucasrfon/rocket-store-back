import { Router } from "express";
import {getPokemon, postPokemon} from "../controllers/pokeController.js"
import validateRegister from "../middlewares/pokeMiddleware.js";

const router = Router();

router.get('/home', getPokemon);
router.post('/home', validateRegister, postPokemon);


export default router;