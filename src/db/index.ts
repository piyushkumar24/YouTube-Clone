import dotenv from 'dotenv';
import { drizzle } from 'drizzle-orm/node-postgres';
import path from 'path';

// Load .env.local explicitly to match drizzle.config.ts
// dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

// if (!process.env.DATABASE_URL) {
//     throw new Error("DATABASE_URL environment variable is not set. Please set it in your .env.local or environment.");
// }

// export const db = drizzle(process.env.DATABASE_URL);
export const db = drizzle("postgresql://you-tube_owner:npg_Si01nEwVuRNd@ep-silent-recipe-a1nx95qx-pooler.ap-southeast-1.aws.neon.tech/you-tube?sslmode=require");
