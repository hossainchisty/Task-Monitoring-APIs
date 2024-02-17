import { MongoClient } from 'mongodb';
const dotenv = require('dotenv');

dotenv.config();

const MONGO_URI = `${process.env.MONGO_URI}`;

export const client = new MongoClient(MONGO_URI);
export const db = client.db();
