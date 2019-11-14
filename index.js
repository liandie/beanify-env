const beanifyPlugin = require("beanify-plugin")
const envSchema = require("env-schema")

module.exports = beanifyPlugin((beanify, opts, done) => {
    try {
        const config = envSchema(opts)
        const confiyKey = opts.confiyKey || "config"
        beanify.decorate(confiyKey,config)
        done()
    } catch (e) {
        done(e)
    }
}, {
    name: 'beanify-env'
})