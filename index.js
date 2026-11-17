'use strict';

const Hapi = require('@hapi/hapi');
// Порт передаёт платформа в переменной PORT; без неё — 3000
const port = process.env.PORT || 3000;
const init = async () => {

    const server = Hapi.server({
        port,
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Hello world';
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
