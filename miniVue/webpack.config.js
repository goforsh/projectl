const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode:"development",
  entry: {
    app: "./src/miniVue.js"
  },
  output: {
    publicPath: __dirname + "/dist/", // js引用路径或者CDN地址
    path: path.resolve(__dirname, "dist"), // 打包文件的输出目录
    filename: "miniVue.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    host: "localhost",
    port: "8080",
  },
  plugins: [
    new HtmlWebpackPlugin({
			template:'./index.html',//模板文件，即需要打包和拷贝到build目录下的html文件
			filename:'index.html',//目标html文件
		})
]
};