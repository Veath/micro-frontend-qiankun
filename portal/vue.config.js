module.exports = {
  publicPath: '/',
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true'
    }
  },
  configureWebpack: {
    output: {
      jsonpFunction: 'webpackJsonp-portal'
    },
    optimization: {
      runtimeChunk: false
    },
    externals: {
      vue: 'Vue',
      'vue-router': 'VueRouter',
      vuex: 'Vuex',
      // 'element-ui': 'ELEMENT'
    }
  },
  chainWebpack: config => {
    config.plugins.delete('preload');
    config.plugins.delete('prefetch');
  }
};
