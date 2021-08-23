const app = require('express')()
const server = require('http').createServer(app)
const router = require('./routers')

app.use(express.json());
app.use('/',router);

const port = 3500;

server.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});