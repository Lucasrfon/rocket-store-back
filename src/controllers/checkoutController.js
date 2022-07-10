import { db, ObjectId } from "../dataBase/mongo.js";

export default async function postCheckout (req, res){
    try {
        const {name, card, cvv, valid } = req.body;

        const cart = await db.collection('cart').findOne({email: session.email});

        await db.collection('pokeBuys').insertOne({
            cart: cart,
            name: req.body.name,
            card: req.body.card,
            cvv:req.body.cvv,
            valid:req.body.valid
        });
    res.sendStatus(201)
    } catch (error){
        res.sendStatus(500);
    }
}
