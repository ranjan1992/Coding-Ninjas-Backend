const http = require('http');
const port = 8000;
const server = http.createServer();

server.listen(port, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Server is up and running', port);
});

//localhost ---> 127.0.0.1
