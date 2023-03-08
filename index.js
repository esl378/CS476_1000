import server from './node-starter/config/server';
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log('app running on port ${PORT}');
});