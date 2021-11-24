const jsonServer = require('json-server');
const server=jsonServer.create();
const router= jsonServer.router('./db.json');
const middlewares=jsonServer.defaults({
    static:'./build'
});
const POST =process.env.PORT || 8000;
server.use(middlewares);
server.use(jsonServer.rewriter({
    '/api/*': '/$1',
   
}));
const { get, post } = server.router;

// Launch server with options and a couple of routes
server.use(router);
server.listen(PORT, () => {
    console.log('Server is running');
});