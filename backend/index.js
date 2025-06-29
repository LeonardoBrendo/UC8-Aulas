const Server = require('./server'); 

const server = new Server();  
async function main() {
  await server.start(); 
}
main();