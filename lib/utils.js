var _request = require('request')

module.exports = function request (opts) {
  return new Promise(function (resolve, reject) {
    _request(opts, function (err, response, body) {
      var is2xx = !err && /^2/.test('' + response.statusCode)
      if (err || !is2xx) {
        return reject({err: err, body: body})
      }
      resolve(body)
    })
  })
}
