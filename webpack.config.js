module.exports = {
  mode: process.env.NODE_ENV == "production" ? "production" : "development",
  entry: { main: "./src/main.tsx", sub: "./src/sub.tsx" },
  output: {
    path: `${__dirname}/dist/public`,
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  target: ["web", "es6"],
};
