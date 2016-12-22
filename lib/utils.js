var _request = require('request')

module.exports = function request (opts) {
  return new Promise(function (resolve, reject) {
    _request(opts, function (err, response, body) {
      var is2xx = !err && /^2/.test('' + response.statusCode)
      if (err || !is2xx) {
        return reject({err: err, body: body})
      }
      try {
        var json = JSON.parse(body)
        if (!json.success) {
          return reject(json)
        }
        resolve(json)
      } catch (error) {
        reject(error)
      }
    })
  })
}
