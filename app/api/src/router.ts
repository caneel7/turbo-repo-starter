import Elysia from "elysia";
import { authController } from "./controller/auth.controller";

export const Router = new Elysia({ prefix: '/api/v1' })
    .use(authController)