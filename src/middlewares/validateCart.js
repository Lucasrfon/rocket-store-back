import joi, { number } from "joi";

export default function postCart(req, res, next) {
    const newCartSchema = joi.object({
        email: joi.string().required(),
        products: joi.array().items(joi.object({
            name: joi.string().required(),
            price: joi.number().required(),
            amount: joi.number().required()
        })).required
    })
}