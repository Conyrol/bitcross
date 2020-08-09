module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/commonJs',
        'components': '@/components',
        'views': '@/views',
        'network': '@/network'
      }
    }
  }
}