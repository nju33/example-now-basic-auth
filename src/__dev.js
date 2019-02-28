const {router, head, get} = require('microrouter');
const hello = require('./hello');

module.exports = router(head('/hello', hello), get('/hello', hello));
