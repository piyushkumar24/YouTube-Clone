import { categoriesRouter } from "@/modules/categories/server/procedures";
import {  createTRPCRouter} from '../init';
import { categories } from "@/db/schema";
export const appRouter = createTRPCRouter({
    categories: categoriesRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;