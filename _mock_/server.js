const jsonServer = require('json-server');
const fs = require('fs');

const server = jsonServer.create();
const router = jsonServer.router('_mock_/db.json');
const userdb = JSON.parse(fs.readFileSync('_mock_/users.json', 'UTF-8'));
const middlewares = jsonServer.defaults();
server.use(middlewares);

function isAuthenticated({ username, password }) {
 return userdb.users.findIndex((user) => user.username === username && user.password === password) !== -1;
}

router.render = (req, res) => {
 const url = req.originalUrl;
 if (url === '/api/v1/login' && req.method === 'POST') {
  const { username, password } = req.body;
  const index = userdb.users.findIndex((user) => user.username === username);
  if (isAuthenticated({ username, password }) === true) {
   res.status(200).jsonp({ 
    id: userdb.users[index].id,
  });
  } else {
   res.sendStatus(401);
  }
 }

};

server.use(router);
const port = 8080;
server.listen(port, () => {
 console.log('JSON Server is running');
});
