const path = require("path");
const configFile = path.join(__dirname, `tsconfig.client.json`);
module.exports = {
  mode: process.env.NODE_ENV == "production" ? "production" : "development",
  entry: {
    main: "./client/main.tsx",
    sub: "./client/sub.tsx",
  },
  output: {
    path: `${__dirname}/dist/public`,
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "ts-loader",
          options: {
            configFile: configFile,
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  target: ["web", "es6"],
  optimization: {
    splitChunks: {
      chunks: "initial",
      cacheGroups: {
        default: {
          name: "vendors",
          reuseExistingChunk: true,
        },
      },
    },
  },
};
