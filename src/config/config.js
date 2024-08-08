import dotenv from 'dotenv';

dotenv.config();

export const MONGO_URI = process.env.MONGO_URI;
export const TOKEN_SECRET = process.env.TOKEN_SECRET;
export const PORT = process.env.PORT;