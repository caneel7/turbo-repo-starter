import 'dotenv';
import { Elysia } from 'elysia';
import { node } from '@elysiajs/node';
import { logger } from '@tqman/nice-logger';
import swagger from '@elysiajs/swagger';
import cors from '@elysiajs/cors';
import { FRONTEND_ENDPOINT, JWT_SECRET, PORT } from './constants';
import bearer from '@elysiajs/bearer';
import jwt from '@elysiajs/jwt';

const app = new Elysia({
    adapter: node(),
})
.use(cors({
    origin: FRONTEND_ENDPOINT,
    credentials: true,
    methods: ['GET','POST','PUT','DELETE']
}))
.use(bearer())
.use(jwt({
    secret:JWT_SECRET
}))
.use(logger({ mode: 'live', withTimestamp: true }))
.use(swagger({
    path: '/docs',
    documentation: {
        info: {
            title: 'Slot API',
            version: '1',
        }
    }
}));

app.listen(PORT);