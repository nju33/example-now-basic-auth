const basic_realm = "public/member/";
const basic_name = "simple-nodejs_member";

module.exports = (req, res) => {
  res.writeHead(401, {
    'WWW-Authenticate': `Basic realm="${basic_name}"`,
  });
  res.end();
}