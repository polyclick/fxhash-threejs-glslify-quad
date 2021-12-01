const CopyPlugin = require("copy-webpack-plugin")
const config = require("./webpack.config")
const ZipperPlugin = require("./ZipperPlugin")
const path = require("path")

const ThreeMinifierPlugin = require("@yushijinhun/three-minifier-webpack")
const threeMinifier = new ThreeMinifierPlugin()

module.exports = {
  ...config,
  mode: "production",
  // add the zipper plugin to the list of plugins
  plugins: [
    threeMinifier,
    ...config.plugins,
    new CopyPlugin({
      patterns: [
        {
          from: "public",
          // prevents the index.html from being copied to the the public folder, as it's going to be
          // generated by webpack
          filter: async (filePath) => {
            return path.basename(filePath) !== "index.html"
          }
        }
      ]
    }),
    new ZipperPlugin()
  ],
	resolve: {
		plugins: [
			threeMinifier.resolver // <=== (2) Add resolver on the FIRST line
		]
	}
}