import { db } from '../dbStrategy/mongo.js';

export async function postCart(req, res) {
    try {
        const newCart = req.body;
        const cart = await db.collection('cart').insertOne(newCart);
        res.status(201).send(cart.insertedId);

    } catch (error) {
        res.status(417).send('Erro ao cadastrar carrinho.');
    }
}

export async function getCart(req, res) {
    try {
        const session = res.locals.session;
        const cart = await db.collection('cart').findOne({email: session.email});
        console.log(cart)

        res.status(200).send(cart);
    } catch (error) {
        res.status(417).send('Erro ao obter carrinho.');
    }
}

export async function cartUpdate(req, res) {
    try {
        const cart = req.body;
        await db.collection('cart').updateOne(
            {email: cart.email},
            { $set: {products: [...cart.products]}}
        );
        res.send('atualizado');
    } catch (error) {
        res.status(417).send('Erro ao atualizar carrinho.');
    }
}

export async function deleteCart(req, res) {
    try {
        const session = res.locals.session;
        await db.collection('cart').deleteOne({email: session.email});

        res.status(200).send();
    } catch (error) {
        res.status(417).send('Erro ao remover carrinho.');
    }
}