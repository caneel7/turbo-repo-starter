import Elysia from "elysia";
import { loginSchema } from "../schema/auth.schema";

export const authController = new Elysia({ prefix: '/auth' })
    .post('/login', async ({ body }) => {
        const { username, password } = body;
    },{
        detail: { tags: ['Auth'], description: 'Login' },
        body: loginSchema
    })