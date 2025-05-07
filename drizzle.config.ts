import dotenv from "dotenv";
import { defineConfig } from "drizzle-kit";

dotenv.config({
    path: ".env.local",
});

export default defineConfig({
    out: "./drizzle",
    schema: "./src/db/schema.ts",
    dialect: "postgresql",
    dbCredentials: {
        url: "postgresql://you-tube_owner:npg_Si01nEwVuRNd@ep-silent-recipe-a1nx95qx-pooler.ap-southeast-1.aws.neon.tech/you-tube?sslmode=require",
    },
});
