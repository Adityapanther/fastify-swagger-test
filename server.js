const fastify = require('fastify')({
    logger: true
});
const swagger = require('fastify-swagger');
const routes = require('./routers');


async function launchServer() {
    await fastify.register(swagger, {
        routePrefix: "/docs",
        openapi: {
            openApi: "3.x.x",
            info: {
                title: "swagger test",
                description: "swagger client sdk test.",
                version: "1.0.0"
            },
            servers: [{url : "http://127.0.0.1:4040"}],
        },
        tags: [
            {
                name: "user",
                description: "user related api"
            }
        ],
        uiConfig: {
            docExpansion: 'full',
            deepLinking: false
        },
        staticCSP: true,
        transformStaticCSP: (header) => header,
        exposeRoute: true
    })

    await fastify.register(routes);


    await fastify.listen(4040, (err, address) => {
        console.log(`listenning on server ${address}`);

    })
}

launchServer();