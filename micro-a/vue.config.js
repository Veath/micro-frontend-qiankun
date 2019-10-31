module.exports = {
  publicPath: 'http://localhost:8081/',
  devServer: {
    host: '0.0.0.0',
    port: 8081,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true'
    }
  },
  css: {
    extract: false
  },
  configureWebpack: {
    output: {
      jsonpFunction: 'webpackJsonp-page-one',
      libraryTarget: 'umd',
      library: 'pageOne'
    },
    optimization: {
      runtimeChunk: false,
      splitChunks: {
        cacheGroups: {
          vendors: false
        }
      }
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
