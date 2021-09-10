module.exports = {
    pages: {
        index: {
            entry: 'src/main.js'
        }
    },
    configureWebpack: {
    module: {
        exprContextCritical: false
        }
    }
}