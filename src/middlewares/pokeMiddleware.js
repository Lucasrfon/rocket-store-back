import joi from 'joi';

export default async function validateRegister(req, res, next){

    const registerSchema = joi.object({
        name: joi.string().required(),
        type: joi.string().required(),
        price:joi.number().required(),
        image:joi.string().required()
    });

    const register = req.body;
    const validation = registerSchema.validate(register, {abortEarly: false});

    if(validation.error){
        return res.status(400).send(validation.error.details)
    }

    next();
}