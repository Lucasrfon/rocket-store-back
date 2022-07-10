import joi from "joi";
import { db } from "../dataBase/mongo.js";

export async function validateNewCart(req, res, next) {
    try {
        const newCartSchema = joi.object({
            email: joi.string().required(),
            products: joi.array().items(joi.object({
                name: joi.string().pattern(/^[a-zA-Z]*$/).required(),
                price: joi.number().required(),
                amount: joi.number().valid(1).required(),
                image: joi.string().required()
            })).required()
        });
        const newCart = req.body;
        const validate = newCartSchema.validate(newCart);
    
        if(validate.error) {
            return res.status(406).send(validate.error.details[0].message);
        }
    
        if(!await db.collection('users').findOne({email: newCart.email})) {
            return res.status(401).send('Usuário não cadastrado.');
        }
    
        if(await db.collection('cart').findOne({email: newCart.email})) {
            return res.status(409).send('Carrinho já cadastrado.');
        }
    
        next();
        
    } catch (error) {
        res.status(417).send('Erro ao cadastrar carrinho.');
    }
}

export async function validateCartUpdate(req, res, next) {
    try {
        const cartUpdateSchema = joi.object({
            _id: joi.string().required(),
            products: joi.array().items(joi.object({
                name: joi.string().pattern(/^[a-zA-Z]*$/).required(),
                price: joi.number().required(),
                amount: joi.number().required(),
                image: joi.string().required()
            })).required()
        });
        const cart = req.body;
        const validate = cartUpdateSchema.validate(cart);

        if(validate.error) {
            return res.status(406).send(validate.error.details[0].message);
        }

        next();
        
    } catch (error) {
        res.status(417).send('Erro ao atualizar cadastro.');
    }
}