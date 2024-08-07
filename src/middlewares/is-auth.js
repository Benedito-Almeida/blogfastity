// middlewares/is-auth.js
export function isAuth(request, reply, done) {
    const { authorization } = request.headers;

    if (authorization !== 'token') {
        // Se o token não for válido, retornar um erro 403 e parar a execução
        reply.status(403).send({ message: 'Unauthorized' });
    } else {
        // Se o token for válido, continuar a execução
        done();
    }
}
