const webpack = require('webpack')

module.exports = {
    // vai estar o objeto que vai ser exposto 
    entry: './ex/index.js',
    output: {
        path: __dirname + '/public',
        filename: './bundle.js' // pode colocar o nome que quiser, ele recarrega o browser quando os arquivos são modificados
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    }
}