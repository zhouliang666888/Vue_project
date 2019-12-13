const path = require('path')
const px2rem = require('postcss-px2rem')
      // 配置postcs-px2rem
      const postcss = px2rem({
        remUnit: 37.5   //基准大小 baseSize，需要和rem.js中单位rem值占比一样相同
      })
module.exports = {
  configureWebpack:{
    // 引入模块的解析
    resolve: {
      extensions: ['.js', '.vue', '.json'], // 可以省略的后缀名
      alias: { // 路径别名(简写方式)
        '@': path.resolve(__dirname, 'src'),
        '@components': path.resolve(__dirname, 'src/components'),
      }
    }
  },
  devServer: {
     proxy:{
       // 处理以/api开头路径的请求
      // '/api': 'http://localhost:4000'   // http://localhost:4000/api/search/users
      '/api': {
        target: 'http://localhost:4000', // 转发的目标地址
        pathRewrite: {
          '^/api' : ''  // 转发请求时去除路径前面的/api
        },
        changeOrigin: true
      },
      
     }
  },
  css: { // 添加postcss配置
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  },
}