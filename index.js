const get = require('lodash.get')

module.exports = (options) => {

    const GitHub = get(options, 'github-api') || require('github-api')

    const start = (dependencies, cb) => {
        cb(null, new GitHub(dependencies.config || {}))
    }

    return {
        start
    }
}
