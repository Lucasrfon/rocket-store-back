import { db, ObjectId } from "../dbStrategy/mongo.js";

export default async function postCheckout (req, res){
    try {
        const session = res.locals.session;
        const {name, card, cvv, valid} = req.body;
        const cart = await db.collection('cart').findOne({email: session.email});
        await db.collection('pokeBuys').insertOne({

            cart: cart,
            name: req.body.cardName,
            card: req.body.cardNumber,
            cvv:req.body.cardCode,
            valid:req.body.cardValid
        });
    res.sendStatus(201);
    } catch (error){
        res.sendStatus(500);
    }
}
