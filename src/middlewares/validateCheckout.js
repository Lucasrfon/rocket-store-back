import joi from 'joi';

export default async function validateRegister(req, res, next){

    const checkoutSchema = joi.object({
        cart:joi.object().required(),
        cardName: joi.string().length(10).pattern(/^[a-zA-Z]+$/).required(),
        cardNumber: joi.string().length(10).pattern(/^[0-9]+$/).required(),
        cardCode:joi.string().length(3).pattern(/^[0-9]+$/).required(),
        cardValid:joi.string().length(4).pattern(/^[0-9]+$/).required(),
    });

    const checkout = req.body;
    const validation = checkoutSchema.validate(checkout, {abortEarly: false});

    if(validation.error){
        return res.status(400).send(validation.error.details)
    }

    next();
}