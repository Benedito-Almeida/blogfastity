
import fastify from 'fastify';
import { postRoutes } from './routes/posts.js';

const app = fastify({
    logger: {
        transport: {
            target: 'pino-pretty',
        },
    },
});

// Registrar as rotas
app.register(postRoutes);

app.listen({
    host: '0.0.0.0',
    port: 4000,
}, (err, address) => {
    if (err) {
        app.log.error(err);
        process.exit(1);
    }
    app.log.info(`Server listening at ${address}`);
});
