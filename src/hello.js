const fs = require('fs');
const {promisify} = require('util');
const path = require('path');

const readFile = promisify(fs.readFile);
const USER = Buffer.from('nju33:foo').toString('base64');

const hasAuthorizationHeader = req =>
  Object.prototype.hasOwnProperty.call(req.headers, 'authorization');

const verify = authorization => {
  return (
    authorization.indexOf('Basic ') === 0 && authorization.indexOf(USER) === 6
  );
};

module.exports = async (req, res) => {
  if (!(hasAuthorizationHeader(req) && verify(req.headers.authorization))) {
    res.writeHead(401, {
      'WWW-Authenticate': 'Basic realm=nju33--now-basic-auth'
    });
    res.end();
  }

  const html = await readFile(path.join(__dirname, 'index.html'), 'utf-8');
  res.end(html);
};
