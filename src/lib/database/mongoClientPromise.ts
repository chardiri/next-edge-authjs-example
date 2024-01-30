// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb
import { MongoClient } from 'mongodb';

declare global {
  var _mongomongoClientPromise: Promise<MongoClient>;
}

if (!process.env.MONGODB_CONNECTION_STRING) {
  throw new Error(
    'Invalid/Missing environment variable: "MONGODB_CONNECTION_STRING"'
  );
}

const uri = process.env.MONGODB_CONNECTION_STRING;
const options = {};

let client: MongoClient;
let mongoClientPromise: Promise<MongoClient>;

client = new MongoClient(uri, options);
mongoClientPromise = client.connect();
console.log(mongoClientPromise)
// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default mongoClientPromise;
