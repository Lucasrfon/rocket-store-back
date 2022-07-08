import { db } from "../dataBase/mongo.js";

export async function getCart(req, res) {
    try {
        const session = req.locals.session;
        const cart = await db.collection('carts').find({email: session.email}).toArray();
        res.status(200).send(cart);
    } catch (error) {
        res.status(417).send('Erro ao obter carrinho.');
    }
}