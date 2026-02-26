import { t } from 'elysia';

export const loginSchema = t.Required(
    t.Object({
        username: t.String({
            description: 'Admin Username',
            error: 'Please Provide Username'
        }),
        password: t.String({
            description: 'Admin Password',
            error: 'Please Provide Password'
        })
    })
);