var get = require('lodash.get')
var format = require('util').format

module.exports = function(options) {

    var GitHub = get(options, 'github-api') || require('github-api')

    function start(dependencies, cb) {
        cb(null, new GitHub(dependencies.config || {}))
    }

    return {
        start: start
    }
}
