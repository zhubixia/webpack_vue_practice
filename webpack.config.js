const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { resolve } = require('./utils.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const VueLoaderPlugin = require('vue-loader/lib/plugin')

const webpackConfig = {
  mode: 'development', // "production|development|none"
  // development devtool: 'cheap-module-eval-source-map',
	// production devtool: 'cheap-module-source-map',
  devtool: 'cheap-module-eval-source-map', // 源码映射关系，当代码出错时可映射到源码进行快速修改，具体的构建速度可参考官网
  entry: {  // string|object|array
    main: './src/main.js'
  },
  output: {
    filename: 'static/js/[name]_[chunkhash:12].js',
    path: resolve('dist'),
  },
  devServer: {
    contentBase: resolve('dist'),
    open: true,
    port: 9090,
    proxy: { // 模拟接口代理实现跨域
      '/api': {
        target: 'localhost: 3000',
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('src')
    }
  },
  module: {
    rules: [  // array
      {
        test: /\.svg$/,
        include: resolve('./src/icons/svg'),
        use: {
          loader: 'svg-sprite-loader',
          options: {
            symbolId: 'icon-[name]'
          }
        }
      },
      {
        test: /\.(svg)(\?.*)$/,
        exclude: [
          resolve('./src/icons/svg'),
          resolve('node_modules')
        ],
        use: {
          loader: 'file-loader',
          options: {
            name: '[name]_[hash:8].[ext]',
            outputPath: 'static/images/',
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        include: [resolve('./src/assets/images')], // string|array
        /* loaders list<Array>, multiple loaders will be applied from right to left (last to first configured) */
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name]_[hash:8].[ext]',
              outputPath: 'static/images/',
					    limit: 10240
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: true
            }
          },
          'sass-loader', // 将sass编译为css
				  'postcss-loader' // 加入厂商前缀
        ]
      },
      {
        test: /\.css$/,
        exclude: /(node_modules|bower_components)/,
        use:[
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [  // array: 插件实例列表
    new CleanWebpackPlugin(), // default: everything under <project_dir>/dist will be removed
    new HtmlWebpackPlugin({ // 打包完成之后会以template为模板自动创建html，并自动注入外部依赖的资源
      template: 'public/index.html'
    }),
    /* 
      作用：
      将你定义的其他规则复制并应用到.vue文件里相应语言的块。
      例如，如果你有一条匹配 /\.js$/ 的规则，那么它会应用到 .vue 文件里的 <script> 块。
    */
    // new VueLoaderPlugin(), 
  ]
}

module.exports = webpackConfig
