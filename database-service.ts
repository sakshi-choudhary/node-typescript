import { Db, MongoClient } from "mongodb";

let db: Db;

async function initializeClient(): Promise<Db> {
  const client = await MongoClient.connect(process.env.DB_URI || "", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ignoreUndefined: true,
  });

  return client.db();
}

export default async (): Promise<Db> => {
  if (!db) {
    db = await initializeClient();
  }

  return db;
};
