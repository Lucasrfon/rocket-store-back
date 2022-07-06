import { db, ObjectId } from "../dbStrategy/mongo.js";


export async function getPokemon (req, res){

    try {
        const pokemons = await db.collection('pokeCollection').find().toArray();
        console.log(pokemons);
        return res.sendStatus(201);
    } catch {
        return res.sendStatus(404);
    }
}


export async function postPokemon (req, res){
    try {
        const {name, price} = req.body;

        await db.collection('pokeCollection').insertOne({
            name: req.body.name,
            price: req.body.price
        });
    console.log(name, price);
    return res.sendStatus(201)
    } catch (error){
        return res.sendStatus(500);
    }
}
