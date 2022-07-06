import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const MongoClient = new MongoClient(process.env.MONGO_URI);
const db = null;
mongoClient.connect(() => {
    db = mongoClient.db(process.env.DB_NAME);
});

export { db, ObjectId };