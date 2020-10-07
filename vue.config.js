module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Index Page',
    },
    regSign: {
      entry: 'src/register.js',
      template: 'public/register.html',
      filename: 'register.html',
      title: 'register Page',
    },
  },
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