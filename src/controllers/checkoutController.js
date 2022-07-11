import { db, ObjectId } from "../dbStrategy/mongo.js";

export default async function postCheckout (req, res){
    try {
        await db.collection('pokeBuys').insertOne({
            id: req.body._id,
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
