import joi from 'joi';

export default async function validateRegister(req, res, next){

    const checkoutSchema = joi.object({
        _id:joi.string().required(),
        name: joi.string().min(6).pattern(/^[a-zA-Z]+$/).required(),
        number: joi.string().min(8).pattern(/^[0-9]+$/).required(),
        cvv:joi.string().min(3).pattern(/^[0-9]+$/).required(),
        valid:joi.string().min(4).pattern(/^[0-9]+$/).required(),
    });

    const checkout = req.body;
    const validation = checkoutSchema.validate(checkout, {abortEarly: false});

    if(validation.error){
        return res.status(400).send(validation.error.details)
    }

    next();
}