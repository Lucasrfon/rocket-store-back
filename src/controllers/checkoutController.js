import { db, ObjectId } from "../dbStrategy/mongo.js";

export default async function postCheckout (req, res){
    try {
        const {name, card, cvv, valid, cart } = req.body;
  
        await db.collection('pokeBuys').insertOne({

            cart: req.body.cart,
            name: req.body.name,
            card: req.body.card,
            cvv:req.body.cvv,
            valid:req.body.valid
        });
        console.log(res)
    res.sendStatus(201)
    } catch (error){
        res.sendStatus(500);
    }
}
