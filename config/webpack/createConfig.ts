import webpack from 'webpack'
import { buildDevServer } from './builders/buildDevServer'
import { buildLoaders } from './builders/buildLoaders'
import { buildPlugins } from './builders/buildPlugins'
import { BuildOptions } from './types'

export const createConfig = (options: BuildOptions): webpack.Configuration => {
  const { mode, paths, isDev } = options

  return {
    mode,
    entry: paths.entry,
    output: {
      path: paths.build,
      filename: '[name].[contenthash].js',
      clean: true,
      publicPath: '/',
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      preferAbsolute: true,
      modules: [options.paths.src, 'node_modules'],
      mainFiles: ['index'],
      alias: {
        '@': options.paths.src,
      },
    },
    devtool: isDev ? 'eval-cheap-module-source-map' : false,
    devServer: isDev ? buildDevServer(options) : undefined,
  }
}
