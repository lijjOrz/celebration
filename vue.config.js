module.exports = {
    baseUrl: "/",

    outputDir: "./bin",

    assetsDir: "",

    indexPath: "index.html", // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径

    filenameHashing: true, // 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。然而，这也要求 index 的 HTML 是被 Vue CLI 自动生成的。如果你无法使用 Vue CLI 生成的 index HTML，你可以通过将这个选项设为 false 来关闭文件名哈希

    productionSourceMap: false, // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建

    configureWebpack: (config) => {
        config
        if (process.env.NODE_ENV === 'development') { // 为生产环境修改配置...

        } else if (process.env.NODE_ENV === 'test') { // 为开发环境修改配置...

        } else if (process.env.NODE_ENV === 'audit') { // 为开发环境修改配置...

        } else if (process.env.NODE_ENV === 'production') { // 为开发环境修改配置...

        }
        console.log("process.env.NODE_ENV: " + process.env.NODE_ENV)
    },
    lintOnSave: false, // process.env.NODE_ENV !== 'production'
    devServer: {
        overlay: {
            warnings: false,
            errors: false
        }
    },
    chainWebpack: config => {
        config.module
            .rule('images')
            .use('url-loader')
            .loader('url-loader')
            .tap(options => Object.assign(options, {
                limit: 10240
            }))
    }
}
