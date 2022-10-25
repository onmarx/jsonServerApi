const jsonServer = require('json-server');
const server = jsonServer.create();
// const router = jsonServer.router('db.json');
const router = jsonServer.router('api_ecuador.json');

const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port);

// "start": "json-server --watch db.json"
