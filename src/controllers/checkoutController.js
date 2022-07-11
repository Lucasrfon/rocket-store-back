import { db, ObjectId } from "../dbStrategy/mongo.js";

export default async function postCheckout (req, res){
    try {
        const {name, card, cvv, valid } = req.body;

        const cart = getCart();

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
