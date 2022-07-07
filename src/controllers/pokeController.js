import { db, ObjectId } from "../dbStrategy/mongo.js";

export async function getPokemon (req, res){

    try {
        const pokemons = await db.collection('pokeCollection').find().toArray();
        res.status(201).send(pokemons);
    } catch (error){
        res.sendStatus(500);
    }
}

export async function postPokemon (req, res){
    try {
        const {name, price} = req.body;

        await db.collection('pokeCollection').insertOne({
            name: req.body.name,
            price: req.body.price,
            type:req.body.type,
            image:req.body.image
        });
    res.sendStatus(201)
    } catch (error){
        res.sendStatus(500);
    }
}
