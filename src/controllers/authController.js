import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import { db } from '../dataBase/mongo.js'

export async function creatUser(req, res) {
    try {
        const user = req.body;
        const encryptedPassword = bcrypt.hashSync(user.password, 5);
        delete user.confirmPassword;

        await db.collection('users').insertOne({...user, password: encryptedPassword});
        res.status(201).send('Cadastro realizado com sucesso!');
    } catch(error) {
        res.status(417).send('Erro ao cadastrar usuário.');
    }
}

export async function loginUser(req, res) {
    try {
        const user = res.locals.validEmail;
        const token = uuid();

        await db.collection('sessions').insertOne({ email: user.email, token, generated: Date.now()});
        res.status(202).send(token);
    } catch (error) {
        res.status(417).send('Erro no login.');
    }
}