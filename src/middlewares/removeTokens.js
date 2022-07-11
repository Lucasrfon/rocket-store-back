import { db } from "../dbStrategy/mongo.js";

export default async function removeTokens() {
    const minute = 60000;
    const hour = minute * 60;
    const sessions = await db.collection('sessions').find().toArray();

  sessions.forEach(session => {
    if(session.generated < (Date.now() - hour)) {
      db.collection('sessions').deleteOne(session);
    }
  });
}