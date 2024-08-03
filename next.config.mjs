import UglifyJsPlugin from "uglifyjs-webpack-plugin";

export default {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.minimizer = [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true, // Defina como true se você quiser mapas de origem JS
          uglifyOptions: {
            compress: {
              drop_console: true,
            },
          },
        }),
      ];
    }
    return config;
  },
};
